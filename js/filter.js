import { PriceRange, RERENDER_DELAY } from './constants.js';
import { renderMarkers } from './map.js';
import { debounce } from './utils.js';

const formFilter = document.querySelector('.map__filters');

const featuresCheckboxes = document.querySelectorAll('.map__checkbox');

const model = {
  features: []
};

const places = [];

const getFeatures = () => Array.from(featuresCheckboxes).reduce((acc, item) =>
  item.checked ? [...acc, item.value] : acc, []);

const changeModel = (filter, value) => {
  if (filter === 'features') {
    model.features.length = 0;
    model.features.push(...getFeatures());

  } else {
    model[filter] = value;
  }
}

const isPriceBelongRange = (range, price) => {
  switch (range) {
    case 'low':
      return price < PriceRange.LOW;
    case 'middle':
      return price >= PriceRange.LOW && price < PriceRange.MIDDLE;
    case 'high':
      return price >= PriceRange.MIDDLE;
  }
};

const getFilteredPlaces = (filter, data) => {
  switch (filter) {
    case 'housing-type':
      return data.slice().filter((item) => model[filter] !== 'any'
        ? item.offer.type === model[filter] : item);
    case 'housing-price':
      return data.slice().filter((item) => model[filter] !== 'any'
        ? isPriceBelongRange(model[filter], item.offer.price) : item);
    case 'housing-rooms':
      return data.slice().filter((item) => model[filter] !== 'any'
        ? item.offer.rooms === Number(model[filter]) : item);
    case 'housing-guests':
      return data.slice().filter((item) => model[filter] !== 'any'
        ? item.offer.guests === Number(model[filter]) : item);
    case 'features':
      return model.features.length
        ? model.features.reduce((acc, item) =>
          acc.filter((apartment) =>
            apartment.offer.features?.includes(item)), data)
        : data;
  }
};

const filterPlaces = () => Object.keys(model).reduce((acc, filter) =>
  getFilteredPlaces(filter, acc), places.slice());

formFilter.addEventListener('change', debounce((evt) => {
  changeModel(evt.target.name, evt.target.value);
  renderMarkers(filterPlaces().slice(0, 10));
}),
  RERENDER_DELAY);

const filterData = (data) => {
  renderMarkers(data.slice(0, 10));
  places.push(...data.slice())
};

export { filterData };
