/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-console */
import React, { useState, useCallback } from 'react';
import './gallery.scss';
import cn from 'classnames';
import { IMAGE_BASE_URL } from '../../utils/globalVariables';

interface Props {
  images: string[];
}

export const Gallery: React.FC<Props> = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  const handleSelectImage = useCallback((image: string) => {
    setMainImage(image);
  }, []);

  return (
    <div className="gallery">
      <div className="gallery__sub-photos">
        {images.map((image) => (
          <div
            key={image}
            className={cn('gallery__sub-photos-photo', {
              'gallery__sub-photos-photo--active': image === mainImage,
            })}
            onClick={() => handleSelectImage(image)}
          >
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
          src={`${IMAGE_BASE_URL}${mainImage}`}
          alt="Phone iamge"
          className="gallery__main-photo-image"
        />
      </div>
    </div>
  );
};
