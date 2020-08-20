const {createRandomizer} = require('../utils/randomizer.js');

const INLIER_THRESHOLD = 3;
//const MIN_NUM_INLIERS = 8;  //default
const MIN_NUM_INLIERS = 6;
const CLUSTER_MAX_POP = 8;
const HAMMING_THRESHOLD = 0.7;

const HOUGH_NUM_ANGLE_BINS = 12;
const HOUGH_NUM_SCALE_BINS = 10;
const HOUGH_NUM_XY_BINS = 5;

//const HOMOGRAPHY_DEFAULT_NUM_HYPOTHESES = 1024;
const HOMOGRAPHY_DEFAULT_NUM_HYPOTHESES = 1064;
//const HOMOGRAPHY_DEFAULT_MAX_TRIALS = 1064;
//

const HOMOGRAPHY_DEFAULT_CAUCHY_SCALE = 0.01;

// first dimension of querypoints|keypoints: [isMaxima, x, y, scale, angle, descriptors x 666]

class Matcher {
  constructor(matchingData, gpu) {
    this.keyframes = matchingData;
    console.log("gpu matcher", matchingData);

    this.gpu = gpu;
    this.allKeypoints = this._buildKeypoints(this.keyframes);
    this.kernels = [];
  }

  matchDetection(queryWidth, queryHeight, featurePoints, combinedExtremas, queryDescriptors) {
    this.kernelIndex = 0; // reset kernelIndex

    const querypoints = this._buildQuerypoints(combinedExtremas, queryDescriptors);
    const querypointsArr = querypoints.toArray();
    console.log("querypoints", querypointsArr);

    for (let i = 0; i < this.allKeypoints.length; i++) {
      if (i > 0) break;
      const keypoints = this.allKeypoints[i];
      const keypointsArr = keypoints.toArray();
      console.log("keypoints points: ", keypoints, keypoints.toArray());
      const hammingDistances = this._computeHamming(keypoints, querypoints);
      console.log("hamming: ", hammingDistances.toArray());
      const matches = this._findMatchesWithHamming(hammingDistances);
      const matchesArr = matches.toArray();
      console.log("matches", matchesArr);
      {
        const debugMatches = [];
        let curqueryIndex = -1;
        for (let j = 0; j < matchesArr.length; j++) {
          if (querypointsArr[j][0] != -1) curqueryIndex += 1;
          if (matchesArr[j] != -1) {
            debugMatches.push({queryIndex: curqueryIndex, keyIndex: matchesArr[j]});
          }
        }
        console.log("debug Matches", debugMatches);
      }

      const houghMatches = this._findHoughMatches(keypoints, querypoints, matches, queryWidth, queryHeight, this.keyframes[i].width, this.keyframes[i].height);
      {
        const houghMatchesArr = houghMatches.toArray();
        const debugMatches = [];
        let curqueryIndex = -1;
        for (let j = 0; j < houghMatchesArr.length; j++) {
          if (querypointsArr[j][0] != -1) curqueryIndex += 1;
          if (houghMatchesArr[j] != -1) {
            debugMatches.push({queryIndex: curqueryIndex, keyIndex: houghMatchesArr[j]});
          }
        }
        console.log("houghMatches", houghMatches.toArray());
        console.log("debug hough Matches", debugMatches);
      }

      const homography = this._computeHomography(keypoints, querypoints, houghMatches, this.keyframes[i].width, this.keyframes[i].height);
    }
  }

  _computeHomography(keypoints, querypoints, houghMatches, keyWidth, keyHeight) {
    const queryIndexes = this._generateRandomIndexes(houghMatches);
    console.log("queryINdexes", queryIndexes.toArray());

    const valid1 = this._checkPointsValid(keypoints, querypoints, houghMatches, queryIndexes);
    console.log("valid1: ", valid1.toArray());

    const homographies = this._computeAllHomographies(keypoints, querypoints, houghMatches, queryIndexes, valid1);

    const valid2 = this._checkHomographiesValid(homographies, keyWidth, keyHeight, valid1);
    console.log("valid2: ", valid2.toArray());

    const costs = this._computeHomographiesCosts(homographies, keypoints, querypoints, houghMatches, valid2);
    console.log("h cost", costs.toArray());

    const finalH = this._getBestHomography(homographies, costs, valid1, valid2);
    console.log("final H", finalH.toArray());

    return finalH;
  }

