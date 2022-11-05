function getRandomNumber(min, max) {
  if (
    typeof min !== 'number' ||
    typeof max !== 'number' ||
    min < 0 ||
    max < 0 ||
    min === max ||
    min > max
  ) {
    return NaN;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

console.log(getRandomNumber(5.5, 10.7));

function getStringLength(string, maxLength) {
  if (typeof maxLength !== 'number') {
    return false;
  }
  return string.length <= maxLength;
}

console.log(getStringLength('', ''));
