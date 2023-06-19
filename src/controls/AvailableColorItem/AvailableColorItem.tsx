/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable function-paren-newline */
import React from 'react';
import cn from 'classnames';
import { Colors } from '../../types/PhoneColors';
import './availableColorItem.scss';

interface Props {
  itemId: string;
  color: string;
  onChange: (color: string) => void;
}

export const AvailableColorItem: React.FC<Props> = ({
  itemId,
  color,
  onChange,
}) => {
  const phoneColors: Colors = {
    black: '#000000',
    gold: '#EACFB8',
    silver: '#DEDED7',
    red: '#AE2A36',
    coral: '#E76752',
    yellow: '#F2D365',
    green: '#C8E7D8',
    midnightgreen: '#676E66',
    spacegray: '#62605F',
    white: '#FBF7F2',
    purple: '#D6D3DD',
    rosegold: '#EECFC8',
  };

  return (
    <div
      className={cn(
        'colors__item',
        {
          'colors__item--selected': itemId?.includes(color.toLowerCase()),
        })}
      onClick={() => onChange(color)}
    >
      <div
        className="colors__item-color"
        style={{ backgroundColor: phoneColors[color] }}
      />
    </div>
  );
};
