import React from 'react';
import { IRootParams } from './types';
import WelcomeBanner from '@/components/welcome-banner';
import ReferancesSlick from '@/components/referances-slick';
import AboutUs from '@/components/about-us';

function HomeContainer({ locale }: IRootParams) {
  return (
    <>
      <WelcomeBanner />
      <ReferancesSlick />
      <AboutUs />
    </>
  );
}

export default HomeContainer;
