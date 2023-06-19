/* eslint-disable max-len */
import React from 'react';
import './homePage.scss';

import { SalesSlider } from '../../compononts/SalesSlider/SalesSlider';
import { BrendsModels } from '../../compononts/BrendModels/BrendModels';
import { Categories } from '../../compononts/Categories/Categories';
import { HotPrices } from '../../compononts/HotPrices/HotPrices';
import { Authorization } from '../../compononts/Authorization/Authorization';

export const HomePage = () => {
  return (
    <div className="homePage">
      <Authorization />
      <SalesSlider />
      <BrendsModels />
      <Categories />
      <HotPrices />
    </div>
  );
};
