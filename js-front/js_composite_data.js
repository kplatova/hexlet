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


export const car = z => z((x, y) => x);
export const cdr = z => z((x, y) => y);


// 
export const make = (numer, denom) => cons(numer, denom);

export const numer = rat => car(rat);
export const denom = rat => cdr(rat);

export const toString = (rat) => {
  return `${car(rat)} / ${cdr(rat)}`;
};

export const isEqual = (rat1, rat2) => {
  if (car(rat1) * cdr(rat2) === car(rat2) * cdr(rat1)) {
    return true;
  }

  return false;
}

export const add = (rat1, rat2) => {
  a = car(rat1);
  b = cdr(rat1);
  c = car(rat2);
  d = cdr(rat2);

  num = a * d + b * c;
  den = b * d;

  return make(num, den);
};
export const sub = (rat1, rat2) => {
  a = car(rat1);
  b = cdr(rat1);
  c = car(rat2);
  d = cdr(rat2);

  num = a * d - b * c;
  dem = b * d;

  return make(num, den);
};

export const mul = (rat1, rat2) => {
  a = car(rat1);
  b = cdr(rat1);
  c = car(rat2);
  d = cdr(rat2);

  num = a * c;
  dem = b * d;

  return make(num, den);
};

export const div = (rat1, rat2) => {
  a = car(rat1);
  b = cdr(rat1);
  c = car(rat2);
  d = cdr(rat2);

  num = a * d;
  dem = b * c;

  return make(num, den);
}
