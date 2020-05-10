import {Data2D} from './data2d';

class FeatureSetCoord {
  x: i32;
  y: i32;
  mx: f32;
  my: f32;
  maxSim: f32;
}
class FeatureSet {
  scale: f32;
  mindpi: f32;
  maxdpi: f32;
  num: f32;
  coords: StaticArray<FeatureSetCoord>;
}

class MakeTemplateResult {
  vlen: f32;
  template: Array<f32>;
  constructor(vlen: f32, template: Array<f32>) {
    this.vlen = vlen;
    this.template = template;
  }
}
class ExtractResult {
  featureMap: StaticArray<f32>;
  constructor(featureMap: StaticArray<f32>) {
    this.featureMap = featureMap;
  }
}

const DEFAULT_DPI:f32 = 72;
const MIN_IMAGE_PIXEL_SIZE:f32 = 28;

const SEARCH_SIZE1:i32 = 10;
const SEARCH_SIZE2:i32 = 2;
const TEMPLATE_SIZE:i32 = 22;
const MAP_SEARCH_SIZE1:i32 = 10;
const MAP_SEARCH_SIZE2:i32 = 2;
const MAX_SIM_THRESH:f32 = 0.95;
const TEMPLATE_SD_THRESH:f32 = 5.0;

const MAX_THRESH:f32 = 0.9;
const MIN_THRESH:f32 = 0.55;
const SD_THRESH:f32 = 8.0;
const OCCUPANCY_SIZE:f32 = 24 * 2 / 3;

export class FeatureExtractor {
  originalImage: Data2D<f32>;
  dpiList: Array<f32>;
  imageList: Array<Data2D<f32>>; 
  featureMap: StaticArray<f32>;

  constructor(imageData: Uint8Array, width: i32, height: i32) {
    this.originalImage = new Data2D<f32>(width, height);
    for (let i = 0; i < this.originalImage.data.length; i++) {
      this.originalImage.data[i] = <f32>imageData[i];
    }
  }

  execute(): void {
    this.dpiList = new Array<f32>();
    const maxdpi: f32 = DEFAULT_DPI;
    const mindpi: f32 = Mathf.floor(1.0 * MIN_IMAGE_PIXEL_SIZE / Mathf.min( <f32>this.originalImage.width, <f32>this.originalImage.height) * maxdpi * 1000) / 1000;
    let c = mindpi;
    while (true) {
      this.dpiList.push(c);
      c *= Mathf.pow(2.0, 1.0/3.0);
      if (c >= maxdpi * 0.95) {
        c = maxdpi;
        break;
      }
    }
    this.dpiList.push(c);
    this.dpiList.reverse();

    this.imageList = new Array<Data2D<f32>>();
    for (let i = 0; i < this.dpiList.length; i++) {
      const image = this._resizeImage(this.originalImage, this.dpiList[i]/maxdpi);
      this.imageList.push(image);
    }
    for (let i = 0; i < this.imageList.length; i++) {
      const ret = this._extract(this.imageList[i]);
      this.featureMap = ret.featureMap;
    }
  }

  getFeatureMap(imageIndex: i32): Float32Array {
    const ret = new Float32Array(this.featureMap.length);
    for (let i = 0; i < this.featureMap.length; i++) {
      ret[i] = this.featureMap[i];
    }
    return ret;
  }
  getImageNum(): i32 {
    return this.imageList.length;
  }
  getImage(imageIndex: i32): Float32Array {
    const image = new Float32Array(this.imageList[imageIndex].data.length);
    for (let i = 0; i < this.imageList[imageIndex].data.length; i++) {
      image[i] = this.imageList[imageIndex].data[i];
    }
    return image;
  }

  _resizeImage(originalImage: Data2D<f32>, ratio: f32): Data2D<f32> {
    const width = <i32>Mathf.round(<f32>originalImage.width * ratio);
    const height = <i32>Mathf.round(<f32>originalImage.height * ratio);

    const image = new Data2D<f32>(width, height);
    for (let i = 0; i < width; i++) {
      let si1 = <i32>Mathf.round(1.0 * <f32>i / ratio);
      let si2 = <i32>Mathf.round(1.0 * <f32>(i+1) / ratio) - 1;
      if (si2 >= originalImage.width) si2 = originalImage.width - 1;

      for (let j = 0; j < height; j++) {
        let sj1 = <i32>Mathf.round(1.0 * <f32>j / ratio);
        let sj2 = <i32>Mathf.round(1.0 * <f32>(j+1) / ratio) - 1;
        if (sj2 >= originalImage.height) sj2 = originalImage.height - 1;

        let sum: f32 = 0;
        let count: f32 = 0;
        for (let ii = si1; ii <= si2; ii++) {
          for (let jj = sj1; jj <= sj2; jj++) {
            sum += originalImage.data[jj * originalImage.width + ii];
            count += 1;
          }
        }
        image.data[j * width + i] = Mathf.floor(1.0 * sum / count);
      }
    }
    return image;
  }

