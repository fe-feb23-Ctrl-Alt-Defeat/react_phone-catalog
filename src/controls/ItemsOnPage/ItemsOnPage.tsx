import React from 'react';
import './itemsOnPage.scss';

interface Props {
  itemsOnPage: number;
}

export const ItemsOnPage: React.FC<Props> = ({ itemsOnPage }) => {
  return (
    <p className="items-on-page">{`${itemsOnPage} models`}</p>
  );
};
