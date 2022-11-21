import {generatePhotos} from './data.js';
import {renderPhotos} from './miniature.js';

const otherUserPhoto = generatePhotos();
renderPhotos(otherUserPhoto);
