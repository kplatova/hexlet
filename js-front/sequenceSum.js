// Функция sequenceSum, которая находит сумму
// последовательности целых чисел.
// рекурсия

const sequenceSum = (begin, end) => {
  if (begin > end) {
    return NaN;
  } else if (begin === end) {
    return begin;
  }
  return begin + sequenceSum(begin + 1, end);
};

export default sequenceSum;
// END