/* eslint-disable react/require-default-props */
import React from 'react';
import { useParams } from 'react-router-dom';
import './pageRoute.scss';
import { ArrowForward } from '../ArrowForward/ArrowForward';
import { HomeIcon } from '../HomeIcon/HomeIcon';

interface Props {
  text: string
  phoneName?: string | undefined;
}

export const PageRoute: React.FC<Props> = ({ phoneName, text }) => {
  const { itemId } = useParams();

  return (
    <div className="routing">
      <HomeIcon />
      <ArrowForward />

      <div className="routing__selected-page">
        <p className="routing__selected-page-paragraph">{text}</p>
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
