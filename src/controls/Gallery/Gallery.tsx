/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './gallery.scss';
import { Phone } from '../../types/CardDescription';

interface Props {
  phone: Phone | null;
}

export const Gallery: React.FC<Props> = ({ phone }) => {
  return (
    <div className="gallery">
      <div className="gallery__sub-photos">
        {phone?.images.map((image) => (
          <div className="gallery__sub-photos-photo" key={image}>
            <img src={image} alt="Phone iamge" />
          </div>
        ))}
      </div>

      <div className="gallery__main-photo">

      </div>
    </div>
  );
};
