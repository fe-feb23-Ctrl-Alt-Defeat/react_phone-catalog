/* eslint-disable max-len */
import React from 'react';
import './homePage.scss';

import { SalesSlider } from '../../compononts/SalesSlider/SalesSlider';
import { BrendsModels } from '../../compononts/BrendModels/BrendModels';
import { Categories } from '../../compononts/Categories/Categories';
import { HotPrices } from '../../compononts/HotPrices/HotPrices';

export const HomePage = () => {
  return (
    <div className="homePage">
      <SalesSlider />
      <BrendsModels />
      <Categories />
      <HotPrices />
    </div>
  );
};
