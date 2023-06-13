/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useCallback,
  useState,
} from 'react';
import { useSearchParams } from 'react-router-dom';
import cn from 'classnames';
import './dropDown.scss';
import IconDown from '../../images/icon_arrow_down.svg';
import IconUp from '../../images/icon_arrow_up.svg';
import { DropMenu } from './DropMenu';

interface Props {
  options: {
    title: string;
    selects: (string | number)[];
  };
  setOnSelect: Dispatch<SetStateAction<string>>
  selectedItem: string | number
}

export const DropDown: React.FC<Props> = (
  { options, setOnSelect, selectedItem },
) => {
  const { title, selects } = options;

  const menuRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearchParams] = useSearchParams();

  const handleMenuToggle = useCallback(() => {
    setIsOpen((prevVal) => !prevVal);
  }, []);

  const handleOptionClick = (select: string) => {
    if (!Number.isNaN(+select)) {
      setSearchParams({ limit: String(select) });
    }

    setOnSelect(select);
    handleMenuToggle();
  };

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, [isOpen]);

  return (
    <div className="sort">
      <p className="sort__title">{title}</p>

      <form action="" className="sort__form">
        <div className="sort__form-container" ref={menuRef}>
          <button
            type="button"
            className={cn(
              'sort__form-select',
              { 'sort__form-select--sort-by ': title === 'Sort By' },
              { 'sort__form-select--items-on-page': title === 'Items on page' },
            )}
            onClick={handleMenuToggle}
          >
            {selectedItem}
            <div className="sort__form-select-button">
              <img src={isOpen ? IconUp : IconDown} alt="Icon down" />
            </div>

          </button>
          {isOpen && (
            <DropMenu
              key={title}
              onOpen={handleOptionClick}
              title={title}
              selects={selects}
            />
          )}
        </div>
      </form>
    </div>
  );
};
