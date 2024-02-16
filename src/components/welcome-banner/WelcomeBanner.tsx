'use client';
import React from 'react';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { useTranslations } from 'next-intl';

import { ControlBar, Player } from 'video-react';
import { isMobile } from 'react-device-detect';

const WelcomeBanner = () => {
  const t = useTranslations('Welcome');

  function renderVideoDevice(mobileCheck: boolean) {
    if (mobileCheck) {
      return <source src="videos/welcome-video-mobile.mp4" />;
    } else {
      return <source src="videos/welcome-video-back.mp4" />;
    }
  }

  return (
    <div className="welcome-banner" id="welcomeBanner">
      <Player autoPlay muted playsInline fluid>
        {renderVideoDevice(isMobile)}
        <ControlBar autoHide={true} className="video-controls-bar" />
      </Player>
      <div className="welcome-banner-content">
        <h1 className="welcome-banner-content-title">{t('videoTitle')}</h1>
        <p className="welcome-banner-content-text">{t('videoDesc')}</p>
      </div>
      <KeyboardDoubleArrowDownIcon className="welcome-banner-down-icon" />
    </div>
  );
};

export default WelcomeBanner;
