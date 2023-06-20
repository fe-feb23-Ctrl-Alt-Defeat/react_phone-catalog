import React, { Fragment } from 'react';
import './specificationItem.scss';

interface Props {
  infoField: string;
  infoValue: string | string[];
}

export const SpecificationItem: React.FC<Props> = ({
  infoField,
  infoValue,
}) => {
  return (
    <div className="detail">
      <p className="detail__field">{infoField}</p>
      {infoField !== 'Cell'
        ? <p className="detail__info">{infoValue}</p>
        : (
          <div className="detail__cell">
            {Array.isArray(infoValue) && infoValue.map((
              cell,
              index: number,
              array: string[],
            ) => (
              <Fragment key={cell}>
                <span className="detail__info">
                  {
                    index !== array.length - 1
                      ? `${cell}, `
                      : `${cell}`
                  }
                </span>
              </Fragment>
            ))}
          </div>
        )}
    </div>
  );
};
