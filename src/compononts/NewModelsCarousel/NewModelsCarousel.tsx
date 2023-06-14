import React from 'react';
import './newModelsCarousel.scss';
import { NewModelsSlider } from './NewModelsSlider/NewModelsSlider';

export const NewModelsCarousel = () => {
  return (
    <>
      <div className="container newModelsCarousel">
        <NewModelsSlider />
      </div>
    </>
  );
};
