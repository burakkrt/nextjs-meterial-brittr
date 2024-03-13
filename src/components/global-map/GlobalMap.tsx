'use client';
import React, { useEffect } from 'react';

// START: Preserve spaces to avoid auto-sorting
import 'leaflet/dist/leaflet.css';

import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';

import 'leaflet-defaulticon-compatibility';
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from 'react-leaflet';
import { Container, Icon } from '@mui/material';
import { useTranslations } from 'next-intl';

const GlobalMap = () => {
  const t = useTranslations('GlobalMap');

  useEffect(() => {}, []);

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
          center={[36.320205613365292, 31.87732809519389]}
          zoom={3}
          scrollWheelZoom={false}
          style={{ height: '100%', width: '100%' }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[40.2692694230613, -100.97156467997246]}>
            <Popup>
              <strong>{t('USA')}</strong>
              {/* <p>Buraya açıklama girelebilir.</p> */}
            </Popup>
          </Marker>
          <Marker position={[-8.486643450583179, -52.7256265819505]}>
            <Popup>
              <strong>{t('BRA')}</strong>
              {/* <p>Buraya açıklama girelebilir.</p> */}
            </Popup>
          </Marker>
          <Marker position={[20.185768183002512, -10.327956213291957]}>
            <Popup>
              <strong>{t('MRT')}</strong>
              {/* <p>Buraya açıklama girelebilir.</p> */}
            </Popup>
          </Marker>
          <Marker position={[-0.8803118465744016, 15.517928285012077]}>
            <Popup>
              <strong>{t('COG')}</strong>
              {/* <p>Buraya açıklama girelebilir.</p> */}
            </Popup>
          </Marker>
          <Marker position={[10.83588423496766, -10.681667070561552]}>
            <Popup>
              <strong>{t('GIN')}</strong>
              {/* <p>Buraya açıklama girelebilir.</p> */}
            </Popup>
          </Marker>
          <Marker position={[7.945924111248008, -1.1025941247351376]}>
            <Popup>
              <strong>{t('GHA')}</strong>
              {/* <p>Buraya açıklama girelebilir.</p> */}
            </Popup>
          </Marker>
          <Marker position={[9.68418673969707, 2.38001617078455]}>
            <Popup>
              <strong>{t('BEN')}</strong>
              {/* <p>Buraya açıklama girelebilir.</p> */}
            </Popup>
          </Marker>
          <Marker position={[22.980797139923254, 79.55325258981614]}>
            <Popup>
              <strong>{t('IND')}</strong>
              {/* <p>Buraya açıklama girelebilir.</p> */}
            </Popup>
          </Marker>
          <Marker position={[42.111593141003034, 43.5755867855467]}>
            <Popup>
              <strong>{t('GEO')}</strong>
              {/* <p>Buraya açıklama girelebilir.</p> */}
            </Popup>
          </Marker>
          <Marker position={[32.041110950189214, -6.277904003034513]}>
            <Popup>
              <strong>{t('MAR')}</strong>
              {/* <p>Buraya açıklama girelebilir.</p> */}
            </Popup>
          </Marker>
          <Marker position={[27.20505678219715, 17.404844932483908]}>
            <Popup>
              <strong>{t('LBY')}</strong>
              {/* <p>Buraya açıklama girelebilir.</p> */}
            </Popup>
          </Marker>
          <Marker position={[34.176115970902806, 9.657237380597241]}>
            <Popup>
              <strong>{t('TUN')}</strong>
              {/* <p>Buraya açıklama girelebilir.</p> */}
            </Popup>
          </Marker>
          <Marker position={[62.70105814883885, 93.77082565512072]}>
            <Popup>
              <strong>{t('RUS')}</strong>
              {/* <p>Buraya açıklama girelebilir.</p> */}
            </Popup>
          </Marker>
          <Marker position={[20.42502407552697, 56.55537050377877]}>
            <Popup>
              <strong>{t('OMN')}</strong>
              {/* <p>Buraya açıklama girelebilir.</p> */}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default GlobalMap;
