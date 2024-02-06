import React from 'react';
import { IRootParams } from './types';
import WelcomeBanner from '@/components/welcome-banner';
import ReferancesSlick from '@/components/referances-slick';

function HomeContainer({ locale }: IRootParams) {
  return (
    <>
      <WelcomeBanner />
      <ReferancesSlick />
    </>
  );
}

export default HomeContainer;
