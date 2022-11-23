import {isEscapeKey} from './util.js';

const bodyElement = document.body;
const messageFragment = document.createDocumentFragment();
const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const successMessageElement = successMessageTemplate.cloneNode(true);
const errorMessageElement = errorMessageTemplate.cloneNode(true);

const onSuccessMessageEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideMessage('success');
  }
};

const onErrorMessageEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideMessage('error');
  }
};

const onClickOverSuccess = (evt) => {
  evt.preventDefault();
  const successButtonElement = document.querySelector('.success__button');
  const successInnerElement = document.querySelector('.success__inner');
  if (!evt.composedPath().includes(successInnerElement) || evt.composedPath().includes(successButtonElement)) {
    hideMessage('success');
  }
};

const onClickOverError = (evt) => {
  evt.preventDefault();
  const successInnerElement = document.querySelector('.success__inner');
  const errorButtonElement = document.querySelector('.error__button');
  if (!evt.composedPath().includes(successInnerElement) || evt.composedPath().includes(errorButtonElement)) {
    hideMessage('error');
  }
};

function showMessage(type) {
  switch (type) {
    case 'success': {
      messageFragment.append(successMessageElement);
      bodyElement.appendChild(messageFragment);
      document.addEventListener('keydown', onSuccessMessageEscKeydown);
      document.addEventListener('click', onClickOverSuccess);
      break;
    }
    case 'error': {
      messageFragment.append(errorMessageElement);
      bodyElement.appendChild(messageFragment);
      document.addEventListener('keydown', onErrorMessageEscKeydown);
      document.addEventListener('click', onClickOverError);
      break;
    }
  }
}

function hideMessage(type) {
  switch (type) {
    case 'success': {
      document.removeEventListener('keydown', onSuccessMessageEscKeydown);
      document.removeEventListener('click', onClickOverSuccess);
      bodyElement.querySelector('.success').remove();
      break;
    }
    case 'error': {
      document.removeEventListener('keydown', onErrorMessageEscKeydown);
      document.removeEventListener('click', onClickOverError);
      bodyElement.querySelector('.error').remove();
      break;
    }
  }
}

export {showMessage};

