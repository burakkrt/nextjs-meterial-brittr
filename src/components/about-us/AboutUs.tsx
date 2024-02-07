'use client';
import { Container } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { useParallax } from 'react-scroll-parallax';

const AboutUs = () => {
  const { ref: parallaxRefTitle } = useParallax({
    speed: -30,
  });

  const { ref: parallaxRefImage } = useParallax({
    translateX: ['300px', '100px'],
  });

  return (
    <div className="about-us">
      <Container maxWidth="lg" className="about-us-content">
        <div className="about-us-content-view" ref={parallaxRefTitle as any}>
          <div className="about-us-content-view-left">
            <h2 className="about-us-content-view-left-title">Biz kimiz ?</h2>
            <p className="about-us-content-view-left-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum eum aliquam aliquid
              impedit optio labore nostrum porro vitae ex explicabo blanditiis dolorem assumenda
              recusandae quaerat, necessitatibus soluta alias enim perspiciatis? Officiis
              consequatur sit iusto commodi tempore exercitationem voluptates reiciendis fugit
              corrupti voluptas nam eligendi inventore repudiandae sed soluta quam et debitis ut
              dolorum ad, expedita quis. Fugiat consequuntur hic omnis.
            </p>
          </div>
          <div className="about-us-content-view-image" ref={parallaxRefImage as any}>
            <Image src="/images/about-us-why.jpg" alt="About Us Image" fill sizes="100%" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
