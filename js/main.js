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

//Task 4. Posts generation
const SIMILAR_POST_COUNT = 25;
const ID = getRandomUniqueNumber(SIMILAR_POST_COUNT);
const URL = ID.map((a) => `photos/${a}.jpg`);
const LIKES = Array.from({length: SIMILAR_POST_COUNT}, () => getRandomNumber(15, 200));
const COMMENTS = Array.from({length: SIMILAR_POST_COUNT}, () => getRandomNumber(0, 200));
const DESCRIPTION = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Sed consectetur nisi a maximus malesuada.',
  'In luctus massa nec risus rhoncus pretium id rhoncus nunc.',
  'Mauris molestie tortor sit amet odio commodo, nec congue lacus porttitor.',
  'Aliquam scelerisque mi a ultrices dictum.',
  'Integer sed ipsum tempor, scelerisque leo et, accumsan tellus.',
  'Vestibulum aliquam magna quis condimentum iaculis.',
  'Phasellus ac ligula feugiat, commodo nunc sit amet, convallis nisi.',
  'Praesent porta urna at dolor maximus venenatis.',
  'Vestibulum tempor velit et eleifend aliquet.',
  'In eleifend eros non nibh congue interdum.',
  'Aliquam vitae tortor cursus, gravida libero vestibulum, eleifend est.',
  'Proin vel est consequat, malesuada elit eu, blandit ante.',
  'Nullam vitae lorem congue, egestas nisi sed, porttitor odio.',
  'Donec a tellus quis tortor facilisis scelerisque.',
  'Vivamus a ex eu massa vulputate semper et sed diam.',
  'Vestibulum eget lectus in urna mattis rhoncus.',
  'Aliquam ullamcorper magna lobortis laoreet malesuada.',
  'Nulla in erat semper urna mattis tempus id non neque.',
  'Pellentesque elementum libero et nulla tincidunt, lacinia imperdiet elit dictum.',
  'Praesent consectetur magna vitae turpis facilisis lacinia.',
  'Nam aliquam leo vitae sagittis porttitor.',
  'Curabitur a ipsum imperdiet, aliquet sapien sit amet, malesuada enim.',
  'Proin id elit non justo pretium convallis quis vel felis.',
  'Curabitur quis elit iaculis, fringilla odio in, faucibus risus.',
  'Aliquam sit amet ante pretium, mattis libero eu, tempus leo.'
];

function getRandomUniqueNumber(length) {
  const randomStart = 1;
  const randomEnd = length;

  const array = [];
  const arrayResult = [];

  for (let i = randomStart; i <= randomEnd; i++) {
    array.push(i);
  }

  for (let i = 1; i <= randomEnd; i++) {
    const item = array.splice(getRandomNumber(0, array.length - 1),1)[0];
    arrayResult.push(item);
  }
  return arrayResult;
}

const createPhotoDescr = (index) => ({
  id: ID[index],
  url: URL[index],
  description: DESCRIPTION[getRandomNumber(0, DESCRIPTION.length - 1)],
  likes: LIKES[index],
  comments: COMMENTS[index]
});

const similarPhotoDescr = Array.from({length: SIMILAR_POST_COUNT}, (v, k) => createPhotoDescr(k));
console.log(similarPhotoDescr);
