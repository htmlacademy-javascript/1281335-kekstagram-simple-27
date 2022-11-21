const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const photoListFragment = document.createDocumentFragment();

const clearPicturesContainer = () => {
  picturesContainer.querySelectorAll('.picture').forEach((picture) => picture.remove());
};

const buildPhotoElement = ({url, likes, comments}) => {
  const photoElement = pictureTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__comments').textContent = comments;
  photoElement.querySelector('.picture__likes').textContent = likes;
  return photoElement;
};

const renderPhotos = (photos) => {
  clearPicturesContainer();
  photoListFragment.append(...photos.map(buildPhotoElement));
  picturesContainer.appendChild(photoListFragment);
};

export {renderPhotos};
