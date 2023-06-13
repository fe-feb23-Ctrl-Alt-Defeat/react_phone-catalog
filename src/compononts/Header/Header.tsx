/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import classNames from 'classnames';
import './header.scss';
import Logo from '../../images/logo_gnce_gadgets.svg';
import Favorites from '../../images/icon_favorites.svg';
import ShoppingBag from '../../images/icon_shopping_bag.svg';
import Menu_opener from '../../images/icon_menu_opener.svg';
import Menu_cross from '../../images/icon_menu_cross.svg';

export const Header: React.FC = () => {
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);
  const [, setScrollLocked] = useState(false);

  const handleBurgerToggle = () => {
    setIsBurgerOpened(currState => !currState);
    setScrollLocked(currState => !currState);
  };

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
              <img
                src={Logo}
                alt="Logo"
                className="header__logo-image"
              />
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
            >
              <img
                src={Favorites}
                alt="favorite"
                className="menu__favorite-image"
              />
            </NavLink>

            <NavLink
              to="/cart"
              className={
                ({ isActive }) => classNames('menu__shopping-bag',
                  { 'is-active': isActive })
              }
            >
              {/* иконка корзины */}
              <img
                src={ShoppingBag}
                alt="shopping_bag"
                className="menu__shopping-bag-image"
              />
            </NavLink>
          </div>
        </nav>
      )}
    </>
  );
};
