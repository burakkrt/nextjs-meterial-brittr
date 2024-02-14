'use client';
import React from 'react';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { useTranslations } from 'next-intl';

import { Player } from 'video-react';

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
      {/* <video {...controlOptions} className="welcome-banner-video">
        <source src="videos/welcome-video-back.mp4" type="video/mp4" />
      </video>
      <div className="welcome-banner-content">
        <h1 className="welcome-banner-content-title">{t('videoTitle')}</h1>
        <p className="welcome-banner-content-text">{t('videoDesc')}</p>
      </div>
      <KeyboardDoubleArrowDownIcon className="welcome-banner-down-icon" /> */}
      <Player src="videos/welcome-video-back.mp4" autoPlay muted playsInline fluid />
    </div>
  );
};

export default WelcomeBanner;
