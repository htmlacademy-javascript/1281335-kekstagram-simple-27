import {isEscapeKey} from './util.js';
import {resetScale} from './scale.js';
import {resetEffects} from './effect.js';
import {hideMessage} from './message.js';
import {pristine} from './validation.js';

const bodyElement = document.body;
const userModalElement = document.querySelector('.img-upload__overlay');
const userModalCloseElement = userModalElement.querySelector('.img-upload__cancel');
const upload = document.querySelector('#upload-file');
const form = document.querySelector('.img-upload__form');
const submitButton = form.querySelector('.img-upload__submit');

upload.addEventListener('change', openUserModal);
userModalCloseElement.addEventListener('click', closeUserModal);

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    const errorMessage = document.querySelector('.error');
    if (errorMessage) {
      hideMessage('error');
      return;
    }
    const successMessage = document.querySelector('.success');
    if (successMessage) {
      hideMessage('success');
      return;
    }
    closeUserModal();
  }
};

function openUserModal () {
  userModalElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
}

function closeUserModal () {
  pristine.reset();
  userModalElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  form.reset();
  resetScale();
  resetEffects();
  document.removeEventListener('keydown', onPopupEscKeydown);
}

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Сохраняю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};


export {closeUserModal, blockSubmitButton, unblockSubmitButton, onPopupEscKeydown};
