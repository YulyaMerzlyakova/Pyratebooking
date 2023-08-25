import {
  TILE_LAYER,
  COPYRIGHT,
  ZOOM,
  iconConfig,
  iconMainConfig,
  cityCenter
} from './constants.js';

import { renderBaloon } from './baloon.js';

const mapCanvas = document.querySelector('#map-canvas');

const map = L.map(mapCanvas);

const markerGroup = L.layerGroup().addTo(map);

const mainPinIcon = L.icon({
  iconUrl: iconMainConfig.url,
  iconSize: [iconMainConfig.width, iconMainConfig.height],
  iconAnchor: [iconMainConfig.anchorX, iconMainConfig.anchorY],
});

const mainPinMarker = L.marker(cityCenter, {
  draggable: true,
  icon: mainPinIcon
}).on('moveend', (evt) =>
  evt.target.getLatLng()
);

mainPinMarker.addTo(map);

const loadMap = () =>
  new Promise((resolve) => {
    map.on('load', () => resolve(true))
      .setView(cityCenter, ZOOM);

    L.tileLayer(TILE_LAYER, {
      attribution: COPYRIGHT
    })
      .addTo(map);
  });

const icon = L.icon({
  iconUrl: iconConfig.url,
  iconSize: [iconConfig.width, iconConfig.height],
  iconAnchor: [iconConfig.anchorX, iconConfig.anchorY],
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
      .bindPopup(renderBaloon(item));
  });
};

export {
  loadMap,
  renderMarkers,
  mainPinMarker
};
