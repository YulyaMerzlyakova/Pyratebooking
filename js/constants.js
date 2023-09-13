const GET_DATA_URL = 'https://29.javascript.pages.academy/keksobooking/data';
const POST_DATA_URL = 'https://29.javascript.pages.academy/keksobooking';
const TILE_LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const COPYRIGHT = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const ZOOM = 12;

const ERROR_MESSAGE = 'Ошибка загрузки сервера';
const ALERT_SHOW_TIME = 5000;
const RERENDER_DELAY = 500;

const IconMainConfig = {
  url: './img/main-pin.svg',
  width: 52,
  height: 52,
  anchorX: 26,
  anchorY: 52
};

const IconConfig = {
  url: './img/pin.svg',
  width: 40,
  height: 40,
  anchorX: 20,
  anchorY: 40
};

const CityCenter = {
  lat: 35.68950,
  lng: 139.69171,
};

const ROUND_VALUE = 5;

const DefaultImages = {
  avatar: 'img/muffin-grey.svg',
  photo: ''
};

const PlaceDict = {
  house: 'Дом',
  flat: 'Квартира',
  hotel: 'Отель',
  palace: 'Дворец',
  bungalow: 'Бунгало'
};

const PriceRange = {
  LOW: 10000,
  MIDDLE: 50000
};


const MinLimitsPrice =
{
  house: '5000',
  flat: '1000',
  hotel: '3000',
  palace: '10000',
  bungalow: '0'
};

const MAX_PRICE = 100000;

const HeaderLength =
{
  MIN: 30,
  MAX: 100
};

const RoomsForGuests = {
  1: ['1'],
  2: ['2', '1'],
  3: ['3', '2', '1'],
  100: ['0']
};

const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Загрузка...'
};

export {
  TILE_LAYER,
  COPYRIGHT,
  ZOOM,
  ROUND_VALUE,
  GET_DATA_URL,
  POST_DATA_URL,
  DefaultImages,
  PlaceDict,
  PriceRange,
  MinLimitsPrice,
  MAX_PRICE,
  RoomsForGuests,
  IconConfig,
  IconMainConfig,
  CityCenter,
  SubmitButtonText,
  HeaderLength,
  ERROR_MESSAGE,
  ALERT_SHOW_TIME,
  RERENDER_DELAY,
};
