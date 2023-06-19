/* eslint-disable react/require-default-props */
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './pageRoute.scss';
import { ArrowForward } from '../ArrowForward/ArrowForward';
import { HomeIcon } from '../HomeIcon/HomeIcon';

interface Props {
  text: string
  phoneName?: string | undefined;
  to: string;
}

export const PageRoute: React.FC<Props> = ({ phoneName, text, to }) => {
  const { itemId } = useParams();

  return (
    <div className="routing">
      <HomeIcon />
      <ArrowForward />

      <div className="routing__selected-page">
        <Link
          to={to}
          className="routing__selected-page-paragraph"
        >
          {text}
        </Link>
      </div>

      {itemId && (
        <>
          <ArrowForward />

          <div className="routing__selected-page">
            <p className="routing__selected-page-paragraph">{phoneName}</p>
          </div>
        </>
      )}
    </div>
  );
};
