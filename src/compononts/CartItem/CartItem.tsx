import React from 'react';
import { IMAGE_BASE_URL } from '../../utils/globalVariables';
import './cartItem.scss';
import removeImage from '../../images/icon_menu_cross.svg';
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
          <img
            className="cartItem__remove"
            src={removeImage}
            alt="remove-button"
          />
        </button>
        <div className="cartItem__image-box">
          <img
            className="cartItem__image"
            src={`${IMAGE_BASE_URL}${data.image}`}
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