  _extract(image: Data2D<f32>): ExtractResult {
    const imageData = image.data;
    const width = image.width;
    const height = image.height;

    // Step 1 - filter out interesting points. Interesting points have strong pixel value changed across neighbours
    const isPixelSelected = new Array<bool>(width * height);
    for (let i = 0; i < isPixelSelected.length; i++) isPixelSelected[i] = false;

    // Step 1.1 consider a pixel at position (x, y). compute:
    //   dx = ((data[x+1, y-1] - data[x-1, y-1]) + (data[x+1, y] - data[x-1, y]) + (data[x+1, y+1] - data[x-1, y-1])) * 256 / 3
    //   dy = ((data[x+1, y+1] - data[x+1, y-1]) + (data[x, y+1] - data[x, y-1]) + (data[x-1, y+1] - data[x-1, y-1])) * 256 / 3
    //   dValue =  sqrt(dx^2 + dy^2) / 2;
    const dValue = new Float32Array(imageData.length);
    for (let i = 0; i < width; i++) {
      dValue[i] = -1;
      dValue[width * (height-1) + i] = -1;
    }
    for (let j = 0; j < height; j++) {
      dValue[j*width] = -1;
      dValue[j*width + width-1] = -1;
    }

    for (let i = 1; i < width-1; i++) {
      for (let j = 1; j < height-1; j++) {
        let pos = i + width * j;

        let dx:f32 = 0.0;
        let dy:f32 = 0.0;
        for (let k = -1; k <= 1; k++) {
          dx += (imageData[pos + width*k + 1] - imageData[pos + width*k -1]);
          dy += (imageData[pos + width + k] - imageData[pos - width + k]);
        }
        dx /= (3 * 256);
        dy /= (3 * 256);
        dValue[pos] = Mathf.sqrt( (dx * dx + dy * dy) / 2);
      }
    }

    // Step 1.2 - select all pixel which is dValue largest than all its neighbour as "potential" candidate
    //  the number of selected points is still too many, so we use the value to further filter (e.g. largest the dValue, the better)
    const dValueHist = new Uint8Array(1000);
    for (let i = 0; i < 1000; i++) dValueHist[i] = 0;
    const neighbourOffsets = [-1, 1, -width, width];
    let allCount = 0;
    for (let i = 1; i < width-1; i++) {
      for (let j = 1; j < height-1; j++) {
        let pos = i + width * j;
        let isMax = true;
        for (let d = 0; d < neighbourOffsets.length; d++) {
          if (dValue[pos] <= dValue[pos + neighbourOffsets[d]]) {
            isMax = false;
            break;
          }
        }
        if (isMax) {
          let k = <i32>Mathf.floor(dValue[pos] * 1000);
          if (k > 999) k = 999;
          if (k < 0) k = 0;
          dValueHist[k] += 1;
          allCount += 1;
          isPixelSelected[pos] = true;
        }
      }
    }

    const maxPoints = 0.02 * width * height;
    let k = 999;
    let filteredCount = 0;
    while (k >= 0) {
      filteredCount += dValueHist[k];
      if (filteredCount > maxPoints) break;
      k--;
    }

    trace("image size: ", 1, width * height);
    trace("extracted featues: ", 1, allCount);
    trace("filtered featues: ", 1, filteredCount);

    for (let i = 0; i < isPixelSelected.length; i++) {
      if (isPixelSelected[i]) {
        if (dValue[i] * 1000 < <f32>k) isPixelSelected[i] = false;
      }
    }

    trace("selected count: ", 1, isPixelSelected.reduce((a, b) => {return a + (b?1:0);}, 0));

    // Step 2
    let pos: i32;
    let max: f32;
    let sim: f32;

    const featureMap = new StaticArray<f32>(imageData.length);
    for (let i = 0; i < width; i++) {
      for (let j = 0; j < height; j++) {
        pos = j * width + i;
        if (!isPixelSelected[pos]) {
          unchecked(featureMap[pos] = 1.0);
          continue;
        }

        //const ret = this._makeTemplate({imageData: imageData, width: width, height: height, cx: i, cy: j, templateSize: TEMPLATE_SIZE, sdThresh: TEMPLATE_SD_THRESH});
        const ret = this._makeTemplate(image, i, j, TEMPLATE_SIZE, TEMPLATE_SD_THRESH);

        //if (ret == null) trace("make template null");
        //else trace("make template ret: ", 1, ret.vlen);
        if (ret === null) {
          featureMap[pos] = 1.0;
          continue;
        }

        const template = ret.template;
        const vlen = ret.vlen;

        max = -1.0;
        for (let ii = -SEARCH_SIZE1; ii <= SEARCH_SIZE1; ii++) {
          for (let jj = -SEARCH_SIZE1; jj <= SEARCH_SIZE1; jj++) {
            if (ii * ii + jj * jj <= SEARCH_SIZE2 * SEARCH_SIZE2) continue;
            sim = this._getSimilarity(image, i+ii, j+jj, template, vlen, TEMPLATE_SIZE);
            if (sim == -1) continue;

            if (sim > max) {
              max = sim;
              if (max > MAX_SIM_THRESH) break;
            }
          }
          if (max > MAX_SIM_THRESH) break;
        }
        featureMap[pos] = max;
      }
    }

    return new ExtractResult(featureMap);
    // debugImageData({filename: "./featureMap_"+width+".png", data: featureMap, height: height, width: width});

    // Step 2.2 select feature
    //const coords = _selectFeature({imageData, width, height, dpi, featureMap, templateSize: TEMPLATE_SIZE, searchSize: SEARCH_SIZE2, occSize: OCCUPANCY_SIZE, maxSimThresh: MAX_THRESH, minSimThresh: MIN_THRESH, sdThresh: SD_THRESH});

    //return {featureMap, coords}
  }

