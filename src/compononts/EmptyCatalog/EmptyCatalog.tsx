import React from 'react';
import './emptyCatalog.scss';

export const EmptyCatalog = () => {
  return (
    <div className="message">
      <div className="message__container">
        <div className="message__header">Sorry</div>
        <div className="message__text">There are no products yet </div>
      </div>
    </div>
  );
};
