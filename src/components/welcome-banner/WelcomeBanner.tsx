'use client';
import React from 'react';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { useTranslations } from 'next-intl';

const WelcomeBanner = () => {
  const t = useTranslations('Welcome');

  const controls = {
    autoPlay: true,
    muted: true,
    loop: true,
  };

  return (
    <div className="welcome-banner" id="welcomeBanner">
      <video {...controls} className="welcome-banner-video">
        <source src="videos/welcome-video-back.mp4" type="video/mp4" />
      </video>
      <div className="welcome-banner-content">
        <h1 className="welcome-banner-content-title">{t('videoTitle')}</h1>
        <p className="welcome-banner-content-text">{t('videoDesc')}</p>
      </div>
      <KeyboardDoubleArrowDownIcon className="welcome-banner-down-icon" />
    </div>
  );
};

export default WelcomeBanner;
