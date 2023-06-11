import React, { useEffect, useState } from 'react';
import './catalog.scss';
import IconHome from '../../images/icon_home.svg';
import IconArrowForward from '../../images/icon_arrow_forward.svg';
import { Card } from '../Card/Card';
import { DropDown } from '../SortInput/DropDown';
import { getProducts } from '../../api/products';
import { CardData } from '../../types/CardData';
import { DropDown } from '../SortInput/DropDown';


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
        <div className="catalog__routing">
          <div className="catalog__routing-icon-home">
            <a href="/home" className="catalog__routing-icon-home-link">
              <img
                src={IconHome}
                alt="Home icon"
                className="catalog__routing-icon-home-link-image"
              />
            </a>
          </div>

          <div className="catalog__routing-icon-arrow">
            <img
              src={IconArrowForward}
              alt="Arrow icon"
              className="catalog__routing-icon-arrow-image"
            />
          </div>

          <div className="catalog__routing-selected-page">
            <p className="catalog__routing-selected-page-paragraph">Phones</p>
          </div>
        </div>

        <div className="catalog__title">
          <h1 className="catalog__title-head">Mobile phones</h1>
          <p className="catalog__title-description">95 models</p>
        </div>

        <div className="catalog__sorts">
          <DropDown options={options[0]} />
          <DropDown options={options[1]} />
        </div>

        <div className="catalog__products">
          {catalogData.map(
            cardData => <Card key={cardData.name} cardData={cardData} />,
          )}
        </div>
      </div>
    </div>
  );
};
