'use client';
import React from 'react';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { useTranslations } from 'next-intl';

import { ControlBar, Player } from 'video-react';

const WelcomeBanner = () => {
  const t = useTranslations('Welcome');

  const controlOptions = {
    playsinline: true,
    autoPlay: true,
    muted: true,
    loop: true,
    controls: false,
  };

  return (
    <div className="welcome-banner" id="welcomeBanner">
      <Player src="videos/welcome-video-back.mp4" autoPlay muted playsInline fluid>
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
