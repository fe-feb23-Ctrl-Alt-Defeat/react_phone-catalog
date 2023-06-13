import React, { useEffect, useState } from 'react';
import { MoveBack } from '../../controls/MoveBack/MoveBack';
import './cart.scss';
import { PageTitle } from '../../controls/PageTitle/PageTitle';
import { CardData } from '../../types/CardData';
import { getProductByIds } from '../../api/products';
import { CartItem } from '../../compononts/CartItem/CartItem';
import { Button } from '../../controls/Button/Button';
import { LocalStCart } from '../../types/LocalStCart';

export const Cart: React.FC = () => {
  const localStorageCart = localStorage.getItem('cart');
  const [currentCart, setCurrentCart] = useState<LocalStCart>(
    localStorageCart
      ? JSON.parse(localStorageCart)
      : [[0, 0]],
  );
  const cartItemsIds = currentCart.map(currProduct => currProduct[0]);
  const [cartItems, setCartItems] = useState<CardData[]>([]);
  const totalPrice = cartItems.reduce((acc, val) => {
    const itemVal = currentCart.find(value => value[0] === val.id) || [0, 0];

    return acc + (val.price * itemVal[1]);
  }, 0);
  const totalItems = currentCart.reduce((acc, val) => acc + val[1], 0);
  const [isEmpty, setIsEmpty] = useState(false);
  const [haveBought, setIsHaveBought] = useState(false);

  const loadData = async () => {
    if (cartItemsIds.length === 0) {
      setCartItems([]);
      setIsEmpty(true);

      return;
    }

    const itemsFromServer = await getProductByIds(cartItemsIds);

    setCartItems(itemsFromServer);
  };

  const handleDelete = (id: number) => {
    setCartItems(currItems => {
      const copy = currItems.filter(currItem => currItem.id !== id);

      const newLocalStorage: LocalStCart = currentCart
        .filter(val => val[0] !== id);

      localStorage.setItem('cart', JSON.stringify(newLocalStorage));

      setCartItems(copy);

      if (copy.length === 0) {
        setIsEmpty(true);
      }

      setCurrentCart(newLocalStorage);

      return copy;
    });
  };

  const handleNumberDecrease = (id: number) => {
    setCurrentCart(prevCart => {
      const index = prevCart.findIndex(cartValue => cartValue[0] === id);
      const copy: LocalStCart = [...prevCart];

      copy[index][1] -= 1;

      if (copy[index][1] === 0) {
        copy.splice(index, 1);

        setCartItems(prevCartItems => prevCartItems
          .filter(item => item.id !== id));
      }

      if (copy.length === 0) {
        setIsEmpty(true);
      }

      localStorage.setItem('cart', JSON.stringify(copy));

      return copy;
    });
  };

  const handleNumberIncrease = (id: number) => {
    setCurrentCart(prevCart => {
      const index = prevCart.findIndex(cartValue => cartValue[0] === id);
      const copy: LocalStCart = [...prevCart];

      copy[index][1] += 1;

      localStorage.setItem('cart', JSON.stringify(copy));

      return copy;
    });
  };

  const handleCheckout = () => {
    setCartItems([]);
    localStorage.setItem('cart', '[]');
    setIsEmpty(true);
    setIsHaveBought(true);
  };

  useEffect(() => {
    if (!localStorageCart) {
      setIsEmpty(true);
    }

    loadData();
  }, []);

  return (
    <div className="cart">
      <div className="container">
        <div className="cart__moveback">
          <MoveBack />
        </div>
        <div className="cart__title">
          <PageTitle title="Cart" />
        </div>
        {!isEmpty
          ? (
            <div className="cart__mainContainer">
              <div className="cart__mainContainer__items">
                {cartItems.map(cartItem => {
                  const currentNumber = currentCart
                    .find(item => item[0] === cartItem.id);
                  const numb = currentNumber ? currentNumber[1] : 0;

                  return (
                    <CartItem
                      key={cartItem.itemId}
                      data={cartItem}
                      onDelete={handleDelete}
                      currentNumber={numb}
                      onNumberDecrease={handleNumberDecrease}
                      onNumberIncrease={handleNumberIncrease}
                    />
                  );
                })}
              </div>
              <div className="cart__mainContainer__checkout">
                <div className="cart__mainContainer__checkout__totalPrice">
                  {`$${totalPrice}`}
                </div>
                <div className="cart__mainContainer__checkout__totalLabel">
                  {`Total for ${totalItems} items`}
                </div>

                <hr className="cart__mainContainer__checkout__breakline" />

                <Button
                  text="Checkout"
                  onClick={handleCheckout}
                  classes="cart__mainContainer__checkout__button"
                />
              </div>
            </div>
          )
          : (<h2>You cart is empty</h2>)}
        {haveBought && (
          <>
            <hr />
            <h3>Congratulations! You have successfuly made an order!</h3>
          </>
        )}
      </div>
    </div>
  );
};
