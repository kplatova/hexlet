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
// END

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

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  let i = 2;

  while (i <= num / 2) {
    if (num % i === 0) {
      return false;
    }
    i += 1; // вместо i++;
  }

  return true;
};

export default isPrime;
// END

// BEGIN (for loop)
export default (n, a, b) => {
  let sum = 0;
  
  for (let i = 1; i < n; i++) {
    if (n % a === 0) {
      sum += a;
    }
    
    if (n % b === 0) {
      sum += b;
    }
  }
  
  return sum;
}
// END

/**
* Сделать каждое слово с большой буквы
*/
export default (str) => {
  let result = '';
  for (let i = 0; i < length(str); i += 1) {
    const shouldBeBig = str[i] !== ' ' && (i === 0 || str[i - 1] === ' ');
    result += shouldBeBig ? toUpperCase(str[i]) : str[i];
  }

  return result;
};

/**
* Переворот числа
**/
const reverseInt = (num) => {
  const numAsStr = String(Math.abs(num));
  let reversedStr = '';
  let i = length(numAsStr) - 1;

  while (i >= 0) {
    reversedStr += numAsStr[i];
    i -= 1;
  }
  const reversedModule = Number(reversedStr);

  return num > 0 ? reversedModule : -reversedModule;
}

// Инвертировать case букв
const invertCase = (str) => {
  let result = '';
  for (let i = 0; i < length(str); i += 1) {
    const upper = str[i] === toUpperCase(str[i]);
    result += upper ? toLowerCase(str[i]) : toUpperCase(str[i]);
  }

  return result;
};



// Алгоритм
// Задание начального состояния
// Проверка окончания процесса
// Получение нового состояния
// Повторение второго шага


Рекурсивный vs Итеративный

РП проще записать
РП не может быть эффективно реализован (отложенное вычисление, потребляет память)
ИП эффективно оптимизируется (Оптимизация хвостовой рекурсии)
