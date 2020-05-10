// The entry file of your WebAssembly module.
import {FeatureExtractor} from './feature_extractor';

const featureExtractors = new Array<FeatureExtractor>();

export function featureExtractorCreate(imageData: Uint8Array, width: i32, height: i32): i32 {
  const id = featureExtractors.length;
  const featureExtractor = new FeatureExtractor(imageData, width, height);
  featureExtractors.push(featureExtractor);
  return id;
}
export function featureExtractorExecute(extractorId: i32): void {
  const extractor = featureExtractors[extractorId];
  extractor.execute();
}
export function featureExtractorGetImage(extractorId: i32, imageIndex: i32): Float32Array {
  const extractor = featureExtractors[extractorId];
  return extractor.getImage(imageIndex);
}
export function featureExtractorGetImageNum(extractorId: i32): i32 {
  const extractor = featureExtractors[extractorId];
  return extractor.getImageNum();
}
export function featureExtractorGetFeatureMap(extractorId: i32, imageIndex: i32): Float32Array {
  const extractor = featureExtractors[extractorId];
  return extractor.getFeatureMap(imageIndex);
}
