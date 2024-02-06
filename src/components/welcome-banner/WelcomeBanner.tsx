'use client';
import React from 'react';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { useParallax } from 'react-scroll-parallax';

const WelcomeBanner = () => {
  const controls = {
    autoPlay: true,
    muted: true,
    loop: true,
  };

  const parallax = useParallax<HTMLDivElement>({ speed: -15 });

  return (
    <div className="welcome-banner">
      <video {...controls} className="welcome-banner-video">
        <source src="videos/welcome-video-v2.mp4" type="video/mp4" />
      </video>
      <div className="welcome-banner-content" ref={parallax.ref}>
        <h1 className="welcome-banner-content-title">Lorem ipsum dolor sit amet.</h1>
        <p className="welcome-banner-content-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, excepturi quas, nam
          numquam ullam ipsa minima quisquam earum maxime labore laboriosam vitae. Illo numquam
          omnis eligendi provident optio unde odio.
        </p>
      </div>
      <KeyboardDoubleArrowDownIcon className="welcome-banner-down-icon" />
    </div>
  );
};

export default WelcomeBanner;
