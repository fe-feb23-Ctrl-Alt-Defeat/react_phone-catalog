import React from 'react';
import { useNavigate } from 'react-router-dom';
import './moveBack.scss';
import IconBack from '../../images/icon_arrow_forward.svg';

export const MoveBack = () => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="move-back"
      onClick={() => navigate('/phones', { replace: true })}
    >
      <div className="move-back__icon">
        <img src={IconBack} alt="Back icon" className="move-back__icon-image" />
      </div>
      <div className="move-back__paragraph">
        <p className="move-back__paragraph-text">Back</p>
      </div>
    </button>
  );
};
