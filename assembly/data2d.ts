export class Data2D<T> {
  data: StaticArray<T>;
  width: i32;
  height: i32;
  constructor(width: i32, height: i32) {
    this.data = new StaticArray<T>(height * width);
    this.height = height;
    this.width = width;
  }
}
