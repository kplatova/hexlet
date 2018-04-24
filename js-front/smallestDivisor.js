// Функция должна находить минимальный делитель переданного числа.
const smallestDivisor = (num) => {
  const iter = (acc) => {
    if (acc > num / 2) {
      return num;
    }
    if (num % acc === 0) {
      return acc;
    }
    return iter(acc + 1);
  };

  return iter(2);
};


const smallestDivisor = (num) => {
  if (num < 1) {
    return NaN;
  }
  if (num === 1) {
    return num;
  }
  let divisor = 2;

  while (num % divisor !== 0) {
    divisor += 1;
  }

  return divisor;
};
// END