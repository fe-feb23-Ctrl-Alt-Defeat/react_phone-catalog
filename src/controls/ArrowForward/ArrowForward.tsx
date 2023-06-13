import React from 'react';
import IconArrowForward from '../../images/icon_arrow_forward.svg';
import './arrowForward.scss';

export const ArrowForward = () => {
  return (
    <div className="icon-arrow">
      <img
        src={IconArrowForward}
        alt="Arrow icon"
        className="icon-arrow__image"
      />
    </div>
  );
};
