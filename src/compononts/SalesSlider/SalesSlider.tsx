/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import './salesSlider.scss';
import Banner from '../../images/Banner.svg';
import Banner_arrow_left from '../../images/Banner_arrow_left.svg';
import Banner_arrow_right from '../../images/Banner_arrow_right.svg';

export const SalesSlider = () => {
  const [offset, setOffset] = useState(0);

  const hendleLeftArrowClick = () => {
    console.log(123);

    setOffset((currentOffset: number) => {
      const newOffset = currentOffset + 1040;

      console.log(newOffset);

      return Math.min(newOffset, 0);
    });
  };

  const hendleRightArrowClick = () => {
    console.log(456);
    setOffset((currentOffset: number) => {
      const newOffset = currentOffset - 1040;

      const maxOffset = -(1040 * 2);

      console.log(newOffset);

      return Math.max(newOffset, maxOffset);
    });
  };

  return (
    <div>
      <div>Welcome to Nice Gadgets store!</div>

      <div className="sliderContainer">
        <div
          className="arrow"
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
            <img src={Banner} alt="Banner" className="bannerImg" />
            <img src={Banner} alt="Banner" className="bannerImg" />
            <img src={Banner} alt="Banner" className="bannerImg" />
          </div>
        </div>
        <div
          className="arrow"
          onClick={hendleRightArrowClick}
        >
          <img src={Banner_arrow_right} alt="arrowRight" />
        </div>
      </div>
    </div>
  );
};
