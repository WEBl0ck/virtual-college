import React from 'react';

import './Partners.scss';

import SliderSlick from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../scss/Slider.scss';

import PartnerPhoto1 from '../../assets/images/partner1.png';
import PartnerPhoto2 from '../../assets/images/partner2.jpg';
import PartnerPhoto3 from '../../assets/images/partner3.jpg';
import PartnerPhoto4 from '../../assets/images/partner4.png';
import PartnerPhoto5 from '../../assets/images/partner5.jpg';

function Partners() {
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    margin: 30,
    initialSlide: 0,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    pauseOnHover: false,
    draggable: false,
    focusOnSelect: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="partners-section">
      <div className="partners-section-bottom mt-4 pb-4">
        <div className="slider-wrapper position-relative">
          <SliderSlick {...settings}>
            <div className="slider-item">
              <img src={PartnerPhoto1} alt="" />
            </div>
            <div className="slider-item">
              <img src={PartnerPhoto2} alt="" />
            </div>
            <div className="slider-item">
              <img src={PartnerPhoto3} alt="" />
            </div>
            <div className="slider-item">
              <img src={PartnerPhoto4} alt="" />
            </div>
            <div className="slider-item">
              <img src={PartnerPhoto5} alt="" />
            </div>
          </SliderSlick>
        </div>
      </div>
    </div>
  );
}

export default Partners;
