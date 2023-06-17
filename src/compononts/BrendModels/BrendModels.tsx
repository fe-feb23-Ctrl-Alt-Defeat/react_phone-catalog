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

  const loadData = useCallback(async () => {
    const loadestFromServer: unknown = await getProductWithPaginationSorted(
      '1', '24', 'DESC', 'year',
    );

    const data: PhonesForCatalogData = loadestFromServer as PhonesForCatalogData;

    setPhones(data.rows);
  }, []);

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className="container">
        <NewModelsSlider phonesData={phones} title="Brand new models" />
      </div>
    </>
  );
};
