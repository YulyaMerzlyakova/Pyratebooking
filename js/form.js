const sliderElement = document.querySelector('.ad-form__slider');
const valueElement = document.querySelector('#price');


noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100000,
  },
  start: 0,
  step: 100,
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
  valueElement.value = sliderElement.noUiSlider.get();
});
