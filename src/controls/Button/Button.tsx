import React, { MouseEventHandler } from 'react';
import './Button.scss';
import redHeart from '../../images/redHeart.svg';
import Favorites from '../../images/icon_favorites.svg';

type ButtonType = (MouseEventHandler<HTMLButtonElement>);

type Props = {
  text?: string;
  onClick?: ButtonType;
  classes?: string;
  isSelected?: boolean;
};

export const Button: React.FC<Props> = ({
  text,
  onClick = () => {},
  classes = '',
  isSelected,
}) => {
  return (
    <button
      className={`customButton ${classes}`}
      type="button"
      onClick={onClick}
    >
      {text || (
        <img
          src={isSelected ? redHeart : Favorites}
          alt="favourite"
          className="favorite-button__image"
        />
      )}
    </button>
  );
};
