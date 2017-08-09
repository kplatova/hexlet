import { makePoint, getX, getY, toString, quadrant } from 'hexlet-points';

const point = makePoint(1, -1);
console.log(getX(point));
console.log(getY(point));

console.log(point);
console.log(toString(point));
console.log(quadrant(point));


// pairs
export const makeSegment = (point1, point2) => cons(point1, point2);

export const startSegment = segment => car(segment);

export const endSegment = segment => cdr(segment);

export const segmentToString = segment =>
  `[${pointToString(startSegment(segment))}, ${pointToString(endSegment(segment))}]`;

export const midpointSegment = (segment) => {
  const startPoint = startSegment(segment);
  const endPoint = endSegment(segment);
  const x = (getX(startPoint) + getX(endPoint)) / 2;
  const y = (getY(startPoint) + getY(endPoint)) / 2;

  return makePoint(x, y);
};

// барьеры обстракции
export const makeRectangle = (point, width, height) => cons(point, cons(width, height));

export const startPoint = rectangle => car(rectangle);
export const height = rectangle => cdr(cdr(rectangle));
export const width = rectangle => car(cdr(rectangle));

export const square = rectangle => height(rectangle) * width(rectangle);
export const perimeter = rectangle => 2 * (height(rectangle) + width(rectangle));

export const containsTheOrigin = (rectangle) => {
  const point1 = startPoint(rectangle);
  const point2 = makePoint(getX(point1) + width(rectangle), getY(point1) - height(rectangle));

  return quadrant(point1) === 2 && quadrant(point2) === 4;
};
// END
