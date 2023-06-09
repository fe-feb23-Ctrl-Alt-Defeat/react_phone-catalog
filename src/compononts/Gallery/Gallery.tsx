/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useCallback, useEffect } from 'react';
import './gallery.scss';
import cn from 'classnames';
import { BASE_URL } from '../../utils/globalVariables';

interface Props {
  images: string[];
}

export const Gallery: React.FC<Props> = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  const handleSelectImage = useCallback((image: string) => {
    setMainImage(image);
  }, []);

  useEffect(() => {
    setMainImage(images[0]);
  }, [images]);

  return (
    <div className="gallery">
      <div className="gallery__main-photo">
        <img
          src={`${BASE_URL}${mainImage}`}
          alt="Phone iamge"
          className="gallery__main-photo-image"
        />
      </div>

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
              src={`${BASE_URL}${image}`}
              alt="Phone iamge"
              className="gallery__sub-photos-photo-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