  _getBestHomography(homographies, costs) {
    if (this.kernelIndex === this.kernels.length) {
      // sum cost for each homography
      const k = this.gpu.createKernel(function(costs) {
        const {numHypothesis} = this.constants;

        let bestIndex = -1;
        let bestScore = 10000000;
        for (let i = 0; i < numHypothesis; i++) {
          if (costs[i] < costs[bestIndex]) {
            bestIndex = i;
          }
        }
        return bestIndex;
      }, {
        constants: {numHypothesis: HOMOGRAPHY_DEFAULT_NUM_HYPOTHESES},
        pipeline: true,
        output: [1],
      });

      const k2 = this.gpu.createKernel(function(homographies, bestIndex) {
        if (bestIndex[0] === -1) return -1;
        return homographies[bestIndex[0]][this.thread.x];
      }, {
        pipeline: true,
        output: [8],
      });

      this.kernels.push([k, k2]);
    }
    const kernels = this.kernels[this.kernelIndex++];
    const result1 = kernels[0](costs);
    console.log("sumcost", result1.toArray());
    const result2 = kernels[1](homographies, result1);
    return result2;
  }

  _computeHomographiesCosts(homographies, keypoints, querypoints, matches, valid2) {
    if (this.kernelIndex === this.kernels.length) {
      const k = this.gpu.createKernel(function(homographies, keypoints, querypoints, matches, valid2) {
        if (valid2[this.thread.y] === 0) return 10000000; // large number

        if (matches[this.thread.x] === -1) return 0;

        const {oneOverScale2} = this.constants;

        const queryIndex = this.thread.x;
        const keyIndex = matches[this.thread.x];

        const mapped = multiplyPointHomographyInhomogenous(
          keypoints[keyIndex][1],
          keypoints[keyIndex][2],
          homographies[this.thread.y][0],
          homographies[this.thread.y][1],
          homographies[this.thread.y][2],
          homographies[this.thread.y][3],
          homographies[this.thread.y][4],
          homographies[this.thread.y][5],
          homographies[this.thread.y][6],
          homographies[this.thread.y][7],
          1 // normalized homography
        );
        const dx = mapped[0] - querypoints[queryIndex][1];
        const dy = mapped[1] - querypoints[queryIndex][2];
        const cost = Math.log(1 + (dx*dx + dy*dy) * oneOverScale2);
        return cost;
      }, {
        constants: {oneOverScale2: 1.0 / (HOMOGRAPHY_DEFAULT_CAUCHY_SCALE * HOMOGRAPHY_DEFAULT_CAUCHY_SCALE)},
        pipeline: true,
        output: [querypoints.dimensions[1], HOMOGRAPHY_DEFAULT_NUM_HYPOTHESES]
      });

      // combine costs
      const k2 = this.gpu.createKernel(function(costs, valid2){
        if (valid2[this.thread.y] === 0) return 10000000; // large number

        const {queryDimension} = this.constants;
        let sumCost = 0;
        for (let i = 0; i < queryDimension; i++) {
          sumCost += costs[this.thread.x][i];
        }
        return sumCost;
      }, {
        constants: {queryDimension: querypoints.dimensions[1]},
        pipeline: true,
        output: [HOMOGRAPHY_DEFAULT_NUM_HYPOTHESES]
      });
      this.kernels.push([k, k2]);
    }
    const kernels = this.kernels[this.kernelIndex++];
    const result1 = kernels[0](homographies, keypoints, querypoints, matches, valid2);
    console.log("all costs", result1.toArray());
    const result2 = kernels[1](result1, valid2);
    return result2;
  }

