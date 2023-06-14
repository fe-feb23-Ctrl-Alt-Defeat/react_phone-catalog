import React from 'react';
import './newModelsCarousel.scss';
import { BrendsModels } from '../BrendModels/BrendModels';

export const NewModelsCarousel = () => {
  return (
    <>
      <div className="container newModelsCarousel">
        <BrendsModels />
      </div>
    </>
  );
};
