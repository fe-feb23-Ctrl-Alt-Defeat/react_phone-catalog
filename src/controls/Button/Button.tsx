import React, { MouseEventHandler } from 'react';
import './Button.scss';
import redHeart from '../../images/redHeart.svg';

type ButtonType = (MouseEventHandler<HTMLButtonElement>);

type Props = {
  text?: string;
  onClick?: ButtonType;
  classes?: string;
  disabled?: boolean;
};

export const Button: React.FC<Props> = ({
  text,
  onClick = () => {},
  classes = '',
  // disabled = false,
}) => {
  return (
    <button
      className={`customButton ${classes}`}
      type="button"
      // disabled={disabled}
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
