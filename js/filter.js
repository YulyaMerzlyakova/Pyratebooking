import { renderMarkers } from './map.js';

const formFilter = document.querySelector('.map__filters');

const model = {};

const places = [];

const changeModel = (filter, value) => {
  model[filter] = value;
};

const getFilteredPlaces = (filter, data) => {
  switch (filter) {
    case 'housing-type':
      return data.slice()
        .filter((item) => model[filter] !== 'any'
          ? item.offer.type === model[filter]
          : item);
  }
};

const filterPlaces = () => Object.keys(model).reduce((acc, filter) => getFilteredPlaces(filter, acc), places.slice());

formFilter.addEventListener('change', (evt) => {
  changeModel(evt.target.id, evt.target.value);
  renderMarkers(filterPlaces().slice(0, 10));
});

const filterData = (data) => {
  renderMarkers(data.slice(0, 10));
  places.push(...data.slice());
};

export { filterData };
