import { PlaceDict } from './constants.js';

function removeClassByPrefix(node, prefix) {
  let regx = new RegExp('\\b' + prefix + '[^ ]*[ ]?\\b', 'g');
  node.className = node.className.replace(regx, '');
  return node;
}

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const avatar = cardTemplate.querySelector('.popup__avatar');
const title = cardTemplate.querySelector('.popup__title');
const address = cardTemplate.querySelector('.popup__text--address');
const price = cardTemplate.querySelector('.popup__text--price');
const placeType = cardTemplate.querySelector('.popup__type');
const capacity = cardTemplate.querySelector('.popup__text--capacity');
const time = cardTemplate.querySelector('.popup__text--time');
const featuresList = cardTemplate.querySelector('.popup__features');
const featureItem = removeClassByPrefix(cardTemplate.querySelector('.popup__feature'), 'popup__feature--');
const description = cardTemplate.querySelector('.popup__description');
const photosList = cardTemplate.querySelector('.popup__photos');
const photoItem = cardTemplate.querySelector('.popup__photo');


const getAvatar = (data) => {
  const avatarElement = avatar.cloneNode();
  avatarElement.src = data.author.avatar;
  return avatarElement;
};

const getTextElement = (text, element) => {
  const textElement = element.cloneNode();
  textElement.textContent = text;
  return textElement;
};

const getFeatures = (data) => {
  const featuresListFragment = document.createDocumentFragment();
  data.offer.features.forEach((feature) => {
    const featureItemElement = featureItem.cloneNode();
    featureItemElement.classList.add(`popup__feature--${feature}`);
    featuresListFragment.append(featureItemElement);
  });
  const featuresListElement = featuresList.cloneNode();
  featuresListElement.append(featuresListFragment);
  return featuresListElement;
};

const getPhotos = (data) => {
  const photosListElement = photosList.cloneNode();
  data.offer.photos.forEach((photo) => {
    const photoElement = photoItem.cloneNode();
    photoElement.src = photo;
    photoElement.alt = data.offer.title;
    photosListElement.append(photoElement);
  });
  return photosListElement;
};

const renderBaloon = (data) => {
  const cardElement = cardTemplate.cloneNode();

  cardElement.append(
    getAvatar(data),
    getTextElement(data.offer.title, title),
    getTextElement(data.offer.address, address),
    getTextElement(`${data.offer.price} ₽/ночь`, price),
    getTextElement(PlaceDict[data.offer.type], placeType),
    getTextElement(`${data.offer.rooms} комнаты для ${data.offer.guests} гостей`, capacity),
    getTextElement(`Заезд после ${data.offer.checkin}, выезд до ${data.offer.checkout}`, time),
    data.offer.features ? getFeatures(data) : '',
    getTextElement(data.offer.description, description),
    data.offer.photos ? getPhotos(data) : ''
  );
  return cardElement;
};

export { renderBaloon };
