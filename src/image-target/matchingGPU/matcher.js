const INLIER_THRESHOLD = 3;
//const MIN_NUM_INLIERS = 8;  //default
const MIN_NUM_INLIERS = 6;
const CLUSTER_MAX_POP = 8;
const HAMMING_THRESHOLD = 0.7;

const HOUGH_NUM_ANGLE_BINS = 12;
const HOUGH_NUM_SCALE_BINS = 10;
const HOUGH_NUM_XY_BINS = 5;

class Matcher {
  constructor(matchingData, gpu) {
    this.keyframes = matchingData;
    console.log("gpu matcher", matchingData);

    this.gpu = gpu;
    this.allKeypoints = this._buildKeypoints(this.keyframes);
    this.kernels = [];
  }

  matchDetection(queryWidth, queryHeight, featurePoints, combinedExtremas, queryDescriptors) {
    console.log("match Detection combinedExtremas", combinedExtremas, combinedExtremas.toArray());
    console.log("match Detection queryDescriptors", queryDescriptors, queryDescriptors.toArray());
    this.kernelIndex = 0; // reset kernelIndex

    for (let i = 0; i < this.allKeypoints.length; i++) {
      if (i > 0) break;
      const keypoints = this.allKeypoints[i];
      console.log("keypoints points: ", keypoints, keypoints.toArray());
      const hammingDistances = this._computeHamming(keypoints, combinedExtremas, queryDescriptors);
      console.log("hamming: ", hammingDistances.toArray());

      const matches = this._findMatchesWithHamming(hammingDistances);
      console.log("matches", matches.toArray());

      const houghMatches = this._findHoughMatches(keypoints, combinedExtremas, matches, queryWidth, queryHeight, this.keyframes[i].width, this.keyframes[i].height);
    }
  }

  _findHoughMatches(keypoints, combinedExtremas, matches, queryWidth, queryHeight, keyWidth, keyHeight) {
    if (this.kernelIndex === this.kernels.length) {
      // conpute hough bin index of all matched points
      // first dimension is the 16 neighbours indexes (each property is 2 neighbour, so 2*2*2*2)
      const k1 = this.gpu.createKernel(function(keypoints, combinedExtremas, matches) {
        const keypointIndex = matches[this.thread.z][this.thread.y];
        if (keypointIndex === -1) return -1;

        const {maxX, maxY, numXBins, numYBins, numAngleBins, numScaleBins, keycenterX, keycenterY} = this.constants;
        const minX = -maxX;
        const minY = -maxY;
        const minScale = -1;
        const maxScale = 1;
        const scaleK = 10.0;
        const scaleOneOverLogK = 1.0 / Math.log(scaleK);

        const keyX = keypoints[keypointIndex][0];
        const keyY = keypoints[keypointIndex][1];
        const keyscale = keypoints[keypointIndex][3];
        const keyangle = keypoints[keypointIndex][4];

        // extrema first dimension: [score, sigma, x, y, angle, freak1, freak2, ..., freak37]
        const queryX = combinedExtremas[this.thread.z][this.thread.y][2];
        const queryY = combinedExtremas[this.thread.z][this.thread.y][3];
        const queryscale = combinedExtremas[this.thread.z][this.thread.y][1];
        const queryangle = combinedExtremas[this.thread.z][this.thread.y][4];

        let angle = queryangle - keyangle;
        if (angle <= -Math.PI) angle += 2*Math.PI;
        else if (angle > Math.PI) angle -= 2*Math.PI;

        const scale = queryscale / keyscale;

         // 2x2 similarity
        const cos = scale * Math.cos(angle);
        const sin = scale * Math.sin(angle);
        const S = [cos, -sin, sin, cos];

        const tp = [
          S[0] * keyX + S[1] * keyY,
          S[2] * keyX + S[3] * keyY
        ];

        const tx = queryX - tp[0];
        const ty = queryY - tp[1];

        const x = S[0] * keycenterX + S[1] * keycenterY + tx;
        const y = S[2] * keycenterX + S[3] * keycenterY + ty;
        const newScale = Math.log(scale) * scaleOneOverLogK;

        // map properties to bins
        let fbinX = numXBins * (x - minX) / (maxX - minX);
        let fbinY = numYBins * (y - minY) / (maxY - minY);
        let fbinAngle = numAngleBins * (angle + Math.PI) / (2.0 * Math.PI);
        let fbinScale = numScaleBins * (newScale - minScale) / (maxScale - minScale);

        let binX = Math.floor(fbinX - 0.5);
        let binY = Math.floor(fbinY - 0.5);
        let binScale = Math.floor(fbinScale - 0.5);
        let binAngle = (Math.floor(fbinAngle - 0.5) + numAngleBins) % numAngleBins;

        // check can vote all 16 bins
        if (binX < 0 || binX + 1 >= numXBins || binY < 0 || binY + 1 >= numYBins || binScale < 0 || binScale +1 >= numScaleBins) {
          return -1;
        }

        if (this.thread.x % 2 === 1) binX += 1;
        if (Math.floor(this.thread.x / 2) % 2 === 1) binY += 1;
        if (Math.floor(this.thread.x / 4) % 2 === 1) {
          binAngle += 1;
          binAngle =  binAngle % numAngleBins;
        }
        if (Math.floor(this.thread.x / 8) % 2 === 1) binScale += 1;

        const binIndex = binX + binY * numXBins + binAngle * numXBins * numYBins + binScale * numXBins * numYBins * numAngleBins;
        return binIndex;
      }, {
        constants: {
          maxX: queryWidth * 1.2,
          maxY: queryHeight * 1.2,
          keycenterX: Math.floor(keyWidth / 2),
          keycenterY: Math.floor(keyHeight / 2),
          numXBins: HOUGH_NUM_XY_BINS,
          numYBins: HOUGH_NUM_XY_BINS,
          numAngleBins: HOUGH_NUM_ANGLE_BINS,
          numScaleBins: HOUGH_NUM_SCALE_BINS
        },
        pipeline: true,
        output: [16, matches.dimensions[0], matches.dimensions[1]]
      })

      // TODO: this kernel is slow, need better reduction
      // get the best voted
      const k2 = this.gpu.createKernel(function(binIndexes) {
        const {numBins, voteDimension1, voteDimension2, voteDimension3} = this.constants;

        let bestIndex = -1;
        let bestVote = -1;
        for (let n = 0; n < numBins; n++) {
          let vote = 0;
          for (let k = 0; k < voteDimension3; k++) {
            for (let j = 0; j < voteDimension2; j++) {
              for (let i = 0; i < voteDimension1; i++) {
                if (binIndexes[k][j][i] === n) vote += 1;
              }
            }
          }
          if (vote > bestVote) {
            bestVote = vote;
            bestIndex = n;
          }
        }
        return bestIndex;
      }, {
        constants: {
          voteDimension1: 16,
          voteDimension2: matches.dimensions[0],
          voteDimension3: matches.dimensions[1],
          numBins: HOUGH_NUM_XY_BINS * HOUGH_NUM_XY_BINS * HOUGH_NUM_ANGLE_BINS * HOUGH_NUM_SCALE_BINS,
        },
        pipeline: true,
        output: [1],
      })
      this.kernels.push([k1, k2]);
    }
    const [k1, k2] = this.kernels[this.kernelIndex++];
    const result1 = k1(keypoints, combinedExtremas, matches);
    console.log("hough result1", result1.toArray());
    const result2 = k2(result1);
    console.log("hough result2", result2.toArray());
  }

