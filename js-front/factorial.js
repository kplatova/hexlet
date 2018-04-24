// Нахождение факториала
// итерация
const factorial = (n) => {
  const iter = (current, acc) => {
    if (current === 0) {
      return acc;
    }

    return iter(current - 1, acc * current);
  }

  return iter(n, 1);
}