import React from 'react';

import './MainSlider.scss';

import { Carousel } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function MainSlider() {
  const { t } = useTranslation();

  return (
    <Carousel indicators={false}>
      <Carousel.Item interval={3000}>
        <div className="slider-img slider-img__1 d-block w-100" />
        <Carousel.Caption>
          <h3 className="slide-main-text">{t('slider_first_element_title')}</h3>
          <p className="slide-second-text">{t('slider_first_element_description')}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <div className="slider-img slider-img__2 d-block w-100" />

        <Carousel.Caption>
          <h3 className="slide-main-text">{t('slider_second_element_title')}</h3>
          <p className="slide-second-text">{t('slider_second_element_description')}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <div className="slider-img slider-img__3 d-block w-100" />

        <Carousel.Caption>
          <h3 className="slide-main-text">{t('slider_third_element_title')}</h3>
          <p className="slide-second-text">{t('slider_third_element_description')}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainSlider;
