import {isEscapeKey} from './util.js';
import './validation.js';

const bodyElement = document.body;
const userModalElement = document.querySelector('.img-upload__overlay');
const userModalCloseElement = userModalElement.querySelector('.img-upload__cancel');
const upload = document.querySelector('#upload-file');
const form = document.querySelector('.img-upload__form');

upload.addEventListener('change', openUserModal);
userModalCloseElement.addEventListener('click', closeUserModal);

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

function openUserModal () {
  userModalElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
}

function closeUserModal () {
  userModalElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  form.reset();
  document.removeEventListener('keydown', onPopupEscKeydown);
}
