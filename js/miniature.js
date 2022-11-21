import {similarPhotoDescr} from './data.js';

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const otherUserPhoto = similarPhotoDescr();

const photoListFragment = document.createDocumentFragment();

otherUserPhoto.forEach(({url, likes, comments}) => {
  const photoElement = pictureTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__comments').textContent = comments;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoListFragment.appendChild(photoElement);
});

picturesContainer.appendChild(photoListFragment);
