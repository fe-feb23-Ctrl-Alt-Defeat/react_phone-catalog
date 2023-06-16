import React, {
  Fragment, useEffect, useState,
} from 'react';

import { PageRoute } from '../../controls/PageRoute/PageRoute';
import { PageTitle } from '../../controls/PageTitle/PageTitle';
import { ItemsOnPage } from '../../controls/ItemsOnPage/ItemsOnPage';
import { Card } from '../../compononts/Card/Card';
import { Loader } from '../../compononts/Loader/Loader';
import { CardData } from '../../types/CardData';
import { getProductByIds } from '../../api/products';

export const Favorites = () => {
  const [isLoading, setIsLoading] = useState(false);

  const localStorageFavorites = localStorage.getItem('favorites');
  const currentFavorites: number[] = JSON.parse(localStorageFavorites || '[]');

  const [favoritesData, setFavoritesData] = useState<CardData[]>([]);

  const loadData = async () => {
    if (currentFavorites.length === 0) {
      return;
    }

    setIsLoading(true);
    const recivedData = await getProductByIds(currentFavorites);

    setIsLoading(false);
    setFavoritesData(recivedData);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className="catalog">
        <div className="container">
          <div className="catalog__path">
            <PageRoute text="Favourites" />
          </div>

          <div className="catalog__title">
            <PageTitle title="Favourites" />
            <ItemsOnPage itemsOnPage={favoritesData.length} text="items" />
          </div>

          {isLoading
            ? <Loader />
            : (
              <div className="catalog__products">
                {favoritesData.map(
                  favorite => (
                    <Card
                      key={favorite.id}
                      cardData={favorite}
                    />
                  ),
                )}
              </div>
            )}
        </div>
      </div>

    </>
  );
};
