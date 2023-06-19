/* eslint-disable max-len */
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames';
// import Favorite from '../../images/icon_favorites.svg';
import redHeart from '../../images/redHeart.svg';

import './card.scss';
import { LocalStCart } from '../../types/LocalStCart';
import { CardData } from '../../types/CardData';
import { FavoritesAndCartCountContext } from '../FavoritesCartContext/FavoritesCartContext';
import { BASE_URL } from '../../utils/globalVariables';

type Props = {
  cardData: CardData;
};

export const Card: React.FC<Props> = ({ cardData }) => {
  const {
    favoritesCount,
    setFavoritesCount,
    cartCount,
    setCartCount,
  } = useContext(FavoritesAndCartCountContext);

  const localStorageCart = localStorage.getItem('cart');
  const currCart: LocalStCart = localStorageCart
    ? JSON.parse(localStorageCart)
    : [];

  const localStorageFavorites = localStorage.getItem('favorites');
  const currFavorite: number[] = localStorageFavorites
    ? JSON.parse(localStorageFavorites)
    : [];

  const [isFavoriteSelected, setIsFavoriteSelected] = useState(
    currFavorite.some(favorite => favorite === cardData.id),
  );

  const [isAdded, setIsAdded] = useState(
    currCart.some(cartVal => cartVal[0] === cardData.id),
  );

  const handleAddToCartClick = (productId: number) => {
    if (cartCount.includes(productId)) {
      const data = cartCount.filter(item => item !== productId);

      setCartCount([...data]);
    } else {
      setCartCount(prod => [...prod, productId]);
    }

    const cart = localStorage.getItem('cart');

    setIsAdded(currVal => !currVal);

    if (!cart || cart === '[]') {
      localStorage.setItem('cart', JSON.stringify([[productId, 1]]));

      return;
    }

    const currentCart: [[number, number]] = JSON.parse(cart);

    if (!currentCart.some(cartVal => cartVal[0] === productId)) {
      currentCart.push([productId, 1]);
      localStorage.setItem('cart', JSON.stringify(currentCart));

      return;
    }

    const newCart = currentCart.filter(cartVal => cartVal[0] !== productId);

    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const handleAddFavoriteClick = (productId: number) => {
    if (favoritesCount.includes(productId)) {
      const data = favoritesCount.filter(item => item !== productId);

      setFavoritesCount([...data]);
    } else {
      setFavoritesCount(prod => [...prod, productId]);
    }

    const favorites = localStorage.getItem('favorites');

    setIsFavoriteSelected(currVal => !currVal);

    if (!favorites || favorites === '[]') {
      localStorage.setItem('favorites', JSON.stringify([productId]));

      return;
    }

    const currentFavorites: number[] = JSON.parse(favorites);

    if (!currentFavorites.some(favoritesVal => favoritesVal === productId)) {
      currentFavorites.push(productId);
      localStorage.setItem('favorites', JSON.stringify(currentFavorites));

      return;
    }

    const newFavorites = currentFavorites.filter(
      (favoritesVal) => favoritesVal !== productId,
    );

    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  return (
    <div className="card">
      <div className="card__content">

        <Link to={`/phones/${cardData.itemId}`} className="card__image">
          <img
            src={`${BASE_URL}${cardData.image}`}
            alt="phone_image"
            className="card__image_img"
          />
        </Link>

        <Link to={`/phones/${cardData.itemId}`} className="card__title">
          {cardData.name}
        </Link>

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
            onClick={() => handleAddToCartClick(cardData.id)}
          >
            {isAdded ? 'Added to cart' : 'Add to cart'}
          </button>

          <button
            type="button"
            className={classNames('card__buy_favorite', {
              'card__buy_favorite-isSelected': isFavoriteSelected,
            })}
            onClick={() => handleAddFavoriteClick(cardData.id)}
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
                <div className="card__buy_favorite-img">
                  <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M9.62846 0.631371C10.1584 0.411797 10.7264 0.298782 11.3 0.298782C11.8736 0.298782 12.4416 0.411797 12.9715 0.631371C13.5014 0.850945 13.9829 1.17277 14.3884 1.57847C14.794 1.98394 15.1157 2.46532 15.3353 2.99514C15.5549 3.52506 15.6679 4.09305 15.6679 4.66667C15.6679 5.24028 15.5549 5.80827 15.3353 6.33819C15.1157 6.86806 14.7939 7.34949 14.3883 7.75497C14.3883 7.75501 14.3883 7.75493 14.3883 7.75497L8.49496 13.6483C8.22159 13.9217 7.77838 13.9217 7.50501 13.6483L1.61168 7.75497C0.792607 6.9359 0.332458 5.82501 0.332458 4.66667C0.332458 3.50833 0.792607 2.39743 1.61168 1.57836C2.43075 0.759288 3.54165 0.299139 4.69999 0.299139C5.85833 0.299139 6.96922 0.759288 7.78829 1.57836L7.99999 1.79005L8.21156 1.57847C8.21152 1.57851 8.2116 1.57844 8.21156 1.57847C8.61705 1.17283 9.09859 0.850924 9.62846 0.631371ZM13.3982 2.56819C13.1227 2.29256 12.7956 2.07392 12.4356 1.92474C12.0756 1.77556 11.6897 1.69878 11.3 1.69878C10.9103 1.69878 10.5244 1.77556 10.1644 1.92474C9.80435 2.07392 9.47724 2.29256 9.20174 2.56819L8.49496 3.27497C8.22159 3.54834 7.77838 3.54834 7.50501 3.27497L6.79834 2.56831C6.24182 2.01179 5.48702 1.69914 4.69999 1.69914C3.91295 1.69914 3.15815 2.01179 2.60163 2.56831C2.04511 3.12483 1.73246 3.87963 1.73246 4.66667C1.73246 5.4537 2.04511 6.20851 2.60163 6.76502L7.99999 12.1634L13.3983 6.76502C13.674 6.48953 13.8927 6.16231 14.0419 5.80228C14.1911 5.44226 14.2679 5.05637 14.2679 4.66667C14.2679 4.27696 14.1911 3.89107 14.0419 3.53105C13.8927 3.17103 13.6739 2.84369 13.3982 2.56819Z" />
                  </svg>
                </div>
              )}
          </button>
        </div>

      </div>
    </div>
  );
};
