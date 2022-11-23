import {renderPhotos} from './miniature.js';
import {closeUserModal} from './popup.js';
import {setUserFormSubmit} from './validation.js';
import {getData} from './api.js';

const SIMILAR_POST_COUNT = 25;

getData((posts) => {
  renderPhotos(posts.slice(0, SIMILAR_POST_COUNT));
});

setUserFormSubmit(closeUserModal);

// const otherUserPhoto = generatePhotos();
// renderPhotos(otherUserPhoto);
