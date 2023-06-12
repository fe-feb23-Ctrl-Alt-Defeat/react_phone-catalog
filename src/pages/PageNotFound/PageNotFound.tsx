import React from 'react';
import './pageNotFound.scss';

export const PageNotFound = () => {
  return (
    <div className="error">
      <div className="error__container">
        <div className="error__code">404</div>
        <div className="error__text">Page Not Found</div>
      </div>
    </div>
  );
};
