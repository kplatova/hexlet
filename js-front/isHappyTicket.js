const centerOfTicket = (ticket) => {
  if (ticket % 2 === 0) {
    return ticket / 2;
  } else {
    return 'Введите правильный билет';
  }
}

const sumDigits = (numberString) => {
  let sum = 0;
  for (let i = 0; i < length(numberString); i += 1) {
    sum += Number(numberString[i]);
  }
  return sum;
};

export default (number) => {
  const numberString = String(number);

  const leftPart = substr(numberString, 0, centerOfTicket(number));
  const rightPart = substr(numberString, centerOfTicket(number));

  return sumDigits(leftPart) === sumDigits(rightPart);
};
// END
