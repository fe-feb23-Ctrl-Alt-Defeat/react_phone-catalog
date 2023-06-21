/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
import React, { useState, useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { SignIN } from './SignIN/SignIN';
import { SignUp } from './SignUp/SignUp';
import './authorization.scss';
import { FavoritesAndCartCountContext } from '../FavoritesCartContext/FavoritesCartContext';

export const Authorization = () => {
  const [activeTab, setActiveTab] = useState('signin');
  const { setIsModalOpen } = useContext(FavoritesAndCartCountContext);

  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest('.authorization__box')) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        className="authorization__box"
      >
        <div
          className="authorization__box-cross"
        >
          <svg
            className="menu-cross-image"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setIsModalOpen(false)}
          >
            <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M9.47144 1.4714C9.73179 1.21105 9.73179 0.78894 9.47144 0.52859C9.21109 0.268241 8.78899 0.268241 8.52864 0.52859L5.00004 4.05719L1.47145 0.52859C1.2111 0.268241 0.788986 0.268241 0.528636 0.52859C0.268287 0.78894 0.268287 1.21105 0.528636 1.4714L4.05723 4.99999L0.528636 8.52859C0.268287 8.78894 0.268287 9.21105 0.528636 9.4714C0.788986 9.73175 1.2111 9.73175 1.47145 9.4714L5.00004 5.9428L8.52864 9.4714C8.78899 9.73175 9.21109 9.73175 9.47144 9.4714C9.73179 9.21105 9.73179 8.78894 9.47144 8.52859L5.94285 4.99999L9.47144 1.4714Z" />
          </svg>
        </div>

        <div className="authorization__container">
          <div className="form__container">
            <div className="form__content">
              <NavLink
                to="#"
                className={`form__content_item ${activeTab === 'signin' ? 'is-active' : ''}`}
                onClick={() => handleTabClick('signin')}
              >
                SIGN IN
              </NavLink>

              <NavLink
                to="#"
                className={`form__content_item ${activeTab === 'signup' ? 'is-active' : ''}`}
                onClick={() => handleTabClick('signup')}
              >
                SIGN UP
              </NavLink>
            </div>
          </div>
          {activeTab === 'signin' ? <SignIN /> : <SignUp />}
        </div>
      </div>
    </>
  );
};