  _checkHomographiesValid(homographies, keyWidth, keyHeight, valid1) {
    // check four corners of keyframe consistent after homography map
    if (this.kernelIndex === this.kernels.length) {
      const k = this.gpu.createKernel(function(homographies, valid1) {
        if (valid1[this.thread.x] === 0) return 0;

        const {keyWidth, keyHeight} = this.constants;

        const xs = [0, keyWidth, keyWidth, 0];
        const ys = [0, 0, keyHeight, keyHeight];
        let xps = [-1, -1, -1, -1];
        let yps = [-1, -1, -1, -1];
        for (let i = 0; i < 4; i++) {
          const mapped = multiplyPointHomographyInhomogenous(xs[i], ys[i],
            homographies[this.thread.x][0],
            homographies[this.thread.x][1],
            homographies[this.thread.x][2],
            homographies[this.thread.x][3],
            homographies[this.thread.x][4],
            homographies[this.thread.x][5],
            homographies[this.thread.x][6],
            homographies[this.thread.x][7],
            1 // normalized homography
          );
          xps[i] = mapped[0];
          yps[i] = mapped[1];
        }
        const x1 = [xs[0], ys[0]];
        const x2 = [xs[1], ys[1]];
        const x3 = [xs[2], ys[2]];
        const x4 = [xs[3], ys[3]];
        const x1p = [xps[0], yps[0]];
        const x2p = [xps[1], yps[1]];
        const x3p = [xps[2], yps[2]];
        const x4p = [xps[3], yps[3]];

        if (checkFourPointsConsistent(x1, x2, x3, x4, x1p, x2p, x3p, x4p) === 1) return 1;
        return 0;
      }, {
        constants: {keyWidth, keyHeight},
        pipeline: true,
        output: [HOMOGRAPHY_DEFAULT_NUM_HYPOTHESES]
      });
      this.kernels.push(k);
    }
    const kernel = this.kernels[this.kernelIndex++];
    const result = kernel(homographies, valid1);
    return result;
  }
  _checkPointsValid(keypoints, querypoints, matches, queryIndexes) {
    if (this.kernelIndex === this.kernels.length) {
      // check original querypoints, keypoints consistent. i.e. four corresponding corners
      const k = this.gpu.createKernel(function(keypoints, querypoints, matches, queryIndexes) {
        const queryIndex1 = queryIndexes[this.thread.x][0];
        const keyIndex1 = matches[queryIndex1];
        const queryIndex2 = queryIndexes[this.thread.x][1];
        const keyIndex2 = matches[queryIndex2];
        const queryIndex3 = queryIndexes[this.thread.x][2];
        const keyIndex3 = matches[queryIndex3];
        const queryIndex4 = queryIndexes[this.thread.x][3];
        const keyIndex4 = matches[queryIndex4];

        const x1 = [keypoints[keyIndex1][1], keypoints[keyIndex1][2]];
        const x2 = [keypoints[keyIndex2][1], keypoints[keyIndex2][2]];
        const x3 = [keypoints[keyIndex3][1], keypoints[keyIndex3][2]];
        const x4 = [keypoints[keyIndex4][1], keypoints[keyIndex4][2]];
        const x1p = [querypoints[queryIndex1][1], querypoints[queryIndex1][2]];
        const x2p = [querypoints[queryIndex2][1], querypoints[queryIndex2][2]];
        const x3p = [querypoints[queryIndex3][1], querypoints[queryIndex3][2]];
        const x4p = [querypoints[queryIndex4][1], querypoints[queryIndex4][2]];

        if (checkFourPointsConsistent(x1, x2, x3, x4, x1p, x2p, x3p, x4p) === 1) return 1;
        return 0;
      }, {
        pipeline: true,
        output: [HOMOGRAPHY_DEFAULT_NUM_HYPOTHESES]
      })
      this.kernels.push(k);
    }
    const kernel = this.kernels[this.kernelIndex++];
    const result = kernel(keypoints, querypoints, matches, queryIndexes);
    return result;
  }

