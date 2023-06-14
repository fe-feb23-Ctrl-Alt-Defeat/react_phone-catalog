import React from 'react';
import './Button.scss';
import redHeart from '../../images/redHeart.svg';

type Props = {
  text?: string;
  onClick?: () => void;
  classes?: string;
};

export const Button: React.FC<Props> = ({
  text,
  onClick,
  classes = '',
}) => {
  return (
    <button
      className={`customButton ${classes}`}
      type="button"
      onClick={onClick}
    >
      {text || (
        <img
          src={redHeart}
          alt="favourite"
          className="favorite-button__image"
        />
      )}
    </button>
  );
};
