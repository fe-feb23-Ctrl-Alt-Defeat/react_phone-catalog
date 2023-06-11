/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import cn from 'classnames';
import './dropDown.scss';
import IconDown from '../../images/icon_arrow_down.svg';

interface Props {
  options: {
    title: string;
    selects: (string | number)[];
  };
}

export const DropDown: React.FC<Props> = ({ options }) => {
  const { title, selects } = options;

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(selects[0]);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (select: string) => {
    setSelected(select);
    setIsOpen(!isOpen);
  };

  return (
    <div className="sort">
      <p className="sort__title">{title}</p>

      <form action="" className="sort__form">
        <button
          type="button"
          className={cn(
            'sort__form-select',
            { 'sort__form-select--sort-by ': title === 'Sort By' },
            { 'sort__form-select--items-on-page': title === 'Items on page' },
          )}
          onClick={handleMenuToggle}
        >
          {selected}
          <div className="sort__form-select-button">
            <img src={IconDown} alt="Icon down" />
          </div>
        </button>
        {isOpen && (
          <ul
            className={cn(
              'sort__form-options',
              { 'sort__form-options--sort-by': title === 'Sort By' },
              {
                'sort__form-options--items-on-page':
                  title === 'Items on page',
              },
            )}
            onBlur={handleMenuToggle}
          >
            {selects.map((select) => (
              <li
                key={select}
                value={select}
                onClick={() => handleOptionClick(select.toString())}
                className="sort__form-options-option"
              >
                {select}
              </li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
};
