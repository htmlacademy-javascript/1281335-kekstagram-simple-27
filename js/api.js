import {showAlert} from './util.js';

const API = {
  BASE: 'https://27.javascript.pages.academy/kekstagram-simple',
  DATA: 'https://27.javascript.pages.academy/kekstagram-simple/data'
};

const getData = (onSuccess) => {
  fetch(API.DATA)
    .then((response) => response.json())
    .then((posts) => {
      onSuccess(posts);
    })
    .catch(() => {showAlert('Не удалось загрузить данные с сервера. Попробуйте обновить страницу');});
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    API.BASE,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {getData, sendData};
