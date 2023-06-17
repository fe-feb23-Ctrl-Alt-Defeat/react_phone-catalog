/* eslint-disable max-len */
import React, { useCallback, useEffect, useState } from 'react';

import { CardData } from '../../types/CardData';
import { getRecomendedProducts } from '../../api/products';
import { NewModelsSlider } from '../NewModelsCarousel/NewModelsSlider/NewModelsSlider';

export const YouMayAlsoLike = () => {
  const [phones, setPhones] = useState<CardData[]>([]);

  const loadData = useCallback(async () => {
    try {
      const loadestFromServer = await getRecomendedProducts();

      const data = loadestFromServer;

      setPhones(data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className="container">
        <NewModelsSlider phonesData={phones} title="You may also like" />
      </div>
    </>
  );
};
