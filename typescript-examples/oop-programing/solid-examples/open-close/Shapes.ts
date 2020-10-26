export interface IShape {
  getArea(): number;
}

export class Circle implements IShape {
  private radius: number = 0;
  constructor(radius: number) {
    this.radius = radius;
  }

  public getArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}


export class Square implements IShape {
  private length = 0;
  constructor(length: number) {
    this.length = length;
  }

  public getArea() {
    return Math.pow(this.length, 2);
  }
}

export class Triangle implements IShape {
  private base = 0;
  private height = 0;
  constructor(base: number, height: number) {
    this.base = length;
    this.height = height;
  }

  public getArea() {
    return (this.base, this.height)/2;
  }
}