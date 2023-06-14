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

  console.log(phones);

  const loadData = useCallback(async () => {
    const loadestFromServer: unknown = await getProductWithPaginationSorted(
      '1', '20', 'DESC', 'fullPrice',
    );

    const data: PhonesForCatalogData = loadestFromServer as PhonesForCatalogData;

    setPhones(data.rows);
  }, []);

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className="container brendsModels">
        <NewModelsSlider phonesData={phones} title="Brand new models" />
      </div>
    </>
  );
};
