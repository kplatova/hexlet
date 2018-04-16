// BEGIN (write your solution here)
const sumOfSquares = (n) => {
  let sum = 0;
  let i = 1;
  while (i <= n) {
    sum += i * i;
    i += 1;
  }

  return sum;
};

const squareOfSum = (n) => {
  let sum = 0;
  let i = 1;
  while (i <= n) {
    sum += i;
    i += 1;
  }

  return sum * sum;
};

const sumSquareDifference = n => squareOfSum(n) - sumOfSquares(n);

export default sumSquareDifference;
