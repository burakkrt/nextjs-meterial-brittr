import React from 'react';
import { IRootParams } from './types';
import WelcomeBanner from '@/components/welcome-banner';
import ReferancesSlick from '@/components/referances-slick';
import AboutUs from '@/components/about-us';
import GlobalMap from '@/components/global-map';
import dynamic from 'next/dynamic';

const ProductComponent = dynamic(() => import('@components/products'));

function HomeContainer({ locale }: IRootParams) {
  return (
    <>
      <WelcomeBanner />
      <ReferancesSlick />
      <AboutUs />
      {/* <GlobalMap /> */}
      <ProductComponent locale={locale} />
    </>
  );
}

export default HomeContainer;
