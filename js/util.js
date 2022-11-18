const getRandomNumber = (min, max) => {
  if (min < 0 || max < 0) {
    return NaN;
  }
  if (min > max) {
    [min, max] = [max, min];
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
getRandomNumber(-5.5, 10.7);

const getStringLength = (string, maxLength) => string.length <= maxLength;
getStringLength('', '');

export {getRandomNumber};