  // TODO, randomize inside the kernel
  _generateRandomIndexes(matches) {
    if (this.kernelIndex === this.kernels.length) {
      const randomize = this.gpu.createKernel(function(perm) {
        return perm[this.thread.y][this.thread.x];
      }, {
        pipeline: true,
        output: [4, HOMOGRAPHY_DEFAULT_NUM_HYPOTHESES]
      });
      this.kernels.push(randomize);
    }
    const kernel = this.kernels[this.kernelIndex++];

    const matchesArr = matches.toArray();
    let count = 0;
    for (let i = 0; i < matchesArr.length; i++) {
      if (matchesArr[i] !== -1) count += 1;
    }
    const perm = [];
    for (let i = 0; i <count; i++) {
      perm[i] = i;
    }
    const randomizer = createRandomizer();
    const queryIndexesData = [];
    randomizer.arrayShuffle({arr: perm, sampleSize: perm.length});
    for (let i = 0; i < HOMOGRAPHY_DEFAULT_NUM_HYPOTHESES; i++) {
      randomizer.arrayShuffle({arr: perm, sampleSize: 4});
      queryIndexesData.push([]);

      for (let j = 0; j < 4; j++) {
        let r = perm[j];
        for (let k = 0; k < matchesArr.length; k++) {
          if (matchesArr[k] === -1) continue;

          if (r === 0) {
            queryIndexesData[queryIndexesData.length-1].push(k);
            break;
          }
          r -= 1;
        }
      }
    }
    const queryIndexes = kernel(queryIndexesData);
    return queryIndexes;
  }

  _computeAllHomographies(keypoints, querypoints, matches, queryIndexes, valid1) {
    if (this.kernelIndex === this.kernels.length) {
      // solve Ax = b with gaussian elimination(where x is the desired homography)
      //   ref: https://math.stackexchange.com/questions/494238/how-to-compute-homography-matrix-h-from-corresponding-points-2d-2d-planar-homog
      const build = this.gpu.createKernel(function(keypoints, querypoints, matches, queryIndexes, valid1) {
        if (valid1[this.thread.z] === 0) return -1;

        const queryIndex = queryIndexes[this.thread.z][Math.floor(this.thread.y/2)];
        const keyIndex = matches[queryIndex];

        if (this.thread.y % 2 === 0) {
          if (this.thread.x === 0) {
            return keypoints[keyIndex][1];
          }
          if (this.thread.x === 1) {
            return keypoints[keyIndex][2];
          }
          if (this.thread.x === 2) {
            return 1;
          }
          if (this.thread.x === 6) {
            return -(keypoints[keyIndex][1] * querypoints[queryIndex][1]);
          }
          if (this.thread.x === 7) {
            return -(keypoints[keyIndex][2] * querypoints[queryIndex][1]);
          }
          if (this.thread.x === 8) {
            return querypoints[queryIndex][1];
          }
          return 0;
        }
        else {
          if (this.thread.x === 3) {
            return keypoints[keyIndex][1];
          }
          if (this.thread.x === 4) {
            return keypoints[keyIndex][2];
          }
          if (this.thread.x === 5) {
            return 1;
          }
          if (this.thread.x === 6) {
            return -(keypoints[keyIndex][1] * querypoints[queryIndex][2]);
          }
          if (this.thread.x === 7) {
            return -(keypoints[keyIndex][2] * querypoints[queryIndex][2]);
          }
          if (this.thread.x === 8) {
            return querypoints[queryIndex][2];
          }
        }
      }, {
        pipeline: true,
        output: [9, 8, HOMOGRAPHY_DEFAULT_NUM_HYPOTHESES]
      });

      const operateRows = [];
      for (let i = 0; i < 2; i++) {
        // reduce matrix row by row into euclidean form
        // important: use the row with maximum value in the leading index as the reduction row
        //   avoid the the leading value is zero
        const operateRow = this.gpu.createKernel(function(A, index, valid1) {
          if (valid1[this.thread.z] === 0) return -1;

          let maxRow = index;
          let maxValue = Math.abs(A[this.thread.z][index][index]);
          for (let i = index+1; i < 8; i++) {
            let absValue = Math.abs(A[this.thread.z][i][index]);
            if (absValue > maxValue) {
              maxRow = i;
              maxValue = absValue;
            }
          }

          let useRow = this.thread.y;
          if (this.thread.y === index) {
            useRow = maxRow;
          }
          if (this.thread.y === maxRow) {
            useRow = index;
          }
          let factor = A[this.thread.z][useRow][index] / A[this.thread.z][maxRow][index];
          if (this.thread.y < index || this.thread.y === index) factor = 0;

          return A[this.thread.z][useRow][this.thread.x] - A[this.thread.z][maxRow][this.thread.x] * factor;
        }, {
          pipeline: true,
          output: [9, 8, HOMOGRAPHY_DEFAULT_NUM_HYPOTHESES]
        });
        operateRows.push(operateRow);
      }

      const initializeX = this.gpu.createKernel(function() {
        return 0;
      }, {
        pipeline: true,
        output: [8, HOMOGRAPHY_DEFAULT_NUM_HYPOTHESES]
      });

      // back propagation the euclidean forms to find the X (i.e. homorgraphy)
      const backRows = [];
      for (let i = 0; i < 2; i++) {
        const backRow = this.gpu.createKernel(function(A, X, index, valid1) {
          if (valid1[this.thread.y] === 0) return -1;

          if (index === 0) { // last operation is special, just reduce number kernel, so put it here
            return -X[this.thread.y][this.thread.x] / A[this.thread.y][this.thread.x][this.thread.x];
          }

          if (this.thread.x >= index) return X[this.thread.y][this.thread.x];

          if (index === 8) return X[this.thread.y][this.thread.x] - A[this.thread.y][this.thread.x][index];
          return X[this.thread.y][this.thread.x] - X[this.thread.y][index] * A[this.thread.y][this.thread.x][index] / A[this.thread.y][index][index];
        }, {
          pipeline: true,
          output: [8, HOMOGRAPHY_DEFAULT_NUM_HYPOTHESES]
        });
        backRows.push(backRow);
      }
      this.kernels.push([build, operateRows, initializeX, backRows]);
    }
    const [build, operateRows, initializeX, backRows] = this.kernels[this.kernelIndex++];

    let M = build(keypoints, querypoints, matches, queryIndexes, valid1);
    for (let i = 0; i < 8; i++) {
      M = operateRows[i%2](M, i, valid1);
    }
    let X = initializeX();
    for (let i = 8; i >= 0; i--) {
      X = backRows[i%2](M, X, i, valid1);
    }
    console.log("Homo: ", X.toArray());
    return X;
  }

