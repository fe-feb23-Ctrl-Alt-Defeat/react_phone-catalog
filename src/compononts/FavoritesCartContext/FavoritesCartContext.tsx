/* eslint-disable max-len */
import React, {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useState,
} from 'react';

interface FavoritesAndCartCountContextType {
  favoritesCount: number[];
  setFavoritesCount: Dispatch<SetStateAction<number[]>>;
  cartCount: number[];
  setCartCount: Dispatch<SetStateAction<number[]>>;
}

export const FavoritesAndCartCountContext = createContext<FavoritesAndCartCountContextType>({
  favoritesCount: [],
  setFavoritesCount: () => { },
  cartCount: [],
  setCartCount: () => { },
});

export const FavoritesAndCartCountContextProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const localStorageFavorites = localStorage.getItem('favorites');
  const currentFavorites: number[] = JSON.parse(localStorageFavorites || '[]');

  const localStorageCart = localStorage.getItem('cart');
  const currentCarts: number[][] = JSON.parse(localStorageCart || '[]');
  const dataToSetINcartCount: number[] = currentCarts.map(item => item[0]);

  const [favoritesCount, setFavoritesCount] = useState<number[]>(currentFavorites);
  const [cartCount, setCartCount] = useState<number[]>(dataToSetINcartCount);

  const contextValue: FavoritesAndCartCountContextType = {
    favoritesCount,
    setFavoritesCount,
    cartCount,
    setCartCount,
  };

  return (
    <FavoritesAndCartCountContext.Provider value={contextValue}>
      {children}
    </FavoritesAndCartCountContext.Provider>
  );
};
