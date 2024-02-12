import { Container } from '@mui/material';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
  const t = useTranslations('AboutUs');

  return (
    <div className="about-us" id="about-us">
      <Container maxWidth="lg">
        <div className="about-us-content">
          <div className="about-us-content-view">
            <div className="about-us-content-view-left">
              <h2 className="about-us-content-view-left-title">{t('title')}</h2>
              <p className="about-us-content-view-left-text">{t('text')}</p>
            </div>
            <div className="about-us-content-view-image">
              <Image src="/images/about-us-why.jpg" alt="About Us Image" fill sizes="100%" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
