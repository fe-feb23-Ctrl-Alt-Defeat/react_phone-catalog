/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { CardData } from '../../types/CardData';
import { getProductWithPaginationSorted } from '../../api/products';
import { PhonesForCatalogData } from '../../types/PhonesForCatalogData';
// eslint-disable-next-line max-len
import { NewModelsSlider } from '../NewModelsCarousel/NewModelsSlider/NewModelsSlider';

export const BrendsModels = () => {
  const [phones, setPhones] = useState<CardData[]>([]);

  const loadData = async () => {
    const loadestFromServer: unknown = await getProductWithPaginationSorted(
      '1', '20', 'DESC', 'fullPrice',
    );

    // eslint-disable-next-line max-len
    const data: PhonesForCatalogData = loadestFromServer as PhonesForCatalogData;

    setPhones(data.rows);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <NewModelsSlider phonesData={phones} title="Brand new models" />
    </>
  );
};
