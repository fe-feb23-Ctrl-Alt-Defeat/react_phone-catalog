import React, { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './catalog.scss';
import { Card } from '../Card/Card';
import { getProducts } from '../../api/products';
import { CardData } from '../../types/CardData';
import { DropDown } from '../../controls/DropDown/DropDown';
import { PageRoute } from '../../controls/PageRoute/PageRoute';
import { PageTitle } from '../../controls/PageTitle/PageTitle';
import { ItemsOnPage } from '../../controls/ItemsOnPage/ItemsOnPage';

export interface Option {
  title: string;
  selects: (string | number)[];
}

const options: Option[] = [
  {
    title: 'Sort By',
    selects: ['Newest', 'Oldest', 'Cheapest'],
  },
  {
    title: 'Items on page',
    selects: [16, 32, 48],
  },
];

export const Catalog: React.FC = () => {
  const [catalogData, setCatalogData] = useState<CardData[]>([]);

  const loadData = async () => {
    const dataFromServer = await getProducts();

    setCatalogData(dataFromServer);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="catalog">
      <div className="container">
        <div className="catalog__path">
          <PageRoute />
        </div>

        <div className="catalog__title">
          <PageTitle title="Mobile phones" />
          <ItemsOnPage itemsOnPage={catalogData.length} />
        </div>

        <div className="catalog__sorts">
          <DropDown options={options[0]} />
          <DropDown options={options[1]} />
        </div>

        <div className="catalog__products">
          {catalogData.map(
            cardData => (
              <Fragment key={cardData.name}>
                <Link to={`/phones/${cardData.itemId}`}>
                  <Card key={cardData.name} cardData={cardData} />
                </Link>
              </Fragment>
            ),
          )}
        </div>
      </div>
    </div>
  );
};
