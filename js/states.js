const adForm = document.querySelector('.ad-form');
const fieldsets = adForm.querySelectorAll('fieldset');
const filter = document.querySelector('.map__filters');
const mapFilters = filter.querySelectorAll('.map__filter');
const mapFeatures = filter.querySelector('.map__features');

const disableAdForm = (disable = true) => {
  if (disable) {
    adForm.classList.add('ad-form--disabled');
  } else {
    adForm.classList.remove('ad-form--disabled');
  }

  fieldsets.forEach((item) => {
    item.disabled = disable;
  });
};

const disableFilter = (disable = true) => {
  if (disable) {
    filter.classList.add('ad-form--disabled');
  } else {
    filter.classList.remove('ad-form--disabled');
  }

  mapFilters.forEach((item) => {
    item.disabled = disable;
  });
  mapFeatures.disabled = disable;
};

export {
  disableAdForm,
  disableFilter
};
