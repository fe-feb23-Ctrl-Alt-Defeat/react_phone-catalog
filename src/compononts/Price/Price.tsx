import React from 'react';
import './price.scss';

interface Props {
  price: number;
  classes: string;
}

export const Price: React.FC<Props> = ({ price, classes }) => {
  return (
    <div className={classes}>{`$${price}`}</div>
  );
};
