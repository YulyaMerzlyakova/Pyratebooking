import { getData } from './api.js';
import { filterData } from './filter.js';
import { loadMap } from './map.js';
import {
  disableAdForm,
  disableFilter
} from './states.js';
import './form.js';

disableFilter();
disableAdForm();

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
