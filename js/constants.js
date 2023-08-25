const GET_DATA_URL = 'https://25.javascript.pages.academy/keksobooking/data';
const POST_DATA_URL = 'https://25.javascript.pages.academy/keksobooking';
const TILE_LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const COPYRIGHT = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const ZOOM = 10;

const iconMainConfig = {
  url: './img/main-pin.svg',
  width: 52,
  height: 52,
  anchorX: 26,
  anchorY: 52,
};

const iconConfig = {
  url: './img/pin.svg',
  width: 40,
  height: 40,
  anchorX: 20,
  anchorY: 40,
};

const cityCenter = {
  lat: 35.6895000,
  lng: 139.6917100,
};

const PlaceDict = {
  house: 'Дом',
  flat: 'Квартира',
  hotel: 'Отель',
  palace: 'Дворец'
};

const MAX_TITLE_LENGTH = 100;
const MIN_TITLE_LENGTH = 30;

export {
  TILE_LAYER,
  COPYRIGHT,
  ZOOM,
  GET_DATA_URL,
  POST_DATA_URL,
  PlaceDict,
  iconConfig,
  iconMainConfig,
  cityCenter,
  MAX_TITLE_LENGTH,
  MIN_TITLE_LENGTH
};
