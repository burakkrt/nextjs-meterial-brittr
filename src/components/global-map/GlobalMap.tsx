'use client';
import React from 'react';
import RoomIcon from '@mui/icons-material/Room';

// START: Preserve spaces to avoid auto-sorting
import 'leaflet/dist/leaflet.css';

import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';

import 'leaflet-defaulticon-compatibility';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Container } from '@mui/material';
import { useTranslations } from 'next-intl';

const GlobalMap = () => {
  const t = useTranslations('GlobalMap');

  return (
    <div className="global-map" id="globalMap">
      <Container maxWidth="xl">
        <div className="global-map-header">
          <p>{t('text')}</p>
          <h2>{t('title')}</h2>
        </div>
      </Container>
      <div className="global-map-content">
        <MapContainer
          preferCanvas={true}
          center={[51.505, -0.09]}
          zoom={3}
          scrollWheelZoom={false}
          style={{ height: '100%', width: '100%' }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              <strong>Londra</strong>
              {/* <p>Buraya açıklama girelebilir.</p> */}
            </Popup>
          </Marker>
          <Marker position={[38.963745, 35.24332]}>
            <Popup>
              <strong>Türkiye</strong>
              {/* <p>Buraya açıklama girelebilir.</p> */}
            </Popup>
          </Marker>
          <Marker position={[40.712776, -74.005974]}>
            <Popup>
              <strong>U.S.A</strong>
              {/* <p>Buraya açıklama girelebilir.</p> */}
            </Popup>
          </Marker>
          <Marker position={[46.395726, 1.963944]}>
            <Popup>
              <strong>France</strong>
              {/* <p>Buraya açıklama girelebilir.</p> */}
            </Popup>
          </Marker>
          <Marker position={[60.870992, 92.263247]}>
            <Popup>
              <strong>Moscow</strong>
              {/* <p>Buraya açıklama girelebilir.</p> */}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default GlobalMap;
