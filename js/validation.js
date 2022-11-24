import {sendData} from './api.js';
import {blockSubmitButton, closeUserModal, unblockSubmitButton} from './popup.js';
import {showMessage} from './message.js';

const formElement = document.querySelector('.img-upload__form');
const pristine = new Pristine(formElement, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__text__error-text',
});

const setUserFormSubmit = () => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          unblockSubmitButton();
          closeUserModal();
          showMessage('success');
        },
        () => {
          unblockSubmitButton();
          showMessage('error');
        },
        new FormData(evt.target),
      );
    }
  });
};

export {setUserFormSubmit, pristine};
