'use client';
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const ReferancesSlick = () => {
  const t = useTranslations('Referances');
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    initialSlide: 0,
    pauseOnHover: false,
    cssEase: 'linear',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
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
            <Image src="/images/referances/ref-1.webp" alt="Referance Logo" fill sizes="100%" />
          </div>
        </div>
        <div className="slick-item">
          <div className="ref-image">
            <Image src="/images/referances/ref-2.webp" alt="Referance Logo" fill sizes="100%" />
          </div>
        </div>
        <div className="slick-item">
          <div className="ref-image">
            <Image src="/images/referances/ref-3.webp" alt="Referance Logo" fill sizes="100%" />
          </div>
        </div>
        <div className="slick-item">
          <div className="ref-image">
            <Image src="/images/referances/ref-4.webp" alt="Referance Logo" fill sizes="100%" />
          </div>
        </div>
        <div className="slick-item">
          <div className="ref-image">
            <Image src="/images/referances/ref-11.webp" alt="Referance Logo" fill sizes="100%" />
          </div>
        </div>
        <div className="slick-item">
          <div className="ref-image">
            <Image src="/images/referances/ref-5.webp" alt="Referance Logo" fill sizes="100%" />
          </div>
        </div>
        <div className="slick-item">
          <div className="ref-image">
            <Image src="/images/referances/ref-6.webp" alt="Referance Logo" fill sizes="100%" />
          </div>
        </div>
        <div className="slick-item">
          <div className="ref-image">
            <Image src="/images/referances/ref-7.webp" alt="Referance Logo" fill sizes="100%" />
          </div>
        </div>
        <div className="slick-item">
          <div className="ref-image">
            <Image src="/images/referances/ref-8.webp" alt="Referance Logo" fill sizes="100%" />
          </div>
        </div>
        <div className="slick-item">
          <div className="ref-image">
            <Image src="/images/referances/ref-9.webp" alt="Referance Logo" fill sizes="100%" />
          </div>
        </div>
        <div className="slick-item">
          <div className="ref-image">
            <Image src="/images/referances/ref-10.webp" alt="Referance Logo" fill sizes="100%" />
          </div>
        </div>
        <div className="slick-item">
          <div className="ref-image">
            <Image src="/images/referances/ref-11.webp" alt="Referance Logo" fill sizes="100%" />
          </div>
        </div>
        <div className="slick-item">
          <div className="ref-image">
            <Image src="/images/referances/ref-12.webp" alt="Referance Logo" fill sizes="100%" />
          </div>
        </div>
        <div className="slick-item">
          <div className="ref-image">
            <Image src="/images/referances/ref-13.webp" alt="Referance Logo" fill sizes="100%" />
          </div>
        </div>
        <div className="slick-item">
          <div className="ref-image">
            <Image src="/images/referances/ref-14.webp" alt="Referance Logo" fill sizes="100%" />
          </div>
        </div>
      </Slider>
      <div className="slider-container-title">
        <span>{t('title')}</span>
      </div>
    </div>
  );
};

export default ReferancesSlick;
