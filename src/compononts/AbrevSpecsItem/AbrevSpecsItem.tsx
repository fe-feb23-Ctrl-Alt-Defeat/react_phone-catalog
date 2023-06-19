import React from 'react';
import './abrevSpecsItem.scss';

interface Props {
  field: string;
  value: string;
}

export const AbrevSpecsItem: React.FC<Props> = ({ field, value }) => {
  return (
    <div className="abrevspecs">
      <p className="abrevspecs__field">{field}</p>

      <p className="abrevspecs__info">{value}</p>
    </div>
  );
};
