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
// END


// Факториал с помощью итеративного процесса
const factorial = (n) => {
  const iter = (current, acc) => {
    if (current === 0) {
      return acc;
    }
    
    return iter(current - 1, acc * current);
  }

  return iter(n, 1);
}

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

export default smallestDivisor;

factorial(4);
// Алгоритм
// Задание начального состояния
// Проверка окончания процесса
// Получение нового состояния
// Повторение второго шага


Рекурсивный vs Итеративный

РП проще записать
РП не может быть эффективно реализован (отложенное вычисление, потребляет память)
ИП эффективно оптимизируется (Оптимизация хвостовой рекурсии)