  _findMatchesWithHamming(hammingDistances) {
    if (this.kernelIndex === this.kernels.length) {
      const kernel = this.gpu.createKernel(function(hammingDistances) {
        const {featuresLength, hammingThreshold} = this.constants;

        let best1 = 0;
        let best2 = -1;
        for (let i = 1; i < featuresLength; i++) {
          if (hammingDistances[this.thread.y][this.thread.x][i] < hammingDistances[this.thread.y][this.thread.x][best1]) {
            best2 = best1;
            best1 = i;
          } else if (best2 === -1 || hammingDistances[this.thread.y][this.thread.x][i] < hammingDistances[this.thread.y][this.thread.x][best2]) {
            best2 = i;
          }
        }

        if (hammingDistances[this.thread.y][this.thread.x][best1] / hammingDistances[this.thread.y][this.thread.x][best2] < hammingThreshold) {
          return best1;
        }
        return -1;
      }, {
        constants: {featuresLength: hammingDistances.dimensions[0], hammingThreshold: HAMMING_THRESHOLD},
        pipeline: true,
        output: [hammingDistances.dimensions[1], hammingDistances.dimensions[2]]
      })
      this.kernels.push(kernel);
    }
    const kernel = this.kernels[this.kernelIndex++];
    const result = kernel(hammingDistances);
    return result;
  }

  _computeHamming(keypoints, combinedExtremas, queryDescriptors) {
    if (this.kernelIndex === this.kernels.length) {
      const kernel = this.gpu.createKernel(function(keypoints, combinedExtremas, queryDescriptors) {
        const {descriptorsLength} = this.constants;

        if (combinedExtremas[this.thread.z][this.thread.y][0] === 0) {
          return 10000;
        }
        const isMaxima = (combinedExtremas[this.thread.z][this.thread.y][0] > 0? 1: 0);
        if (isMaxima !== keypoints[this.thread.x][2]) {
          return 10000;
        }

        let d = 0;
        for (let i = 0; i < descriptorsLength; i++) {
          if (keypoints[this.thread.x][5+i] !== queryDescriptors[this.thread.z][this.thread.y][i]) {
            d += 1;
          }
        }
        return d;
      }, {
        constants: {descriptorsLength: queryDescriptors.dimensions[0]},
        pipeline: true,
        output: [keypoints.dimensions[1], queryDescriptors.dimensions[1], queryDescriptors.dimensions[2]],
      });
      this.kernels.push(kernel);
    }
    const kernel = this.kernels[this.kernelIndex++];
    const result = kernel(keypoints, combinedExtremas, queryDescriptors);
    return result;
  }

  // first dimension: [x, y, isMaxima, scale, angle, descriptors x 666]
  _buildKeypoints(keyframes) {
    const results = [];
    for (let j = 0; j < keyframes.length; j++) {
      const data = [];
      const points = keyframes[j].points;
      for (let k = 0; k < points.length; k++) {
        const point = points[k];
        const row = [];
        row[0] = point.x2D;
        row[1] = point.y2D;
        row[2] = (point.maxima? 1: 0);
        row[3] = point.scale;
        row[4] = point.angle;
        for (let l = 0; l < point.descriptors.length; l++) {
          row[5+l] = point.descriptors[l];
        }
        data.push(row);
      }
      const kernel = this.gpu.createKernel(function(data) {
        return data[this.thread.y][this.thread.x];
      }, {
        pipeline: true,
        output: [data[0].length, data.length]
      });
      const result = kernel(data);
      results.push(result);
    }
    return results;
  }
}

module.exports = {
  Matcher
}