  _findHoughMatches(keypoints, querypoints, matches, queryWidth, queryHeight, keyWidth, keyHeight) {
    if (this.kernelIndex === this.kernels.length) {
      // conpute hough bin index of all matched points
      // first dimension is the 16 neighbours indexes (each property is 2 neighbour, so 2*2*2*2)
      const k1 = this.gpu.createKernel(function(keypoints, querypoints, matches) {
        const keypointIndex = matches[this.thread.y];
        if (keypointIndex === -1) return -1;

        const {maxX, maxY, numXBins, numYBins, numAngleBins, numScaleBins, keycenterX, keycenterY} = this.constants;
        const minX = -maxX;
        const minY = -maxY;
        const minScale = -1;
        const maxScale = 1;
        const scaleK = 10.0;
        const scaleOneOverLogK = 1.0 / Math.log(scaleK);

        const keyX = keypoints[keypointIndex][1];
        const keyY = keypoints[keypointIndex][2];
        const keyscale = keypoints[keypointIndex][3];
        const keyangle = keypoints[keypointIndex][4];

        const queryX = querypoints[this.thread.y][1];
        const queryY = querypoints[this.thread.y][2];
        const queryscale = querypoints[this.thread.y][3];
        const queryangle = querypoints[this.thread.y][4];

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
        output: [16, querypoints.dimensions[1]]
      })

      // TODO: this kernel maybe slow, need better reduction
      // get the best voted
      const k2 = this.gpu.createKernel(function(binIndexes) {
        const {numBins, voteDimension1, voteDimension2} = this.constants;

        let bestIndex = -1;
        let bestVote = -1;
        for (let n = 0; n < numBins; n++) {
          let vote = 0;
          for (let j = 0; j < voteDimension2; j++) {
            for (let i = 0; i < voteDimension1; i++) {
              if (binIndexes[j][i] === n) vote += 1;
            }
          }
          if (vote > bestVote) {
            bestVote = vote;
            bestIndex = n;
          }
        }
        if (bestVote < 3) return -1;
        return bestIndex;
      }, {
        constants: {
          voteDimension1: 16,
          voteDimension2: querypoints.dimensions[1],
          numBins: HOUGH_NUM_XY_BINS * HOUGH_NUM_XY_BINS * HOUGH_NUM_ANGLE_BINS * HOUGH_NUM_SCALE_BINS,
        },
        pipeline: true,
        output: [1],
      })

      const k3 = this.gpu.createKernel(function(matches, binIndexes, bestBinIndex) {
        const {numXBins, numYBins, numAngleBins, numScaleBins, numXYBins, numXYAngleBins, binDeltaThreshold} = this.constants;

        if (matches[this.thread.x] === -1) return -1;

        const binIndex = binIndexes[this.thread.x][0];
        const maxVoteIndex = bestBinIndex[0];

        // get back bins from vote index
        const binX = Math.floor(((binIndex % numXYAngleBins) % numXYBins) % numXBins);
        const binY = Math.floor((((binIndex - binX) % numXYAngleBins) % numXYBins) / numXBins);
        const binAngle = Math.floor(((binIndex - binX - (binY * numXBins)) % numXYAngleBins) / numXYBins);
        const binScale = Math.floor((binIndex - binX - (binY * numXBins) - (binAngle * numXYBins)) / numXYAngleBins);

        const maxBinX = Math.floor(((maxVoteIndex % numXYAngleBins) % numXYBins) % numXBins);
        const maxBinY = Math.floor((((maxVoteIndex - maxBinX) % numXYAngleBins) % numXYBins) / numXBins);
        const maxBinAngle = Math.floor(((maxVoteIndex - maxBinX - (maxBinY * numXBins)) % numXYAngleBins) / numXYBins);
        const maxBinScale = Math.floor((maxVoteIndex - maxBinX - (maxBinY * numXBins) - (maxBinAngle * numXYBins)) / numXYAngleBins);

        if (Math.abs(binX - (maxBinX)) > binDeltaThreshold) return -1;
        if (Math.abs(binY - (maxBinY)) > binDeltaThreshold) return -1;
        if (Math.abs(binScale - (maxBinScale)) > binDeltaThreshold) return -1;
        let dAngle = Math.abs(binAngle - (maxBinAngle));
        dAngle = Math.min(dAngle, numAngleBins - dAngle);
        if (dAngle > binDeltaThreshold) return -1;

        return matches[this.thread.x];
      }, {
        constants: {
          numXBins: HOUGH_NUM_XY_BINS,
          numYBins: HOUGH_NUM_XY_BINS,
          numAngleBins: HOUGH_NUM_ANGLE_BINS,
          numScaleBins: HOUGH_NUM_SCALE_BINS,
          numXYBins: HOUGH_NUM_XY_BINS * HOUGH_NUM_XY_BINS,
          numXYAngleBins:  HOUGH_NUM_XY_BINS * HOUGH_NUM_XY_BINS * HOUGH_NUM_ANGLE_BINS,
          binDeltaThreshold: 1,
        },
        pipeline: true,
        output: [querypoints.dimensions[1]]
      })
      this.kernels.push([k1, k2, k3]);
    }
    const [k1, k2, k3] = this.kernels[this.kernelIndex++];
    const binIndexes = k1(keypoints, querypoints, matches);
    const maxBinIndex = k2(binIndexes);
    const houghMatches = k3(matches, binIndexes, maxBinIndex);
    return houghMatches;
  }

