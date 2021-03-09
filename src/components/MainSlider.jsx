import React from 'react';
import '../scss/MainSlider.scss';
import { Carousel } from 'react-bootstrap';

function MainSlider() {
  return (
    <Carousel indicators={false}>
      <Carousel.Item interval={3000}>
        <div className="slider-img slider-img__1 d-block w-100" />
        <Carousel.Caption>
          <h3 className="slide-main-text">Віртуальний коледж 491</h3>
          <p className="slide-second-text">Один з найсучасніших закладів освіти в Україні</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <div className="slider-img slider-img__2 d-block w-100" />

        <Carousel.Caption>
          <h3 className="slide-main-text">Комп'ютерні науки</h3>
          <p className="slide-second-text">Основні напрямки в навчанні - Computer Science та Дизайн </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <div className="slider-img slider-img__3 d-block w-100" />

        <Carousel.Caption>
          <h3 className="slide-main-text">Європейська система освіти</h3>
          <p className="slide-second-text">Отримай можливість здобути знання які допоможуть тобі в майбутньому</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainSlider;
