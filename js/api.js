import { GET_DATA_URL } from './constants.js';

const getData = () =>
  fetch(GET_DATA_URL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error;
      }
    });

export { getData };
