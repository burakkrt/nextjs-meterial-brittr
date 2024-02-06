'use client';

import { ParallaxProvider } from 'react-scroll-parallax';

export function Provider({ children }: { children: React.ReactNode }) {
  return <ParallaxProvider>{children}</ParallaxProvider>;
}

export default Provider;
