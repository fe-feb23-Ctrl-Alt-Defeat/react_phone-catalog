/* eslint-disable max-len */
import React, { useCallback, useEffect, useState } from 'react';

import { CardData } from '../../types/CardData';
import { getProductsWithDiscount } from '../../api/products';
import { NewModelsSlider } from '../NewModelsCarousel/NewModelsSlider/NewModelsSlider';

import './hotPrices.scss';

export const HotPrices = () => {
  const [phones, setPhones] = useState<CardData[]>([]);

  const loadData = useCallback(async () => {
    const loadestFromServer = await getProductsWithDiscount();

    setPhones(loadestFromServer);
  }, []);

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className="container brendsModels">
        <NewModelsSlider phonesData={phones} title="Hot prices" />
      </div>
    </>
  );
};
