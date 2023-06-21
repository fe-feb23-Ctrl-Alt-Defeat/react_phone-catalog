/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Link, NavLink } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import './header.scss';
import { FavoritesAndCartCountContext } from '../FavoritesCartContext/FavoritesCartContext';
import { LogoHeader } from '../../controls/Logo/Logo';

interface Props {
  switchTheme: () => void
  theme: string;
}

export const Header: React.FC<Props> = ({ switchTheme, theme }) => {
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { isModalOpen, setIsModalOpen } = useContext(FavoritesAndCartCountContext);

  const handleBurgerToggle = () => {
    if (window.innerWidth <= 768) {
      setIsBurgerOpened(currState => !currState);
    }
  };

  const { favoritesCount, cartCount } = useContext(FavoritesAndCartCountContext);

  const handleShowModal = () => {
    setIsModalOpen(prev => !prev);
  };

  useEffect(() => {
    if (isBurgerOpened) {
      document.body.classList.add('scroll-lock');
    }

    return () => {
      document.body.classList.remove('scroll-lock');
    };
  }, [isBurgerOpened]);

  return (
    <>
      <div className="header">
        <div className="containerHeader">
          <nav className="header__nav-links">
            <div className="header__logo">
              {/* фото лого */}
              <Link to="/">
                <LogoHeader />
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
            <div
              className="header__favorite"
              onClick={switchTheme}
            >
              <div className="header__favorite-image">
                {theme === 'dark'
                  ? (
                    <svg className="header__favorite-image-sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">
                      <path fill="currentColor" d="M 24.90625 3.96875 C 24.863281 3.976563 24.820313 3.988281 24.78125 4 C 24.316406 4.105469 23.988281 4.523438 24 5 L 24 11 C 23.996094 11.359375 24.183594 11.695313 24.496094 11.878906 C 24.808594 12.058594 25.191406 12.058594 25.503906 11.878906 C 25.816406 11.695313 26.003906 11.359375 26 11 L 26 5 C 26.011719 4.710938 25.894531 4.433594 25.6875 4.238281 C 25.476563 4.039063 25.191406 3.941406 24.90625 3.96875 Z M 10.65625 9.84375 C 10.28125 9.910156 9.980469 10.183594 9.875 10.546875 C 9.769531 10.914063 9.878906 11.304688 10.15625 11.5625 L 14.40625 15.8125 C 14.648438 16.109375 15.035156 16.246094 15.410156 16.160156 C 15.78125 16.074219 16.074219 15.78125 16.160156 15.410156 C 16.246094 15.035156 16.109375 14.648438 15.8125 14.40625 L 11.5625 10.15625 C 11.355469 9.933594 11.054688 9.820313 10.75 9.84375 C 10.71875 9.84375 10.6875 9.84375 10.65625 9.84375 Z M 39.03125 9.84375 C 38.804688 9.875 38.59375 9.988281 38.4375 10.15625 L 34.1875 14.40625 C 33.890625 14.648438 33.753906 15.035156 33.839844 15.410156 C 33.925781 15.78125 34.21875 16.074219 34.589844 16.160156 C 34.964844 16.246094 35.351563 16.109375 35.59375 15.8125 L 39.84375 11.5625 C 40.15625 11.265625 40.246094 10.800781 40.0625 10.410156 C 39.875 10.015625 39.460938 9.789063 39.03125 9.84375 Z M 24.90625 15 C 24.875 15.007813 24.84375 15.019531 24.8125 15.03125 C 24.75 15.035156 24.6875 15.046875 24.625 15.0625 C 24.613281 15.074219 24.605469 15.082031 24.59375 15.09375 C 19.289063 15.320313 15 19.640625 15 25 C 15 30.503906 19.496094 35 25 35 C 30.503906 35 35 30.503906 35 25 C 35 19.660156 30.746094 15.355469 25.46875 15.09375 C 25.433594 15.09375 25.410156 15.0625 25.375 15.0625 C 25.273438 15.023438 25.167969 15.003906 25.0625 15 C 25.042969 15 25.019531 15 25 15 C 24.96875 15 24.9375 15 24.90625 15 Z M 24.9375 17 C 24.957031 17 24.980469 17 25 17 C 25.03125 17 25.0625 17 25.09375 17 C 29.46875 17.050781 33 20.613281 33 25 C 33 29.421875 29.421875 33 25 33 C 20.582031 33 17 29.421875 17 25 C 17 20.601563 20.546875 17.035156 24.9375 17 Z M 4.71875 24 C 4.167969 24.078125 3.78125 24.589844 3.859375 25.140625 C 3.9375 25.691406 4.449219 26.078125 5 26 L 11 26 C 11.359375 26.003906 11.695313 25.816406 11.878906 25.503906 C 12.058594 25.191406 12.058594 24.808594 11.878906 24.496094 C 11.695313 24.183594 11.359375 23.996094 11 24 L 5 24 C 4.96875 24 4.9375 24 4.90625 24 C 4.875 24 4.84375 24 4.8125 24 C 4.78125 24 4.75 24 4.71875 24 Z M 38.71875 24 C 38.167969 24.078125 37.78125 24.589844 37.859375 25.140625 C 37.9375 25.691406 38.449219 26.078125 39 26 L 45 26 C 45.359375 26.003906 45.695313 25.816406 45.878906 25.503906 C 46.058594 25.191406 46.058594 24.808594 45.878906 24.496094 C 45.695313 24.183594 45.359375 23.996094 45 24 L 39 24 C 38.96875 24 38.9375 24 38.90625 24 C 38.875 24 38.84375 24 38.8125 24 C 38.78125 24 38.75 24 38.71875 24 Z M 15 33.875 C 14.773438 33.90625 14.5625 34.019531 14.40625 34.1875 L 10.15625 38.4375 C 9.859375 38.679688 9.722656 39.066406 9.808594 39.441406 C 9.894531 39.8125 10.1875 40.105469 10.558594 40.191406 C 10.933594 40.277344 11.320313 40.140625 11.5625 39.84375 L 15.8125 35.59375 C 16.109375 35.308594 16.199219 34.867188 16.039063 34.488281 C 15.882813 34.109375 15.503906 33.867188 15.09375 33.875 C 15.0625 33.875 15.03125 33.875 15 33.875 Z M 34.6875 33.875 C 34.3125 33.941406 34.011719 34.214844 33.90625 34.578125 C 33.800781 34.945313 33.910156 35.335938 34.1875 35.59375 L 38.4375 39.84375 C 38.679688 40.140625 39.066406 40.277344 39.441406 40.191406 C 39.8125 40.105469 40.105469 39.8125 40.191406 39.441406 C 40.277344 39.066406 40.140625 38.679688 39.84375 38.4375 L 35.59375 34.1875 C 35.40625 33.988281 35.148438 33.878906 34.875 33.875 C 34.84375 33.875 34.8125 33.875 34.78125 33.875 C 34.75 33.875 34.71875 33.875 34.6875 33.875 Z M 24.90625 37.96875 C 24.863281 37.976563 24.820313 37.988281 24.78125 38 C 24.316406 38.105469 23.988281 38.523438 24 39 L 24 45 C 23.996094 45.359375 24.183594 45.695313 24.496094 45.878906 C 24.808594 46.058594 25.191406 46.058594 25.503906 45.878906 C 25.816406 45.695313 26.003906 45.359375 26 45 L 26 39 C 26.011719 38.710938 25.894531 38.433594 25.6875 38.238281 C 25.476563 38.039063 25.191406 37.941406 24.90625 37.96875 Z" />
                    </svg>
                  )
                  : (

                    <svg className="header__favorite-image-moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                      <path fill="currentColor" d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
                    </svg>

                  )}
              </div>
            </div>
            <NavLink
              to="/favorites"
              className={
                ({ isActive }) => classNames('header__favorite',
                  { 'is-active': isActive })
              }
            >
              <div className="header__favorite-image">
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M9.62846 0.631371C10.1584 0.411797 10.7264 0.298782 11.3 0.298782C11.8736 0.298782 12.4416 0.411797 12.9715 0.631371C13.5014 0.850945 13.9829 1.17277 14.3884 1.57847C14.794 1.98394 15.1157 2.46532 15.3353 2.99514C15.5549 3.52506 15.6679 4.09305 15.6679 4.66667C15.6679 5.24028 15.5549 5.80827 15.3353 6.33819C15.1157 6.86806 14.7939 7.34949 14.3883 7.75497C14.3883 7.75501 14.3883 7.75493 14.3883 7.75497L8.49496 13.6483C8.22159 13.9217 7.77838 13.9217 7.50501 13.6483L1.61168 7.75497C0.792607 6.9359 0.332458 5.82501 0.332458 4.66667C0.332458 3.50833 0.792607 2.39743 1.61168 1.57836C2.43075 0.759288 3.54165 0.299139 4.69999 0.299139C5.85833 0.299139 6.96922 0.759288 7.78829 1.57836L7.99999 1.79005L8.21156 1.57847C8.21152 1.57851 8.2116 1.57844 8.21156 1.57847C8.61705 1.17283 9.09859 0.850924 9.62846 0.631371ZM13.3982 2.56819C13.1227 2.29256 12.7956 2.07392 12.4356 1.92474C12.0756 1.77556 11.6897 1.69878 11.3 1.69878C10.9103 1.69878 10.5244 1.77556 10.1644 1.92474C9.80435 2.07392 9.47724 2.29256 9.20174 2.56819L8.49496 3.27497C8.22159 3.54834 7.77838 3.54834 7.50501 3.27497L6.79834 2.56831C6.24182 2.01179 5.48702 1.69914 4.69999 1.69914C3.91295 1.69914 3.15815 2.01179 2.60163 2.56831C2.04511 3.12483 1.73246 3.87963 1.73246 4.66667C1.73246 5.4537 2.04511 6.20851 2.60163 6.76502L7.99999 12.1634L13.3983 6.76502C13.674 6.48953 13.8927 6.16231 14.0419 5.80228C14.1911 5.44226 14.2679 5.05637 14.2679 4.66667C14.2679 4.27696 14.1911 3.89107 14.0419 3.53105C13.8927 3.17103 13.6739 2.84369 13.3982 2.56819Z" />
                </svg>

              </div>

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
              <div className="header__shopping-bag-image">
                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M2.46671 0.933323C2.59261 0.765453 2.7902 0.666656 3.00004 0.666656H11C11.2099 0.666656 11.4075 0.765453 11.5334 0.933323L13.5334 3.59999C13.6199 3.71539 13.6667 3.85574 13.6667 3.99999V13.3333C13.6667 13.8638 13.456 14.3725 13.0809 14.7475C12.7058 15.1226 12.1971 15.3333 11.6667 15.3333H2.33337C1.80294 15.3333 1.29423 15.1226 0.91916 14.7475C0.544088 14.3725 0.333374 13.8638 0.333374 13.3333V3.99999C0.333374 3.85574 0.380159 3.71539 0.466707 3.59999L2.46671 0.933323ZM3.33337 1.99999L1.66671 4.22221V13.3333C1.66671 13.5101 1.73695 13.6797 1.86197 13.8047C1.98699 13.9298 2.15656 14 2.33337 14H11.6667C11.8435 14 12.0131 13.9298 12.1381 13.8047C12.2631 13.6797 12.3334 13.5101 12.3334 13.3333V4.22221L10.6667 1.99999H3.33337Z" />
                  <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M0.333374 4.00001C0.333374 3.63182 0.631851 3.33334 1.00004 3.33334H13C13.3682 3.33334 13.6667 3.63182 13.6667 4.00001C13.6667 4.3682 13.3682 4.66668 13 4.66668H1.00004C0.631851 4.66668 0.333374 4.3682 0.333374 4.00001Z" />
                  <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M4.33329 6C4.70148 6 4.99996 6.29848 4.99996 6.66667C4.99996 7.1971 5.21067 7.70581 5.58575 8.08088C5.96082 8.45595 6.46953 8.66667 6.99996 8.66667C7.53039 8.66667 8.0391 8.45595 8.41417 8.08088C8.78925 7.70581 8.99996 7.1971 8.99996 6.66667C8.99996 6.29848 9.29844 6 9.66663 6C10.0348 6 10.3333 6.29848 10.3333 6.66667C10.3333 7.55072 9.9821 8.39857 9.35698 9.02369C8.73186 9.64881 7.88401 10 6.99996 10C6.1159 10 5.26806 9.64881 4.64294 9.02369C4.01782 8.39857 3.66663 7.55072 3.66663 6.66667C3.66663 6.29848 3.9651 6 4.33329 6Z" />
                </svg>
              </div>

              {cartCount.length > 0 && (
                <div className="header__favorite_icon">
                  {cartCount.length}
                </div>
              )}
            </NavLink>

            {/* login */}
            <div
              className="header__shopping-bag"
              onClick={handleShowModal}

            >
              <div className="header__shopping-bag-image">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="14" height="16" fill="none">
                  <path fill="currentColor" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                </svg>
              </div>
            </div>

            <div className="header__menu-opener">
              {/* иконка menu */}
              {isBurgerOpened
                ? (
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M9.47157 1.4714C9.73192 1.21105 9.73192 0.78894 9.47157 0.52859C9.21122 0.268241 8.78911 0.268241 8.52876 0.52859L5.00016 4.05719L1.47157 0.52859C1.21122 0.268241 0.789108 0.268241 0.528758 0.52859C0.268409 0.78894 0.268409 1.21105 0.528758 1.4714L4.05735 4.99999L0.528758 8.52859C0.268409 8.78894 0.268409 9.21105 0.528758 9.4714C0.789108 9.73175 1.21122 9.73175 1.47157 9.4714L5.00016 5.9428L8.52876 9.4714C8.78911 9.73175 9.21122 9.73175 9.47157 9.4714C9.73192 9.21105 9.73192 8.78894 9.47157 8.52859L5.94297 4.99999L9.47157 1.4714Z" />
                  </svg>

                )
                : (
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M0 1.5C0 1.08579 0.391751 0.75 0.875 0.75H13.125C13.6082 0.75 14 1.08579 14 1.5C14 1.91421 13.6082 2.25 13.125 2.25H0.875C0.391751 2.25 0 1.91421 0 1.5Z" />
                    <path fill="currentColor" d="M0 5C0 4.58579 0.391751 4.25 0.875 4.25H13.125C13.6082 4.25 14 4.58579 14 5C14 5.41421 13.6082 5.75 13.125 5.75H0.875C0.391751 5.75 0 5.41421 0 5Z" />
                    <path fill="currentColor" d="M0.875 7.75C0.391751 7.75 0 8.08579 0 8.5C0 8.91421 0.391751 9.25 0.875 9.25H13.125C13.6082 9.25 14 8.91421 14 8.5C14 8.08579 13.6082 7.75 13.125 7.75H0.875Z" />
                  </svg>

                )}

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
            <div
              className="menu__favorite"
              onClick={() => {
                switchTheme();
                setIsBurgerOpened(false);
              }}
            >
              {theme === 'dark'
                ? (
                  <svg className="header__favorite-image-sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">
                    <path fill="currentColor" d="M 24.90625 3.96875 C 24.863281 3.976563 24.820313 3.988281 24.78125 4 C 24.316406 4.105469 23.988281 4.523438 24 5 L 24 11 C 23.996094 11.359375 24.183594 11.695313 24.496094 11.878906 C 24.808594 12.058594 25.191406 12.058594 25.503906 11.878906 C 25.816406 11.695313 26.003906 11.359375 26 11 L 26 5 C 26.011719 4.710938 25.894531 4.433594 25.6875 4.238281 C 25.476563 4.039063 25.191406 3.941406 24.90625 3.96875 Z M 10.65625 9.84375 C 10.28125 9.910156 9.980469 10.183594 9.875 10.546875 C 9.769531 10.914063 9.878906 11.304688 10.15625 11.5625 L 14.40625 15.8125 C 14.648438 16.109375 15.035156 16.246094 15.410156 16.160156 C 15.78125 16.074219 16.074219 15.78125 16.160156 15.410156 C 16.246094 15.035156 16.109375 14.648438 15.8125 14.40625 L 11.5625 10.15625 C 11.355469 9.933594 11.054688 9.820313 10.75 9.84375 C 10.71875 9.84375 10.6875 9.84375 10.65625 9.84375 Z M 39.03125 9.84375 C 38.804688 9.875 38.59375 9.988281 38.4375 10.15625 L 34.1875 14.40625 C 33.890625 14.648438 33.753906 15.035156 33.839844 15.410156 C 33.925781 15.78125 34.21875 16.074219 34.589844 16.160156 C 34.964844 16.246094 35.351563 16.109375 35.59375 15.8125 L 39.84375 11.5625 C 40.15625 11.265625 40.246094 10.800781 40.0625 10.410156 C 39.875 10.015625 39.460938 9.789063 39.03125 9.84375 Z M 24.90625 15 C 24.875 15.007813 24.84375 15.019531 24.8125 15.03125 C 24.75 15.035156 24.6875 15.046875 24.625 15.0625 C 24.613281 15.074219 24.605469 15.082031 24.59375 15.09375 C 19.289063 15.320313 15 19.640625 15 25 C 15 30.503906 19.496094 35 25 35 C 30.503906 35 35 30.503906 35 25 C 35 19.660156 30.746094 15.355469 25.46875 15.09375 C 25.433594 15.09375 25.410156 15.0625 25.375 15.0625 C 25.273438 15.023438 25.167969 15.003906 25.0625 15 C 25.042969 15 25.019531 15 25 15 C 24.96875 15 24.9375 15 24.90625 15 Z M 24.9375 17 C 24.957031 17 24.980469 17 25 17 C 25.03125 17 25.0625 17 25.09375 17 C 29.46875 17.050781 33 20.613281 33 25 C 33 29.421875 29.421875 33 25 33 C 20.582031 33 17 29.421875 17 25 C 17 20.601563 20.546875 17.035156 24.9375 17 Z M 4.71875 24 C 4.167969 24.078125 3.78125 24.589844 3.859375 25.140625 C 3.9375 25.691406 4.449219 26.078125 5 26 L 11 26 C 11.359375 26.003906 11.695313 25.816406 11.878906 25.503906 C 12.058594 25.191406 12.058594 24.808594 11.878906 24.496094 C 11.695313 24.183594 11.359375 23.996094 11 24 L 5 24 C 4.96875 24 4.9375 24 4.90625 24 C 4.875 24 4.84375 24 4.8125 24 C 4.78125 24 4.75 24 4.71875 24 Z M 38.71875 24 C 38.167969 24.078125 37.78125 24.589844 37.859375 25.140625 C 37.9375 25.691406 38.449219 26.078125 39 26 L 45 26 C 45.359375 26.003906 45.695313 25.816406 45.878906 25.503906 C 46.058594 25.191406 46.058594 24.808594 45.878906 24.496094 C 45.695313 24.183594 45.359375 23.996094 45 24 L 39 24 C 38.96875 24 38.9375 24 38.90625 24 C 38.875 24 38.84375 24 38.8125 24 C 38.78125 24 38.75 24 38.71875 24 Z M 15 33.875 C 14.773438 33.90625 14.5625 34.019531 14.40625 34.1875 L 10.15625 38.4375 C 9.859375 38.679688 9.722656 39.066406 9.808594 39.441406 C 9.894531 39.8125 10.1875 40.105469 10.558594 40.191406 C 10.933594 40.277344 11.320313 40.140625 11.5625 39.84375 L 15.8125 35.59375 C 16.109375 35.308594 16.199219 34.867188 16.039063 34.488281 C 15.882813 34.109375 15.503906 33.867188 15.09375 33.875 C 15.0625 33.875 15.03125 33.875 15 33.875 Z M 34.6875 33.875 C 34.3125 33.941406 34.011719 34.214844 33.90625 34.578125 C 33.800781 34.945313 33.910156 35.335938 34.1875 35.59375 L 38.4375 39.84375 C 38.679688 40.140625 39.066406 40.277344 39.441406 40.191406 C 39.8125 40.105469 40.105469 39.8125 40.191406 39.441406 C 40.277344 39.066406 40.140625 38.679688 39.84375 38.4375 L 35.59375 34.1875 C 35.40625 33.988281 35.148438 33.878906 34.875 33.875 C 34.84375 33.875 34.8125 33.875 34.78125 33.875 C 34.75 33.875 34.71875 33.875 34.6875 33.875 Z M 24.90625 37.96875 C 24.863281 37.976563 24.820313 37.988281 24.78125 38 C 24.316406 38.105469 23.988281 38.523438 24 39 L 24 45 C 23.996094 45.359375 24.183594 45.695313 24.496094 45.878906 C 24.808594 46.058594 25.191406 46.058594 25.503906 45.878906 C 25.816406 45.695313 26.003906 45.359375 26 45 L 26 39 C 26.011719 38.710938 25.894531 38.433594 25.6875 38.238281 C 25.476563 38.039063 25.191406 37.941406 24.90625 37.96875 Z" />
                  </svg>
                )
                : (

                  <svg className="header__favorite-image-moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path fill="currentColor" d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
                  </svg>

                )}
            </div>
            <NavLink
              to="/favorites"
              className={
                ({ isActive }) => classNames('menu__favorite',
                  { 'is-active': isActive })
              }
              onClick={() => setIsBurgerOpened(false)}
            >
              <div className="menu__favorite-image">
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M9.62846 0.631371C10.1584 0.411797 10.7264 0.298782 11.3 0.298782C11.8736 0.298782 12.4416 0.411797 12.9715 0.631371C13.5014 0.850945 13.9829 1.17277 14.3884 1.57847C14.794 1.98394 15.1157 2.46532 15.3353 2.99514C15.5549 3.52506 15.6679 4.09305 15.6679 4.66667C15.6679 5.24028 15.5549 5.80827 15.3353 6.33819C15.1157 6.86806 14.7939 7.34949 14.3883 7.75497C14.3883 7.75501 14.3883 7.75493 14.3883 7.75497L8.49496 13.6483C8.22159 13.9217 7.77838 13.9217 7.50501 13.6483L1.61168 7.75497C0.792607 6.9359 0.332458 5.82501 0.332458 4.66667C0.332458 3.50833 0.792607 2.39743 1.61168 1.57836C2.43075 0.759288 3.54165 0.299139 4.69999 0.299139C5.85833 0.299139 6.96922 0.759288 7.78829 1.57836L7.99999 1.79005L8.21156 1.57847C8.21152 1.57851 8.2116 1.57844 8.21156 1.57847C8.61705 1.17283 9.09859 0.850924 9.62846 0.631371ZM13.3982 2.56819C13.1227 2.29256 12.7956 2.07392 12.4356 1.92474C12.0756 1.77556 11.6897 1.69878 11.3 1.69878C10.9103 1.69878 10.5244 1.77556 10.1644 1.92474C9.80435 2.07392 9.47724 2.29256 9.20174 2.56819L8.49496 3.27497C8.22159 3.54834 7.77838 3.54834 7.50501 3.27497L6.79834 2.56831C6.24182 2.01179 5.48702 1.69914 4.69999 1.69914C3.91295 1.69914 3.15815 2.01179 2.60163 2.56831C2.04511 3.12483 1.73246 3.87963 1.73246 4.66667C1.73246 5.4537 2.04511 6.20851 2.60163 6.76502L7.99999 12.1634L13.3983 6.76502C13.674 6.48953 13.8927 6.16231 14.0419 5.80228C14.1911 5.44226 14.2679 5.05637 14.2679 4.66667C14.2679 4.27696 14.1911 3.89107 14.0419 3.53105C13.8927 3.17103 13.6739 2.84369 13.3982 2.56819Z" />
                </svg>

              </div>

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
              <div className="menu__shopping-bag-image">
                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M2.46671 0.933323C2.59261 0.765453 2.7902 0.666656 3.00004 0.666656H11C11.2099 0.666656 11.4075 0.765453 11.5334 0.933323L13.5334 3.59999C13.6199 3.71539 13.6667 3.85574 13.6667 3.99999V13.3333C13.6667 13.8638 13.456 14.3725 13.0809 14.7475C12.7058 15.1226 12.1971 15.3333 11.6667 15.3333H2.33337C1.80294 15.3333 1.29423 15.1226 0.91916 14.7475C0.544088 14.3725 0.333374 13.8638 0.333374 13.3333V3.99999C0.333374 3.85574 0.380159 3.71539 0.466707 3.59999L2.46671 0.933323ZM3.33337 1.99999L1.66671 4.22221V13.3333C1.66671 13.5101 1.73695 13.6797 1.86197 13.8047C1.98699 13.9298 2.15656 14 2.33337 14H11.6667C11.8435 14 12.0131 13.9298 12.1381 13.8047C12.2631 13.6797 12.3334 13.5101 12.3334 13.3333V4.22221L10.6667 1.99999H3.33337Z" />
                  <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M0.333374 4.00001C0.333374 3.63182 0.631851 3.33334 1.00004 3.33334H13C13.3682 3.33334 13.6667 3.63182 13.6667 4.00001C13.6667 4.3682 13.3682 4.66668 13 4.66668H1.00004C0.631851 4.66668 0.333374 4.3682 0.333374 4.00001Z" />
                  <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M4.33329 6C4.70148 6 4.99996 6.29848 4.99996 6.66667C4.99996 7.1971 5.21067 7.70581 5.58575 8.08088C5.96082 8.45595 6.46953 8.66667 6.99996 8.66667C7.53039 8.66667 8.0391 8.45595 8.41417 8.08088C8.78925 7.70581 8.99996 7.1971 8.99996 6.66667C8.99996 6.29848 9.29844 6 9.66663 6C10.0348 6 10.3333 6.29848 10.3333 6.66667C10.3333 7.55072 9.9821 8.39857 9.35698 9.02369C8.73186 9.64881 7.88401 10 6.99996 10C6.1159 10 5.26806 9.64881 4.64294 9.02369C4.01782 8.39857 3.66663 7.55072 3.66663 6.66667C3.66663 6.29848 3.9651 6 4.33329 6Z" />
                </svg>
              </div>
              {cartCount.length > 0 && (
                <div className="menu__favorite_icon">
                  {cartCount.length}
                </div>
              )}
            </NavLink>

            <div
              className="menu__shopping-bag"
              onClick={() => setIsBurgerOpened(false)}
            >
              <div className="menu__shopping-bag-image">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="14" height="16" fill="none">
                  <path fill="currentColor" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                </svg>
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};
