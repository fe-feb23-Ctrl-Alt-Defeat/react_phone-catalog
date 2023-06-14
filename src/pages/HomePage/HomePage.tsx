/* eslint-disable max-len */
import React from 'react';
import './homePage.scss';
import { SalesSlider } from '../../compononts/SalesSlider/SalesSlider';
import { BrendsModels } from '../../compononts/BrendModels/BrendModels';

export const HomePage = () => {
  return (
    <div className="homePage">
      <SalesSlider />
      <BrendsModels />
      {/* <Card /> */}
    </div>
  );
};
