/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import './salesSlider.scss';
import Banner from '../../images/Banner/Banner.svg';
import Banner_2 from '../../images/Banner/Banner_2.jpg';
import Banner_arrow_left from '../../images/Banner/Banner_arrow_left.svg';
import Banner_arrow_right from '../../images/Banner/Banner_arrow_right.svg';
// eslint-disable-next-line max-len
import Jump_Button_Empty from '../../images/Banner/Banner_icon_jumpButton_empty.svg';
// eslint-disable-next-line max-len
import Jump_Button_Color from '../../images/Banner/Banner_icon_jumpButton_color.svg';

export const SalesSlider = () => {
  const pictures = [Banner, Banner_2, Banner];

  const [offset, setOffset] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  const hendleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + 1040;
      const maxOffset = -(1040 * (pictures.length - 1));

      return newOffset > 0 ? maxOffset : newOffset;
    });

    setActiveSlide((currentSlide) => {
      const previousSlide = currentSlide - 1;

      return previousSlide < 0 ? pictures.length - 1 : previousSlide;
    });
  };

  const hendleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - 1040;
      const maxOffset = -(1040 * (pictures.length - 1));

      return newOffset < maxOffset ? 0 : newOffset;
    });

    setActiveSlide((currentSlide) => {
      const nextSlide = currentSlide + 1;

      return nextSlide >= pictures.length ? 0 : nextSlide;
    });
  };

  const goToSlide = (slideIndex: number) => {
    setOffset(-1040 * slideIndex);
    setActiveSlide(slideIndex);
  };

  return (
    <div className="container">
      <div className="sliderText">
        Welcome to Nice
        <wbr />
        &nbsp;Gadgets store!
      </div>

      <div className="sliderContainer">
        <div
          className="arrow arrow-left"
          onClick={hendleLeftArrowClick}
        >
          <img src={Banner_arrow_left} alt="arrowLeft" />
        </div>
        <div className="sliderBox">
          <div
            className="sliderBox__contents"
            style={{
              transform: `translateX(${offset}px)`,
            }}
          >
            {pictures.map((picture) => (
              <img src={picture} alt="Banner" className="bannerImg" />
            ))}
          </div>
        </div>
        <div
          className="arrow arrow-right"
          onClick={hendleRightArrowClick}
        >
          <img src={Banner_arrow_right} alt="arrowRight" />
        </div>
      </div>
      <div className="jumpButtonBox">
        {pictures.map((_, sliderIndex) => (
          <div
            key={sliderIndex}
            className={`jumpButton ${activeSlide === sliderIndex ? 'active' : ''}`}
            onClick={() => goToSlide(sliderIndex)}
          >
            <img
              src={activeSlide === sliderIndex
                ? Jump_Button_Color : Jump_Button_Empty}
              alt="jumpButton"
              className="jumpButtonImg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
