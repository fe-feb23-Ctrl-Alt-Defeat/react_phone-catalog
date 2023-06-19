import React from 'react';
import cn from 'classnames';
import { Button } from '../Button/Button';
import './capacity.scss';

interface Props {
  capacities: string[];
  itemId: string | '';
  onChange: (capacity: string) => void;
}

export const Capacity: React.FC<Props> = ({
  capacities,
  itemId,
  onChange,
}) => {
  return (
    <div className="capacity">
      <p className="capacity__text">Select capacity</p>

      <div className="capacity__items">
        {capacities.map(capacity => {
          const lowCapacity = capacity.toLowerCase();

          return (
            <Button
              key={capacity}
              text={capacity}
              classes={cn(
                'button-capacity',
                { 'button-capacity--selected': itemId?.includes(lowCapacity) },
              )}
              onClick={() => onChange(capacity)}
            />
          );
        })}
      </div>
    </div>
  );
};
