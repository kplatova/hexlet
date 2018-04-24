const isPerfect = (n) => {
  if (n === 0) return false;

  let divisor = 1;
  let sum = 0;

  while (divisor < n) {
    if (n % divisor === 0) sum += divisor;
    divisor += 1;
  }

  if (sum === n) {
    return true;
  }
  return false;
};

// Создайте функцию isPerfect, которая принимает число и возвращает true, если оно совершенное, и false — в ином случае.
// Совершенное число — это положительное целое число, равное сумме его положительных делителей (не считая само число).
// Например, 6 — идеальное число, потому что 6 = 1 + 2 + 3.
