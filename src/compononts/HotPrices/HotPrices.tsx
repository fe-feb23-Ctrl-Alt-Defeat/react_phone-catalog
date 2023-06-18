/* eslint-disable max-len */
import React, { useCallback, useEffect, useState } from 'react';

import { CardData } from '../../types/CardData';
import { getProductsWithDiscount } from '../../api/products';
import { NewModelsSlider } from '../NewModelsCarousel/NewModelsSlider/NewModelsSlider';

import './hotPrices.scss';

export const HotPrices = () => {
  const [phones, setPhones] = useState<CardData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadData = useCallback(async () => {
    setIsLoading(true);
    const loadestFromServer = await getProductsWithDiscount();

    setIsLoading(false);
    setPhones(loadestFromServer);
  }, []);

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className="container brendsModels">
        <NewModelsSlider
          isLoading={isLoading}
          phonesData={phones}
          title="Hot prices"
        />
      </div>
    </>
  );
};
