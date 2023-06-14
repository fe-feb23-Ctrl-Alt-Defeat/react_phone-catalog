import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import './categoryCard.scss';

interface Props {
  path: string;
  img: string;
  title: string;
  quantity: number;
}

export const CategoryCard: FC<Props> = ({
  path,
  img,
  title,
  quantity,
}) => {
  return (
    <>
      <div className="category__item">
        <div className="category__item_img">
          <Link to={path}>
            <img
              src={img}
              alt="phone category"
              className="category__item_img-image"
            />
          </Link>
        </div>
        <Link to={path} className="category__item_descr">
          {title}
        </Link>
        <div className="category__item_qty">{`${quantity} models`}</div>
      </div>
    </>
  );
};
