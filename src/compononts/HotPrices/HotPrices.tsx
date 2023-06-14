/* eslint-disable max-len */
import React, { useCallback, useEffect, useState } from 'react';

import { CardData } from '../../types/CardData';
import { getProductWithPaginationSorted } from '../../api/products';
import { PhonesForCatalogData } from '../../types/PhonesForCatalogData';
import { NewModelsSlider } from '../NewModelsCarousel/NewModelsSlider/NewModelsSlider';

import './hotPrices.scss';

export const HotPrices = () => {
  const [phones, setPhones] = useState<CardData[]>([]);

  const loadData = useCallback(async () => {
    const loadestFromServer: unknown = await getProductWithPaginationSorted(
      '1', '20', 'ASC', 'fullPrice',
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
        <NewModelsSlider phonesData={phones} title="Hot prices" />
      </div>
    </>
  );
};
