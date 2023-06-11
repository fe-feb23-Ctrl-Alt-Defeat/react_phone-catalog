import React from 'react';
import cn from 'classnames';
import './sortInput.scss';

interface Props {
  options: {
    title: string;
    selects: (string | number)[];
  };
}

export const SortInput: React.FC<Props> = ({ options }) => {
  const { title, selects } = options;

  return (
    <div className="sort">
      <p className="sort__title">{title}</p>

      <form action="" className="sort__form">
        <select
          name="sortBy"
          className={cn(
            'sort__form-select',
            { 'sort__form-select--sort-by': title === 'Sort By' },
            { 'sort__form-select--items-on-page': title === 'Items on page' },
          )}
        >
          <option
            value=""
            selected
            disabled
          >
          </option>

          {selects.map((select) => (
            <option
              key={select}
              value={select}
              className="sort__form-select-option"
            >
              {select}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};
