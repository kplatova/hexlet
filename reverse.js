// рекурсивно
const reverse = (str) => {
  const len = length(str);
  if (len === 0) {
    return str;
  }

  return str[len - 1] + reverse(substr(str, 0, len - 1));
};

export default reverse;

// итеративно
export default (str) => {
  let result = '';
  let lengthStr = length(str) - 1; //7

  if (str === '') {
    return '';
  } else {
    for (let i = 0; lengthStr >= i; i++ ) { // 7 > 0
      result = result + str[lengthStr - i]; // result = 
    }

    return result;
  }
}
