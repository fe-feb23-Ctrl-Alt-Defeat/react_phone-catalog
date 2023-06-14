/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef } from 'react';
import Slider from 'react-slick';
import './newModelsSlider.scss';
import Photo_1 from '../../../images/Banner/Iphons_test_photo_to_banner/1.jpg';
import Photo_2 from '../../../images/Banner/Iphons_test_photo_to_banner/2.jpg';
import Photo_3 from '../../../images/Banner/Iphons_test_photo_to_banner/3.jpg';
import Photo_4 from '../../../images/Banner/Iphons_test_photo_to_banner/4.jpg';
import Photo_5 from '../../../images/Banner/Iphons_test_photo_to_banner/5.jpg';

// eslint-disable-next-line max-len
import Button_Errow_Next_Empty from '../../../images/Carousel_Slider/Button_Errow_Next_Empty.svg';
// eslint-disable-next-line max-len
import Button_Errow_Prev_Empty from '../../../images/Carousel_Slider/Button_Errow_Prev_Empty.svg';

import './slick.scss';
import './slick-theme.scss';

export const NewModelsSlider = () => {
  const caruselPictures = [Photo_1, Photo_2, Photo_3, Photo_4, Photo_5];
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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

  const handlePrevClick = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <>
      <div className="carouselHeader">
        <div className="carouselText">Brand new models</div>
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
          {caruselPictures.map((picture) => (
            <img src={picture} alt="Banner" className="picturesBan" />
          ))}
        </Slider>
      </div>
    </>
  );
};
