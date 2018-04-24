// Рекурсивно
const isPalindrome = string => {
  if (length(string) <= 1) {
    return true;
  }
  const firstSymbol = string[0];
  const lastSymbol = string[length(string) - 1];

  if (firstSymbol !== lastSymbol) {
    return false;
  }

  const stringWithoutFirstAndLastSymbols = substr(string, 1, length(string) - 2);

  return isPalindrome(stringWithoutFirstAndLastSymbols);
};

export default isPalindrome;


// С помощью цикла
const isPalindrome = str => {
  let strLen = length(str);

  for (let i = 0; i < strLen; i++) {
    if (str[i] === str[strLen - 1 - i]) {
      return true;
    } else {
      return false;
    }
  }

}

export default isPalindrome;