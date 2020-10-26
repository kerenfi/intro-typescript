import { IShape, Triangle, Circle, Square } from "./Shapes"

function calculateAreasOfMultipleShapes(
    shapes: IShape[]
  ) {
    return shapes.reduce(
      (calculatedArea, shape) => {
        return calculatedArea + shape.getArea();
      },
      0
    );
  }

const shapesArr: IShape[] = [
    new Triangle(2, 4),
    new Square(4),
    new Circle(3)
];

const sum = calculateAreasOfMultipleShapes(shapesArr);
console.log(`area sum = ${sum}`);

