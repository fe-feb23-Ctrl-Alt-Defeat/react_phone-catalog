/* eslint-disable max-len */
import React from 'react';
import { BASE_URL } from '../../utils/globalVariables';
import './cartItem.scss';
// import removeImage from '../../images/icon_menu_cross.svg';
import { CardData } from '../../types/CardData';

type Props = {
  data: CardData;
  onDelete: (id: number) => void;
  onNumberDecrease: (id: number) => void;
  onNumberIncrease: (id: number) => void;
  currentNumber: number;
};

export const CartItem: React.FC<Props> = ({
  data,
  onDelete,
  onNumberDecrease,
  onNumberIncrease,
  currentNumber = 0,
}) => {
  return (
    <div className="cartItem">
      <div className="cartItem__left">
        <button
          className="cartItem__Btn"
          type="button"
          onClick={() => onDelete(data.id)}
        >
          <svg className="cartItem__remove" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M9.47157 1.4714C9.73192 1.21105 9.73192 0.78894 9.47157 0.52859C9.21122 0.268241 8.78911 0.268241 8.52876 0.52859L5.00016 4.05719L1.47157 0.52859C1.21122 0.268241 0.789108 0.268241 0.528758 0.52859C0.268409 0.78894 0.268409 1.21105 0.528758 1.4714L4.05735 4.99999L0.528758 8.52859C0.268409 8.78894 0.268409 9.21105 0.528758 9.4714C0.789108 9.73175 1.21122 9.73175 1.47157 9.4714L5.00016 5.9428L8.52876 9.4714C8.78911 9.73175 9.21122 9.73175 9.47157 9.4714C9.73192 9.21105 9.73192 8.78894 9.47157 8.52859L5.94297 4.99999L9.47157 1.4714Z" />
          </svg>
        </button>
        <div className="cartItem__image-box">
          <img
            className="cartItem__image"
            src={`${BASE_URL}${data.image}`}
            alt={data.itemId}
          />
        </div>
        <div className="cartItem__title">
          {data.name}
        </div>
      </div>

      <div className="cartItem__right">
        <div className="cartItem__numRedactor">
          <button
            className="cartItem__numEditor"
            type="button"
            onClick={() => onNumberDecrease(data.id)}
          >
            -
          </button>
          <div className="cartItem__number">
            {currentNumber}
          </div>
          <button
            className="cartItem__numEditor"
            type="button"
            onClick={() => onNumberIncrease(data.id)}
          >
            +
          </button>
        </div>
        <div className="cartItem__price">
          {`$${data.price}`}
        </div>
      </div>
    </div>
  );
};
