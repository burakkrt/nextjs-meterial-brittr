'use client';
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Image from 'next/image';

const ReferancesSlick = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    initialSlide: 0,
    pauseOnHover: false,
    cssEase: 'linear',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 3000,
          autoplaySpeed: 3000,
          autoplay: false,
        },
      },
    ],
  };

  function SampleNextArrow(props: any) {
    const { className, onClick } = props;
    return <div className={className} onClick={onClick}></div>;
  }

  function SamplePrevArrow(props: any) {
    const { className, onClick } = props;
    return <div className={className} onClick={onClick} />;
  }

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slick-item">
          <div className="ref-image">
            <Image src="/images/referances/ref-1.jpg" alt="Referance Logo" fill />
          </div>
        </div>
        <div className="slick-item">
          <div className="ref-image">
            <Image src="/images/referances/ref-2.jpg" alt="Referance Logo" fill />
          </div>
        </div>
        <div className="slick-item">
          <div className="ref-image">
            <Image src="/images/referances/ref-3.png" alt="Referance Logo" fill />
          </div>
        </div>
        <div className="slick-item">
          <div className="ref-image">
            <Image src="/images/referances/ref-4.png" alt="Referance Logo" fill />
          </div>
        </div>
        <div className="slick-item">
          <div className="ref-image">
            <Image src="/images/referances/ref-5.jpg" alt="Referance Logo" fill />
          </div>
        </div>
        <div className="slick-item">
          <div className="ref-image">
            <Image src="/images/referances/ref-6.jpg" alt="Referance Logo" fill />
          </div>
        </div>
        <div className="slick-item">
          <div className="ref-image">
            <Image src="/images/referances/ref-7.png" alt="Referance Logo" fill />
          </div>
        </div>
        <div className="slick-item">
          <div className="ref-image">
            <Image src="/images/referances/ref-8.png" alt="Referance Logo" fill />
          </div>
        </div>
        <div className="slick-item">
          <div className="ref-image">
            <Image src="/images/referances/ref-9.png" alt="Referance Logo" fill />
          </div>
        </div>
        <div className="slick-item">
          <div className="ref-image">
            <Image src="/images/referances/ref-10.png" alt="Referance Logo" fill />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ReferancesSlick;
