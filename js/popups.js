const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const showPopupSuccess = () => {
  const successPopupElement = successTemplate.cloneNode(true);
  document.body.append(successPopupElement);
  successPopupElement.classList.add('success__popup');
  document.addEventListener('keydown', onEscKeydown);
  document.addEventListener('click', onClickOutside);
};

const showPopupError = () => {
  const errorPopupElement = errorTemplate.cloneNode(true);
  document.body.append(errorPopupElement);
  errorPopupElement.classList.add('success__popup');

  const closeButtonError = document.querySelector('.error__button');
  closeButtonError.addEventListener('click', closePopup);
  document.addEventListener('keydown', onEscKeydown);
  document.addEventListener('click', onClickOutside);
};

function closePopup() {
  document.querySelector('.success__popup').remove();
  document.removeEventListener('keydown', onEscKeydown);
  document.removeEventListener('click', onClickOutside);
}

function onEscKeydown(evt) {
  if (evt.key === 'Escape') {
    closePopup();
  }
}

function onClickOutside(evt) {
  if (evt.target.classList.contains('success') || evt.target.classList.contains('error')) {
    closePopup();
  }
}

export {
  showPopupSuccess,
  showPopupError,
  onEscKeydown
};
