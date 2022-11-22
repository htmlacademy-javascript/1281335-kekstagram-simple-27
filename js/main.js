import {generatePhotos} from './data.js';
import {renderPhotos} from './miniature.js';
import './popup.js';

const otherUserPhoto = generatePhotos();
renderPhotos(otherUserPhoto);
