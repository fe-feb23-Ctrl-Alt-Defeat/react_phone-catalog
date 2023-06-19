import React, { Fragment } from 'react';
import { AvailableColorItem } from '../../controls/AvailableColorItem';
import './availableColors.scss';

interface Props {
  itemId: string;
  colors: string[];
  onChange: (color:string) => void;
}

export const AvailableColors: React.FC<Props> = ({
  itemId,
  colors,
  onChange,
}) => {
  return (
    <div className="colors">
      {colors.map(color => (
        <Fragment key={color}>
          <AvailableColorItem
            itemId={itemId || ''}
            color={color}
            onChange={onChange}
          />
        </Fragment>
      ))}
    </div>
  );
};
