import React from 'react';
import { IRootParams } from './types';
import WelcomeBanner from '@/components/welcome-banner';
import ReferancesSlick from '@/components/referances-slick';
import AboutUs from '@/components/about-us';
import Products from '@/components/products';

function HomeContainer({ locale }: IRootParams) {
  return (
    <>
      <WelcomeBanner />
      <ReferancesSlick />
      <AboutUs />
      <Products />
    </>
  );
}

export default HomeContainer;
