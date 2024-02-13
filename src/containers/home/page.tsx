import React from 'react';
import { IRootParams } from './types';
import WelcomeBanner from '@/components/welcome-banner';
import ReferancesSlick from '@/components/referances-slick';
import AboutUs from '@/components/about-us';
import LoadingMap from '@/components/global-map/LoadingMap';
import dynamic from 'next/dynamic';

const ProductComponent = dynamic(() => import('@components/products'));
const MapComponent = dynamic(() => import('@components/global-map'), {
  ssr: false,
  loading: () => <LoadingMap />,
});

function HomeContainer({ locale }: IRootParams) {
  return (
    <>
      <WelcomeBanner />
      <ReferancesSlick />
      <AboutUs />
      <MapComponent />
      <ProductComponent locale={locale} />
    </>
  );
}

export default HomeContainer;
