import { Container } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us">
      <Container maxWidth="lg">
        <div className="about-us-content">
          <div className="about-us-content-view">
            <div className="about-us-content-view-left">
              <h2 className="about-us-content-view-left-title">About Us ?</h2>
              <p className="about-us-content-view-left-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum eum aliquam aliquid
                impedit optio labore nostrum porro vitae ex explicabo blanditiis dolorem assumenda
                recusandae quaerat, necessitatibus soluta alias enim perspiciatis? Officiis
                consequatur sit iusto commodi tempore exercitationem voluptates reiciendis fugit
                corrupti voluptas nam eligendi inventore repudiandae sed soluta quam et debitis ut
                dolorum ad, expedita quis. Fugiat consequuntur hic omnis.
              </p>
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
