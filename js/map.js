import {
  TILE_LAYER,
  COPYRIGHT,
  ZOOM,
  IconConfig,
  IconMainConfig,
  CityCenter,
  ROUND_VALUE,
} from './constants.js';

import { renderBaloon } from './baloon.js';
import { fillAddress } from './form.js';

const mapCanvas = document.querySelector('#map-canvas');

const map = L.map(mapCanvas);

const icon = L.icon({
  iconUrl: IconConfig.url,
  iconSize: [IconConfig.width, IconConfig.height],
  iconAnchor: [IconConfig.anchorX, IconConfig.anchorY],
});

const markerGroup = L.layerGroup().addTo(map);

const mainPinIcon = L.icon({
  iconUrl: IconMainConfig.url,
  iconSize: [IconMainConfig.width, IconMainConfig.height],
  iconAnchor: [IconMainConfig.anchorX, IconMainConfig.anchorY],
});

const mainPinMarker = L.marker(CityCenter, {
  draggable: true,
  icon: mainPinIcon
});

const loadMap = () =>
  new Promise((resolve) => {
    map.on('load', () => resolve(true))
      .setView(CityCenter, ZOOM);
    L.tileLayer(TILE_LAYER,
      {
        attribution: COPYRIGHT
      })
      .addTo(map);

    fillAddress(CityCenter.lat, CityCenter.lng);
    mainPinMarker.on('moveend', (evt) => {
      const location = evt.target.getLatLng();
      fillAddress(location.lat.toFixed(ROUND_VALUE), location.lng.toFixed(ROUND_VALUE));
    })
      .addTo(map);

  });

const renderMarkers = (data) => {
  markerGroup.clearLayers();
  data.forEach((item) => {
    const marker = L.marker(
      {
        lat: item.location.lat,
        lng: item.location.lng,
      },
      {
        icon
      });

    marker
      .addTo(markerGroup)
      .bindPopup(renderBaloon(item)
      );
  });
};

export {
  loadMap,
  renderMarkers
};
