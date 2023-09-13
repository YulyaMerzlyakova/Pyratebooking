import {
  HeaderLength,
  MAX_PRICE,
  MinLimitsPrice,
  RoomsForGuests,
} from './constants.js';
import { updatePricePlaceholder } from './form.js';
import { updateSliderStart } from './slider.js';

const adForm = document.querySelector('.ad-form');
const titleField = adForm.querySelector('#title');
const priceField = adForm.querySelector('#price');
const typeField = adForm.querySelector('#type');
const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');
const roomsNumber = adForm.querySelector('#room_number');
const guestsCapacity = adForm.querySelector('#capacity');


const pristine = new Pristine(
  adForm,
  {
    classTo: 'ad-form__element',
    errorClass: 'ad-form__element--invalid',
    successClass: 'ad-form__element--valid',
    errorTextParent: 'ad-form__element',
    errorTextTag: 'span',
  }
);

const validateHeader = (value) => value.length >= HeaderLength.MIN && value.length <= HeaderLength.MAX;

pristine.addValidator(
  titleField,
  validateHeader,
  `Длинна строки должна быть от ${HeaderLength.MIN} и до ${HeaderLength.MAX} символов`,
);

const validatePriсe = (value) =>
  Number(value) >= MinLimitsPrice[typeField.value] && Number(value) <= MAX_PRICE;

pristine.addValidator(
  priceField,
  validatePriсe,
  `цена не может быть ниже ${MinLimitsPrice[typeField.value]} и не должна превышать ${MAX_PRICE}`
);

typeField.addEventListener('change', (evt) => {
  updateSliderStart(MinLimitsPrice[evt.target.value]);
  updatePricePlaceholder(MinLimitsPrice[evt.target.value]);
  pristine.validate(priceField);
});

timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});

timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
});

const validateGuestCapacity = () =>
  RoomsForGuests[roomsNumber.value].includes(guestsCapacity.value);

const getGuestsMassage = () => {
  switch (roomsNumber.value) {
    case '1':
      return '<br> 1 комната для 1 гостя';
    case '2':
      return '<br> 2 комнаты для 2 или 1 гостя';
    case '3':
      return '<br> 3 комнаты для 3, 2 или 1 гостя';
    case '100':
      return 'Не для гостей';
  }
};

pristine.addValidator(
  guestsCapacity,
  validateGuestCapacity,
  getGuestsMassage
);

roomsNumber.addEventListener('change', () => {
  pristine.validate(guestsCapacity);
});

const validateForm = () => pristine.validate();

export {
  validateForm,
  pristine
};
