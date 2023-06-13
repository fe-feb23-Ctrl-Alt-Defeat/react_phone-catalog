/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import cn from 'classnames';
import React, { useEffect, useState } from 'react';

type Props = {
  onOpen: (select: string) => void;
  title: string;
  selects: (string | number)[];
};

export const DropMenu: React.FC<Props> = ({
  onOpen,
  title,
  selects,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);

  return (
    <ul
      className={cn(
        'sort__form-options',
        {
          'sort__form-options--sort-by': title === 'Sort By',
          'sort__form-options--visible': isVisible,
        },
        {
          'sort__form-options--items-on-page':
            title === 'Items on page',
        },
      )}
    >
      {selects.map((select) => (
        <li
          key={select}
          value={select}
          onClick={() => onOpen(select.toString())}
          className="sort__form-options-option"
        >
          {select}
        </li>
      ))}
    </ul>
  );
};