  _findMatchesWithHamming(hammingDistances) {
    if (this.kernelIndex === this.kernels.length) {
      const kernel = this.gpu.createKernel(function(hammingDistances) {
        const {featuresLength, hammingThreshold} = this.constants;

        let best1 = 0;
        let best2 = -1;
        for (let i = 1; i < featuresLength; i++) {
          if (hammingDistances[this.thread.x][i] < hammingDistances[this.thread.x][best1]) {
            best2 = best1;
            best1 = i;
          } else if (best2 === -1 || hammingDistances[this.thread.x][i] < hammingDistances[this.thread.x][best2]) {
            best2 = i;
          }
        }

        if (hammingDistances[this.thread.x][best1] / hammingDistances[this.thread.x][best2] < hammingThreshold) {
          return best1;
        }
        return -1;
      }, {
        constants: {featuresLength: hammingDistances.dimensions[0], hammingThreshold: HAMMING_THRESHOLD},
        pipeline: true,
        output: [hammingDistances.dimensions[1]]
      })
      this.kernels.push(kernel);
    }
    const kernel = this.kernels[this.kernelIndex++];
    const result = kernel(hammingDistances);
    return result;
  }

  _computeHamming(keypoints, querypoints) {
    if (this.kernelIndex === this.kernels.length) {
      const kernel = this.gpu.createKernel(function(keypoints, querypoints) {
        const {descriptorsLength} = this.constants;

        // maxima match maxima, minima match minima
        if (querypoints[this.thread.y][0] !== keypoints[this.thread.x][0]) {
          return 10000;
        }
        let d = 0;
        for (let i = 0; i < descriptorsLength; i++) {
          if (querypoints[this.thread.y][5+i] !== keypoints[this.thread.x][5+i]) {
            d += 1;
          }
        }
        return d;
      }, {
        constants: {descriptorsLength: querypoints.dimensions[0] - 5},
        pipeline: true,
        output: [keypoints.dimensions[1], querypoints.dimensions[1]],
      });
      this.kernels.push(kernel);
    }
    const kernel = this.kernels[this.kernelIndex++];
    const result = kernel(keypoints, querypoints);
    return result;
  }

