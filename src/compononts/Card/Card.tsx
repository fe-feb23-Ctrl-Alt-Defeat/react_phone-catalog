import React, { useState } from 'react';
import './card.scss';

import classNames from 'classnames';
import Favorite from '../../images/icon_favourite.svg';
import redHeart from '../../images/redHeart.svg';
import testPhoto from '../../images/phoneTest.png';

export const Card = () => {
  const [isFavoriteSelected, setIsFavoriteSelected] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  return (
    <div className="card">
      <div className="card__content">
        <a href="/" className="card__image">
          <img
            src={testPhoto}
            alt="phome"
            className="card__image_img"
          />
        </a>

        <p className="card__title">
          Apple iPhone Xs 64GB Silver (iMT9G2FS/A)
        </p>

        <div className="card__price">
          <div className="card__price_normal">
            $799
          </div>
          <div className="card__price_discount">
            $899
          </div>
        </div>

        <div className="card__divide"></div>

        <div className="card__char">
          <div className="card__char_name">
            <p className="card__char_name-screen"> Screen </p>
            <p className="card__char_name-screen"> Capacity </p>
            <p className="card__char_name-screen"> RAM </p>
          </div>

          <div className="card__char_descr">
            <p className="card__char_descr-screen"> 5.8” OLED </p>
            <p className="card__char_descr-screen"> 64 GB </p>
            <p className="card__char_descr-screen"> 4 GB </p>
          </div>
        </div>

        <div className="card__buy">
          <button
            type="button"
            className={classNames('card__buy_button card__buy_button', {
              'card__buy_button card__buy_button-isAdded': isAdded,
            })}
            onClick={() => setIsAdded(!isAdded)}
          >
            {isAdded ? 'Added' : 'Add to cart'}
          </button>

          <button
            type="button"
            className={classNames('card__buy_favorite', {
              'card__buy_favorite-isSelected': isFavoriteSelected,
            })}
            onClick={() => setIsFavoriteSelected(!isFavoriteSelected)}
          >
            {isFavoriteSelected
              ? (
                <img
                  src={redHeart}
                  alt="favourite"
                  className="card__buy_favorite-img-isSelected"
                />
              )
              : (
                <img
                  src={Favorite}
                  alt="favourite"
                  className="card__buy_favorite-img"
                />
              )}
          </button>
        </div>

      </div>
    </div>
  );
};