  _makeTemplate(image: Data2D<f32>, cx: i32, cy: i32, templateSize: i32, sdThresh: f32): MakeTemplateResult|null {
    const imageData = image.data;
    const width = image.width;
    const height = image.height;

    if (cx - templateSize < 0 || cx + templateSize >= width) return null;
    if (cy - templateSize < 0 || cy + templateSize >= height) return null;

    const templateWidth = 2 * templateSize + 1;

    let average:f32 = 0.0;
    for (let i = cx - templateSize; i <= cx + templateSize; i++) {
      for (let j = cy - templateSize; j <= cy + templateSize; j++) {
        unchecked(average += imageData[j*width+i]);
      }
    }
    average /= <f32>(templateWidth * templateWidth);

    const template = new Array<f32>( templateWidth*templateWidth );
    let vlen:f32 = 0.0;
    for (let i = cx - templateSize; i <= cx + templateSize; i++) {
      for (let j = cy - templateSize; j <= cy + templateSize; j++) {
        const diff:f32 = unchecked(imageData[j*width+i] - average);
        const templateX = i - (cx - templateSize);
        const templateY = j - (cy - templateSize);
        unchecked(template[templateY * templateWidth + templateX] = diff);
        vlen += (diff*diff);
      }
    }

    if (vlen == 0) return null;
    if (vlen / <f32>(templateWidth * templateWidth) < sdThresh) return null;
    vlen = Mathf.sqrt(vlen);

    return new MakeTemplateResult(vlen, template);
  }

  _getSimilarity(image: Data2D<f32>, cx: i32, cy: i32, template: Array<f32>, vlen: f32, templateSize: i32): f32 {
    const imageData = image.data;
    const width = image.width;
    const height = image.height;

    if (cx - templateSize < 0 || cx + templateSize >= width) return -1;
    if (cy - templateSize < 0 || cy + templateSize >= height) return -1;

    const templateWidth = 2 * templateSize + 1;

    let sx:f32 = 0.0;
    let sxx:f32 = 0.0;
    let sxy:f32 = 0.0;

    for (let i = cx - templateSize; i <= cx + templateSize; i++) {
      for (let j = cy - templateSize; j <= cy + templateSize; j++) {
        const v = unchecked(imageData[j*width+i]);
        const templateX = i - (cx - templateSize);
        const templateY = j - (cy - templateSize);
        sx += v;
        sxx += v * v;
        sxy += unchecked(v * template[templateY * templateWidth + templateX]);
      }
    }

    let vlen2:f32 = sxx - sx*sx / ( <f32>templateWidth * <f32>templateWidth);
    if (vlen2 == 0) return -1;
    vlen2 = Mathf.sqrt(vlen2);

    const sim:f32 = sxy / (vlen * vlen2);
    return sim;
  }
}
