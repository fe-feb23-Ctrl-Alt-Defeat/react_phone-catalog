import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import cn from 'classnames';
import './dropDown.scss';
import IconDown from '../../images/icon_arrow_down.svg';
import { DropMenu } from './DropMenu';

interface Props {
  options: {
    title: string;
    selects: (string | number)[];
  };
}

export const DropDown: React.FC<Props> = ({ options }) => {
  const { title, selects } = options;
  const menuRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(selects[0]);

  const handleMenuToggle = useCallback(() => {
    setIsOpen((prevVal) => !prevVal);
  }, []);

  const handleOptionClick = useCallback((select: string) => {
    setSelected(select);
    handleMenuToggle();
  }, []);

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
            {selected}
            <div className="sort__form-select-button">
              <img src={IconDown} alt="Icon down" />
            </div>
          </button>
          {isOpen && (
            <DropMenu
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
