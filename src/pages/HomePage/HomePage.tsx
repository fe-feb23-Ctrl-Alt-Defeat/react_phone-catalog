import React from 'react';
import './homePage.scss';
import { SalesSlider } from '../../compononts/SalesSlider/salesSlider';

export const HomePage = () => {
  return (
    <div className="homePage">
      <SalesSlider />
      {/* <Card /> */}
    </div>
  );
};
