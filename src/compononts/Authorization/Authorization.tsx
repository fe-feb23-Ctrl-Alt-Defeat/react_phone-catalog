import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SignIN } from './SignIN/SignIN';
import { SignUp } from './SignUp/SignUp';
import './authorization.scss';

export const Authorization = () => {
  const [activeTab, setActiveTab] = useState('signin');

  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <>
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
    </>
  );
};
