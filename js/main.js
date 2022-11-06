const getRandomNumber = (min, max) => {
  if (min >= 0  && max >= 0) {
    if (min > max) {
      [min, max] = [max, min];
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  else {
    return NaN;
  }
}

console.log(getRandomNumber(-5.5, 10.7));

const getStringLength = (string, maxLength) => {
  if (typeof maxLength !== 'number') {
    return false;
  }
  return string.length <= maxLength;
}

console.log(getStringLength('', ''));