  // first dimension: [isMaxima, x, y, scale, angle, descriptors x 666]
  //   isMaxima:  -1 means not extrema, 1 means maxima, 0 means minima
  _buildQuerypoints(combinedExtremas, queryDescriptors) {
    if (this.kernels.length === this.kernelIndex) {
      const k = this.gpu.createKernel(function(combinedExtremas, queryDescriptors) {
        const {dimension1} = this.constants;
        const indexZ = Math.floor(this.thread.y / dimension1);
        const indexY = this.thread.y % dimension1;

        // extrema first dimension: [score, sigma, x, y, angle, freak1, freak2, ..., freak37]
        if (this.thread.x === 0) {
          if (combinedExtremas[indexZ][indexY][0] === 0) return -1;
          if (combinedExtremas[indexZ][indexY][0] > 0) return 1;
          return 0;
        }
        if (this.thread.x === 1) return combinedExtremas[indexZ][indexY][2];
        if (this.thread.x === 2) return combinedExtremas[indexZ][indexY][3];
        if (this.thread.x === 3) return combinedExtremas[indexZ][indexY][1];
        if (this.thread.x === 4) return combinedExtremas[indexZ][indexY][4];

        return queryDescriptors[indexZ][indexY][this.thread.x - 5];
      }, {
        constants: {dimension1: queryDescriptors.dimensions[1]},
        pipeline: true,
        output: [5 + queryDescriptors.dimensions[0], queryDescriptors.dimensions[1] * queryDescriptors.dimensions[2]]
      });
      this.kernels.push(k);
    }
    const kernel = this.kernels[this.kernelIndex++];
    const result = kernel(combinedExtremas, queryDescriptors);
    return result;
  }

  _buildKeypoints(keyframes) {
    const results = [];
    for (let j = 0; j < keyframes.length; j++) {
      const data = [];
      const points = keyframes[j].points;
      for (let k = 0; k < points.length; k++) {
        const point = points[k];
        const row = [];
        row[0] = (point.maxima? 1: 0);
        row[1] = point.x2D;
        row[2] = point.y2D;
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
