import React from 'react';
import './loader.scss';

export const Loader = () => {
  return (
    <div className="loader_container">
      <div className="loader">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
};
