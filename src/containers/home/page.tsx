import React from 'react';
import { IRootParams } from './types';
import WelcomeBanner from '@/components/welcome-banner';

function HomeContainer({ locale }: IRootParams) {
  return (
    <>
      <WelcomeBanner />
    </>
  );
}

export default HomeContainer;
