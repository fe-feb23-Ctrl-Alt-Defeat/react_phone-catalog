/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Link, NavLink } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import './header.scss';
import Logo from '../../images/logo_gnce_gadgets.svg';
import Favorites from '../../images/icon_favorites.svg';
import ShoppingBag from '../../images/icon_shopping_bag.svg';
import Menu_opener from '../../images/icon_menu_opener.svg';
import Menu_cross from '../../images/icon_menu_cross.svg';
import { FavoritesAndCartCountContext } from '../FavoritesCartContext/FavoritesCartContext';

interface Props {
  switchTheme: () => void
}

export const Header: React.FC<Props> = ({ switchTheme }) => {
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);
  const [, setScrollLocked] = useState(false);

  const handleBurgerToggle = () => {
    setIsBurgerOpened(currState => !currState);
    setScrollLocked(currState => !currState);
  };

  const { favoritesCount, cartCount } = useContext(FavoritesAndCartCountContext);

  // console.log('cart  ', cartCount);
  // useEffect(() => {
  //   if (scrollLocked) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'visible';
  //   }

  //   return () => {
  //     document.body.style.overflow = 'visible';
  //   };
  // }, [scrollLocked]);

  return (
    <>
      <div className="header">
        <div className="containerHeader">
          <nav className="header__nav-links">
            <div className="header__logo">
              {/* фото лого */}
              <Link to="/">
                <img
                  src={Logo}
                  alt="Logo"
                  className="header__logo-image"
                />
              </Link>
            </div>

            <ul className="header__list">
              <li className="header__list_item">
                <NavLink
                  to="/"
                  className={
                    ({ isActive }) => classNames('header__list_link',
                      { 'is-active': isActive })
                  }
                >
                  HOME
                </NavLink>
              </li>
              <li className="header__list_item">
                <NavLink
                  to="/phones"
                  className={
                    ({ isActive }) => classNames('header__list_link',
                      { 'is-active': isActive })
                  }
                >
                  PHONES
                </NavLink>
              </li>
              <li className="header__list_item">
                <NavLink
                  to="/tablets"
                  className={
                    ({ isActive }) => classNames('header__list_link',
                      { 'is-active': isActive })
                  }
                >
                  TABLETS
                </NavLink>
              </li>
              <li className="header__list_item">
                <NavLink
                  to="/accessories"
                  className={
                    ({ isActive }) => classNames('header__list_link',
                      { 'is-active': isActive })
                  }
                >
                  ACCESSORIES
                </NavLink>
              </li>
            </ul>
          </nav>

          <div
            className="header__right-section"
            onClick={handleBurgerToggle}
          >
            {/* фото фейворит */}
            <button
              type="button"
              className="header__favorite"
              onClick={switchTheme}
            >
              <div className="header__favorite_sun">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" />
                </svg>
              </div>
            </button>
            <NavLink
              to="/favorites"
              className={
                ({ isActive }) => classNames('header__favorite',
                  { 'is-active': isActive })
              }
            >
              <img
                src={Favorites}
                alt="favorite"
                className="header__favorite-image"
              />

              {favoritesCount.length > 0 && (
                <div className="header__favorite_icon">
                  {favoritesCount.length}
                </div>
              )}
            </NavLink>

            <NavLink
              to="/cart"
              className={
                ({ isActive }) => classNames('header__shopping-bag',
                  { 'is-active': isActive })
              }
            >
              {/* иконка корзины */}
              <img
                src={ShoppingBag}
                alt="shopping_bag"
                className="header__shopping-bag-image"
              />
              {cartCount.length > 0 && (
                <div className="header__favorite_icon">
                  {cartCount.length}
                </div>
              )}
            </NavLink>

            <div
              className="header__menu-opener"
            >
              {/* иконка menu */}
              <img
                src={isBurgerOpened
                  ? Menu_cross
                  : Menu_opener}
                alt="menu-opener"
                className="header__menu-opener-image"
              />
            </div>
          </div>
        </div>
      </div>

      {isBurgerOpened && (
        <nav className="menu">
          <div className="menu__top">
            <ul className="menu__list">
              <li className="menu__list_item">
                <NavLink
                  to="/"
                  className={
                    ({ isActive }) => classNames('menu__list_link',
                      { 'is-active': isActive })
                  }
                  onClick={() => setIsBurgerOpened(false)}
                >
                  HOME
                </NavLink>
              </li>
              <li className="menu__list_item">
                <NavLink
                  to="/phones"
                  className={
                    ({ isActive }) => classNames('menu__list_link',
                      { 'is-active': isActive })
                  }
                  onClick={() => setIsBurgerOpened(false)}
                >
                  PHONES
                </NavLink>
              </li>
              <li className="menu__list_item">
                <NavLink
                  to="/tablets"
                  className={
                    ({ isActive }) => classNames('menu__list_link',
                      { 'is-active': isActive })
                  }
                  onClick={() => setIsBurgerOpened(false)}
                >
                  TABLETS
                </NavLink>
              </li>
              <li className="menu__list_item">
                <NavLink
                  to="/accessories"
                  className={
                    ({ isActive }) => classNames('menu__list_link',
                      { 'is-active': isActive })
                  }
                  onClick={() => setIsBurgerOpened(false)}
                >
                  ACCESSORIES
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="menu__bottom">
            <NavLink
              to="/favorites"
              className={
                ({ isActive }) => classNames('menu__favorite',
                  { 'is-active': isActive })
              }
              onClick={() => setIsBurgerOpened(false)}
            >
              <img
                src={Favorites}
                alt="favorite"
                className="menu__favorite-image"
              />

              {favoritesCount.length > 0 && (
                <div className="menu__favorite_icon">
                  {favoritesCount.length}
                </div>
              )}
            </NavLink>

            <NavLink
              to="/cart"
              className={
                ({ isActive }) => classNames('menu__shopping-bag',
                  { 'is-active': isActive })
              }
              onClick={() => setIsBurgerOpened(false)}
            >
              {/* иконка корзины */}
              <img
                src={ShoppingBag}
                alt="shopping_bag"
                className="menu__shopping-bag-image"
              />
              {cartCount.length > 0 && (
                <div className="menu__favorite_icon">
                  {cartCount.length}
                </div>
              )}
            </NavLink>
          </div>
        </nav>
      )}
    </>
  );
};
