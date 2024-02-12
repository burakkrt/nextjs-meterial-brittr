import React from 'react';
import { IRootParams } from './types';
import WelcomeBanner from '@/components/welcome-banner';
import ReferancesSlick from '@/components/referances-slick';
import AboutUs from '@/components/about-us';
import dynamic from 'next/dynamic';

const ProductComponent = dynamic(() => import('@components/products'));

function HomeContainer({ locale }: IRootParams) {
  return (
    <>
      <WelcomeBanner />
      <AboutUs />
      <ReferancesSlick />
      <ProductComponent locale={locale} />
    </>
  );
}

export default HomeContainer;
