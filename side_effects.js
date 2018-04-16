// Реализуйте и экспортируйте по умолчанию функцию, которая делает заглавной первую букву каждого слова в предложении.
// solution('hello, world!');

export default str => {
  var result = 0;
  
  for (var i = 0; i < str.length - 1; i++) {
    if (str[i] !== ' ' && (i === 0 || str[i - 1] === ' ')) {
      result = result + str[i].toUpperCase();
    } else {
      result = result + str[i];      
    }
  }

  return result;
};
