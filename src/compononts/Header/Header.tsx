import { NavLink } from 'react-router-dom';
import React from 'react';
import classNames from 'classnames';
import './header.scss';
import Logo from '../../images/logo_gnce_gadgets.svg';
import Favourite from '../../images/icon_favourite.svg';
import ShoppingBag from '../../images/icon_shopping_bag.svg';
import Menu_opener from '../../images/icon_menu_opener.svg';

export const Header: React.FC = () => {
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
                  PHONE
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

          <div className="header__right-section">
            <div className="header__favorite">
              {/* фото фейворит */}
              <img
                src={Favourite}
                alt="favourite"
                className="header__favorite-image"
              />
            </div>

            <div className="header__shopping-bag">
              {/* иконка корзины */}
              <img
                src={ShoppingBag}
                alt="shopping_bag"
                className="header__shopping-bag-image"
              />
            </div>

            <div className="header__menu-opener">
              {/* иконка menu */}
              <img
                src={Menu_opener}
                alt="menu-opener"
                className="header__menu-opener-image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
