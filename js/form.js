import { postData } from './api.js';
import {
  CityCenter,
  DefaultImages,
  MinLimitsPrice,
  SubmitButtonText
} from './constants.js';
import {
  showPopupSuccess,
  showPopupError,
  onEscKeydown
} from './popups.js';
import './slider.js';
import { validateForm } from './validation.js';

const adForm = document.querySelector('.ad-form');
const uploadAvatarImage = document.querySelector('.ad-form-header__preview img');
const uploadAvatar = document.querySelector('#avatar');
const priceField = adForm.querySelector('#price');
const addressField = document.querySelector('#address');
const adFormPhoto = document.querySelector('.ad-form__photo');
const adFormImagesField = document.querySelector('#images');
const submitButton = document.querySelector('.ad-form__submit');
// const resetButton = document.querySelector('.ad-form__submit');

uploadAvatar.addEventListener('change', () => {
  const file = uploadAvatar.files[0];
  uploadAvatarImage.src = URL.createObjectURL(file);
});

adFormImagesField.addEventListener('change', () => {
  const fileImage = adFormImagesField.files[0];
  const imageElement = document.createElement('img');
  imageElement.src = URL.createObjectURL(fileImage);
  adFormPhoto.append(imageElement);
});

const fillAddress = (lat, lng) => {
  addressField.value = `${lat}, ${lng}`;
};

const disabledSubmitButton = () => {
  submitButton.textContent = SubmitButtonText.SENDING;
  submitButton.disabled = true;
};

const enabledSubmitButton = () => {
  submitButton.textContent = SubmitButtonText.IDLE;
  submitButton.disabled = false;
};

const updatePricePlaceholder = (price) => {
  priceField.placeholder = price;
};

const resetForm = (evt) => {
  uploadAvatarImage.src = DefaultImages.avatar;
  adFormPhoto.remove();
  adForm.reset();
  updatePricePlaceholder(MinLimitsPrice[evt.target.value]);
  fillAddress(CityCenter.lat, CityCenter.lng);
};

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (validateForm()) {
    disabledSubmitButton();
    postData(new FormData(evt.target))
      .then((response) => {
        if (response.ok) {
          showPopupSuccess();
          resetForm();
        } else {
          showPopupError();
          document.removeEventListener('keydown', onEscKeydown);
        }
      })
      .catch(() => {
        showPopupError();
        document.removeEventListener('keydown', onEscKeydown);
      })
      .finally(() => {
        enabledSubmitButton();
      });
  }
});

export {
  fillAddress,
  updatePricePlaceholder
};
