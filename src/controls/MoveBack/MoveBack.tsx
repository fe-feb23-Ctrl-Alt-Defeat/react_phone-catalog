import React from 'react';
import { Link } from 'react-router-dom';
import './moveBack.scss';
import IconBack from '../../images/icon_arrow_forward.svg';

export const MoveBack = () => {
  return (
    <Link to="/phones" className="move-back">
      <div className="move-back__icon">
        <img src={IconBack} alt="Back icon" className="move-back__icon-image" />
      </div>
      <div className="move-back__paragraph">
        <p className="move-back__paragraph-text">Back</p>
      </div>
    </Link>
  );
};
