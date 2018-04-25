// Решение учителя
const apply = (count, fn, value) =>
  (count === 0 ? value : apply(count - 1, fn, fn(value)));

////////////////////////////////////

// Мое решение
const apply = (count, func, arg) => {

  // сам итератор
  const iter = (current, doFunc, acc) => {
    if (current === 0) {
      return acc;
    }

    return iter(current - 1, doFunc, doFunc(acc));
  }

  // запуск итератора
  return iter(count, func, arg);
}

export default apply;