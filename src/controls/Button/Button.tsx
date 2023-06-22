/* eslint-disable react/button-has-type */
import React, { MouseEventHandler } from 'react';
import cn from 'classnames';
import './Button.scss';
import redHeart from '../../images/redHeart.svg';
import Favorite from '../../images/icon_favorites.svg';

type ButtonType = (MouseEventHandler<HTMLButtonElement>);

type Props = {
  text?: string;
  onClick?: ButtonType;
  classes?: string;
  isSelected?: boolean;
  type?: 'button' | 'submit' | 'reset';
};

export const Button: React.FC<Props> = ({
  text,
  onClick = () => { },
  classes = '',
  isSelected,
  type = 'button',
}) => {
  return (
    <button
      className={cn(`customButton ${classes}`, { 'button-add-to-cart--selected': isSelected })}
      type={type}
      onClick={onClick}
    >
      {text || (
        <img
          src={isSelected ? redHeart : Favorite}
          alt="favourite"
          className="favorite-button__image"
        />
      )}
    </button>
  );
};
