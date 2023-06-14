/* eslint-disable max-len */
import React from 'react';
import './homePage.scss';
import { SalesSlider } from '../../compononts/SalesSlider/SalesSlider';
import { NewModelsCarousel } from '../../compononts/NewModelsCarousel/NewModelsCarousel';

export const HomePage = () => {
  return (
    <div className="homePage">
      <SalesSlider />
      <NewModelsCarousel />
      {/* <Card /> */}
    </div>
  );
};
