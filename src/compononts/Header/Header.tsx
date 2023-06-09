import React from 'react';
import './header.scss';
import Logo from '../../images/logo_gnce_gadgets.svg';
import Favourite from '../../images/icon_favourite.svg';
import ShoppingBag from '../../images/icon_shopping_bag.svg';

export const Header: React.FC = () => {
  return (
    <>
      <div className="header">
        <nav className="header__nav-links">
          <div className="header__logo">
            {/* фото лого */}
            <img
              src={Logo}
              alt="Logo"
              className="header__logo-image"
            />
          </div>

          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/phone">Phone</a>
            </li>
            <li>
              <a href="/tablets">Tablets</a>
            </li>
            <li>
              <a href="/accessories">Accessories</a>
            </li>
          </ul>
        </nav>
        <div className="header__right-section">
          <div className="header__favorite">
            {/* фото фейворит */}
            <img
              src={Favourite}
              alt="favourite"
              className="header__favorite-image"
            />
            <i className="fas fa-heart"></i>
          </div>
          <div className="header__shopping-bag">
            {/* иконка корзины */}
            <img
              src={ShoppingBag}
              alt="shopping_bag"
              className="header__shopping-bag-image"
            />
            <i className="fas fa-shopping-cart">
            </i>
          </div>
        </div>
      </div>
    </>
  );
};
