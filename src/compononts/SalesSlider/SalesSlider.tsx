/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Banner from '../../images/Banner/Banner.svg';
import Banner_2 from '../../images/Banner/Banner_2.jpg';
import Banner_3 from '../../images/Banner/Banner_3.jpg';

import Jump_Button_Empty from '../../images/Banner/Banner_icon_jumpButton_empty.svg';
import Jump_Button_Color from '../../images/Banner/Banner_icon_jumpButton_color.svg';

import './salesSlider.scss';

export const SalesSlider = () => {
  const pictures = [Banner, Banner_2, Banner_3];

  const [offset, setOffset] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [widthWindow, setWidthWindow] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const newWidthWindow = window.innerWidth;

      setWidthWindow(newWidthWindow);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [widthWindow]);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setHeightWindow(document.body.scrollHeight);
  //   };

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, [heightWindow]);

  let widthSliderImg = 0;

  if (widthWindow > 1200) {
    widthSliderImg = 1040;
  }

  if (widthWindow > 640 && widthWindow < 1199) {
    widthSliderImg = widthWindow - 94;
  }

  if (widthWindow < 639) {
    widthSliderImg = widthWindow;
  }

  const hendleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + widthSliderImg;
      const maxOffset = -(widthSliderImg * (pictures.length - 1));

      return newOffset > 0 ? maxOffset : newOffset;
    });

    setActiveSlide((currentSlide) => {
      const previousSlide = currentSlide - 1;

      return previousSlide < 0 ? pictures.length - 1 : previousSlide;
    });
  };

  const hendleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - widthSliderImg;
      const maxOffset = -(widthSliderImg * (pictures.length - 1));

      return newOffset < maxOffset ? 0 : newOffset;
    });

    setActiveSlide((currentSlide) => {
      const nextSlide = currentSlide + 1;

      return nextSlide >= pictures.length ? 0 : nextSlide;
    });
  };

  const goToSlide = (slideIndex: number) => {
    setOffset(-widthSliderImg * slideIndex);
    setActiveSlide(slideIndex);
  };

  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty('--slider-width', `${widthSliderImg}px`);
  }, [widthSliderImg]);

  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty('--slider-width', `${widthSliderImg}px`);

    const timer = setInterval(() => {
      hendleRightArrowClick();
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [widthSliderImg]);

  return (
    <>
      <div className="container sliderText">
        Welcome to Nice
        <wbr />
        &nbsp;Gadgets store!
      </div>

      <div className="sliderContainer">
        <div
          className="arrow arrow-left"
          onClick={hendleLeftArrowClick}
        >
          <div className="arrowImg">
            <svg className="arrowImg__item" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M5.47146 0.528636C5.21111 0.268287 4.789 0.268287 4.52865 0.528636L0.528646 4.52864C0.268297 4.78899 0.268297 5.2111 0.528646 5.47145L4.52865 9.47145C4.789 9.7318 5.21111 9.7318 5.47146 9.47145C5.7318 9.2111 5.7318 8.78899 5.47146 8.52864L1.94286 5.00004L5.47146 1.47145C5.7318 1.2111 5.7318 0.788986 5.47146 0.528636Z" fill="currentColor" />
            </svg>
          </div>
        </div>
        <div className="sliderBox">
          <div
            className="sliderBox__contents"
            style={{
              transform: `translateX(${offset}px)`,
            }}
          >
            {pictures.map((picture) => (
              <img
                src={picture}
                alt="Banner"
                className="bannerImg"
                key={uuidv4()}
              />
            ))}
          </div>
        </div>
        <div
          className="arrow arrow-right"
          onClick={hendleRightArrowClick}
        >
          <div className="arrowImg">
            <svg className="arrowImg__item" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M0.528636 0.528636C0.788986 0.268287 1.2111 0.268287 1.47145 0.528636L5.47145 4.52864C5.73179 4.78899 5.73179 5.2111 5.47145 5.47145L1.47145 9.47145C1.2111 9.7318 0.788986 9.7318 0.528636 9.47145C0.268287 9.2111 0.268287 8.78899 0.528636 8.52864L4.05723 5.00004L0.528636 1.47145C0.268287 1.2111 0.268287 0.788986 0.528636 0.528636Z" />
            </svg>
          </div>

        </div>
      </div>
      <div className="jumpButtonBox">
        {pictures.map((_, sliderIndex) => (
          <div
            key={uuidv4()}
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
    </>
  );
};
