import React from 'react';
import { Link } from 'react-router-dom';
import IconHome from '../../images/icon_home.svg';
import './homeIcon.scss';

export const HomeIcon = () => {
  return (
    <div className="icon-home">
      <Link to="/home" className="icon-home__link">
        <img
          src={IconHome}
          alt="Home icon"
          className="icon-home-link__image"
        />
      </Link>
    </div>
  );
};
