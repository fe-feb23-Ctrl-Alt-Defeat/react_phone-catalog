import React, { useState } from 'react';
import './card.scss';

import classNames from 'classnames';
import Favorite from '../../images/icon_favorites.svg';
import redHeart from '../../images/redHeart.svg';
import { CardData } from '../../types/CardData';

type Props = {
  cardData: CardData;
};

export const Card: React.FC<Props> = ({ cardData }) => {
  const [isFavoriteSelected, setIsFavoriteSelected] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  return (
    <div className="card">
      <div className="card__content">
        <a href="/" className="card__image">
          <img
            src={`https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/${cardData.image}`}
            alt="phone_image"
            className="card__image_img"
          />
        </a>

        <p className="card__title">
          {cardData.name}
        </p>

        <div className="card__price">
          <div className="card__price_normal">
            {`${cardData.price}$`}
          </div>
          <div className="card__price_discount">
            {`${cardData.fullPrice}$`}
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
            <p className="card__char_descr-screen">{cardData.screen}</p>
            <p className="card__char_descr-screen">{cardData.capacity}</p>
            <p className="card__char_descr-screen">{cardData.ram}</p>
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
            {isAdded ? 'Added to cart' : 'Add to cart'}
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
