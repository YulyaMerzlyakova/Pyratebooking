import { MAX_PRICE } from './constants.js';

const sliderElement = document.querySelector('.ad-form__slider');
const priceElement = document.querySelector('#price');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: MAX_PRICE,
  },
  start: 1000,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
    },
    from: function (value) {
      return parseFloat(value);
    }
  }
});

sliderElement.noUiSlider.on('update', () => {
  priceElement.value = sliderElement.noUiSlider.get();
});

priceElement.addEventListener('input', (evt) => {
  sliderElement.noUiSlider.set(evt.target.value);
});

const updateSliderStart = (value) => {
  sliderElement.noUiSlider.updateOptions(
    {
      start: value
    }
  );
};

export { updateSliderStart };
