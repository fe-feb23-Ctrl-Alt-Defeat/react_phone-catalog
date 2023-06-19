/* eslint-disable max-len */
import React, { useCallback, useEffect, useState } from 'react';

import { CardData } from '../../types/CardData';
import { getRecomendedProducts } from '../../api/products';
import { NewModelsSlider } from '../NewModelsCarousel/NewModelsSlider/NewModelsSlider';

export const YouMayAlsoLike = () => {
  const [phones, setPhones] = useState<CardData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadData = useCallback(async () => {
    try {
      setIsLoading(true);
      const loadestFromServer = await getRecomendedProducts();

      setIsLoading(false);
      setPhones(loadestFromServer);
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
        <NewModelsSlider
          isLoading={isLoading}
          phonesData={phones}
          title="You may also like"
        />
      </div>
    </>
  );
};
