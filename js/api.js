import {
  GET_DATA_URL,
  ERROR_MESSAGE,
  POST_DATA_URL,
} from './constants.js';
import { showAlert } from './utils.js';


const getData = () =>
  fetch(GET_DATA_URL)
    .then((response) => {
      if (!response.ok) {
        showAlert(ERROR_MESSAGE);
        throw new Error();
      }
      return response.json();
    })
    .catch(() => {
      showAlert('ERROR_MESSAGE');
      throw new Error();
    });

const postData = (body) =>
  fetch(POST_DATA_URL, {
    method: 'POST',
    body
  });

export {
  getData,
  postData
};
