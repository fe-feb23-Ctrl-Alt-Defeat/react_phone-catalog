import React from 'react';
import './pageNotFound.scss';
import { Link } from 'react-router-dom';

export const PageNotFound = () => {
  return (
    <div className="error">
      <div className="error__container">
        <div className="error__code">404</div>
        <div className="error__text">Page Not Found</div>

        <button
          type="button"
          className="card__buy_button"
        >
          <Link to="/" className="card__buy_button_link">
            home
          </Link>
        </button>
      </div>
    </div>
  );
};
