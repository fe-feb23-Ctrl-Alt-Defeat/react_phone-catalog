/* eslint-disable no-console */
import React from 'react';
import './gallery.scss';
import { IMAGE_BASE_URL } from '../../utils/globalVariables';

interface Props {
  images: string[];
}

export const Gallery: React.FC<Props> = ({ images }) => {
  return (
    <div className="gallery">
      <div className="gallery__sub-photos">
        {images.map((image) => (
          <div key={image} className="gallery__sub-photos-photo">
            <img
              src={`${IMAGE_BASE_URL}${image}`}
              alt="Phone iamge"
              className="gallery__sub-photos-photo-image"
            />
          </div>
        ))}
      </div>

      <div className="gallery__main-photo">
        <img
          src={`${IMAGE_BASE_URL}${images[0]}`}
          alt="Phone iamge"
          className="gallery__main-photo-image"
        />
      </div>
    </div>
  );
};
