import React from 'react';
import './itemsOnPage.scss';

interface Props {
  itemsOnPage: number;
  text: string
}

export const ItemsOnPage: React.FC<Props> = ({ itemsOnPage, text }) => {
  return (
    <p className="items-on-page">{`${itemsOnPage} ${text}`}</p>
  );
};
