import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import { renderToStaticMarkup } from 'react-dom/server';
import { divIcon } from 'leaflet';

import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  const [activeMarker, setActiveMarker] = useState(null);

  const markers = [
    { id: 1, position: [51.505, -0.09], name: 'Marker 1' },
    { id: 2, position: [48.85, 2.33], name: 'Paris' },
    { id: 3, position: [48.63, -1.51], name: 'Mont Saint-Michel' },
    { id: 4, position: [47.21, -1.57], name: 'Marker 4' },
    { id: 5, position: [43.61, 3.87], name: 'Marker 5' },
    { id: 6, position: [46.21, 6.12], name: 'Marker 6' },
    { id: 7, position: [41.39, 2.18], name: 'Marker 7' },
    { id: 8, position: [40.41, -3.71], name: 'Marker 8' },
    { id: 9, position: [45.46, 9.19], name: 'Marker 9' },
    { id: 10, position: [45.43, 12.32], name: 'Marker 10' },
    { id: 11, position: [43.77, 11.25], name: 'Marker 11' },
    { id: 12, position: [41.89, 12.49], name: 'Marker 12' },
    { id: 13, position: [52.53, 13.39], name: 'Marker 13' },
    { id: 14, position: [38.98, 23.71], name: 'Marker 14' },
    { id: 15, position: [3.14, 101.67], name: 'Marker 15' },
    { id: 16, position: [1.29, 103.85], name: 'Marker 16' },
    { id: 17, position: [25.04, 121.54], name: 'Marker 17' },
    { id: 18, position: [22.27, 114.17], name: 'Marker 18' },
    { id: 19, position: [31.23, 121.47], name: 'Marker 19' },
    { id: 20, position: [34.69, 135.50], name: 'Marker 20' },
    { id: 21, position: [35.00, 135.77], name: 'Marker 21' },
    { id: 22, position: [35.06, 129.06], name: 'Marker 22' },
    { id: 23, position: [36.09, 129.34], name: 'Marker 23' },
    { id: 24, position: [37.56, 126.98], name: 'Marker 24' },
    { id: 25, position: [36.42, 25.42], name: 'Marker 25' },
    { id: 26, position: [39.92, 116.40], name: 'Marker 26' },
    { id: 26, position: [37.54, 121.22], name: 'Marker 27' },
    { id: 26, position: [34.26, 108.64], name: 'Marker 28' },
    
  ];

  const createMarkerIcon = (scale) => {
    return new Icon({
      iconUrl: markerIcon,
      iconSize: [25 * scale, 41 * scale],
      iconAnchor: [12.5 * scale, 41 * scale],
    });
  };

  const iconMarkup = renderToStaticMarkup(<i className=" fa fa-map-marker-alt fa-2x" />);
    const customMarkerIcon = divIcon({
      html: iconMarkup
    });

  const handleMarkerMouseOver = (marker) => {
    console.log("MOUSEOVER")
    createMarkerIcon(5)
  };

  const handleMarkerMouseOut = () => {
    setActiveMarker(null);
  };

  return (
    <div className="h-[600px] w-full">
      <MapContainer center={[51.505, -0.09]} zoom={3} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker) => (
          <Marker 
          key={marker.id}
          position={marker.position}
          icon={customMarkerIcon}
        >
        </Marker>        
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
