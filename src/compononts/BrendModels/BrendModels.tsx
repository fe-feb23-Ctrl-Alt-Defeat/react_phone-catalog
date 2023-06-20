/* eslint-disable no-console */
/* eslint-disable max-len */
import React, { useCallback, useEffect, useState } from 'react';

import { CardData } from '../../types/CardData';
import { getProductWithPaginationSorted } from '../../api/products';
import { PhonesForCatalogData } from '../../types/PhonesForCatalogData';
import { NewModelsSlider } from '../NewModelsCarousel/NewModelsSlider/NewModelsSlider';

import './brendmodels.scss';

export const BrendsModels = () => {
  const [phones, setPhones] = useState<CardData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadData = useCallback(async () => {
    try {
      setIsLoading(true);
      const loadestFromServer: unknown = await getProductWithPaginationSorted(
        '1', '24', 'DESC', 'year',
      );

      const data: PhonesForCatalogData = loadestFromServer as PhonesForCatalogData;

      setIsLoading(false);
      setPhones(data.rows);
    } catch (error) {
      console.log('Something was wrong');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="brendmodels">
          <NewModelsSlider
            phonesData={phones}
            isLoading={isLoading}
            title="Brand new models"
          />
        </div>
      </div>
    </>
  );
};
