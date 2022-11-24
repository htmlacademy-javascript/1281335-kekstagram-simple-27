import {renderPhotos} from './miniature.js';
import {setUserFormSubmit} from './validation.js';
import {getData} from './api.js';

getData((posts) => {
  renderPhotos(posts);
});

setUserFormSubmit();
