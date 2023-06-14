/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC, useRef } from 'react';
import Slider from 'react-slick';
import './newModelsSlider.scss';
// eslint-disable-next-line max-len
import Button_Errow_Next_Empty from '../../../images/Carousel_Slider/Button_Errow_Next_Empty.svg';
// eslint-disable-next-line max-len
import Button_Errow_Prev_Empty from '../../../images/Carousel_Slider/Button_Errow_Prev_Empty.svg';
import './slick.scss';
import './slick-theme.scss';
import { Card } from '../../Card/Card';
import { CardData } from '../../../types/CardData';

interface Props {
  phonesData: CardData[];
  title: string;
}

export const NewModelsSlider: FC<Props> = ({ phonesData, title }) => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 778,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handlePrevClick = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <>
      <div className="carouselHeader">
        <div className="carouselText">{title}</div>
        <div className="buttonBox">
          <div className="button_errow button_prev" onClick={handlePrevClick}>
            <img
              src={Button_Errow_Prev_Empty}
              alt="Button_Errow_Prev_Empty"
              className="Button_Errow_img"
            />
          </div>
          <div className="button_errow button_next" onClick={handleNextClick}>
            <img
              src={Button_Errow_Next_Empty}
              alt="Button_Errow_Next_Empty"
              className="Button_Errow_img"
            />
          </div>
        </div>
      </div>
      <div className="simpleSliderContainer">
        <Slider ref={sliderRef} {...settings}>
          {phonesData.map((phone) => (
            <div key={phone.itemId} className="picturesBan">
              <Card cardData={phone} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
