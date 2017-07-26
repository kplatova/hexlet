import calc from 'calc';

calc('+', 3,5);
calc('-', -3,15);

if (calc('+',3,5) !== 8) {
  console.log('Error');
}

// corner cases - пограничные случаи
calc('undefined', 3, 12); // NaN
calc('/', 8, 0); // Inf
calc('%', 8, 'string'); // Inf

// Функция sequenceSum, которая находит сумму последовательности целых чисел.
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
