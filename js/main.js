import { getData } from './api.js';
import { filterData } from './filter.js';
import {
  disableAdForm,
  disableFilter
} from './states.js';
import { loadMap } from './map.js';

disableAdForm();
disableFilter();

loadMap()
  .then(() => {

    disableAdForm(false);
    getData()
      .then((data) => {
        disableFilter(false);
        filterData(data);
      })
      .catch();
  });
