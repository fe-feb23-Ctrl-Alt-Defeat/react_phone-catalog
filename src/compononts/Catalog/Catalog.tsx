import React, { useEffect, useState, Fragment } from 'react';
import { useSearchParams } from 'react-router-dom';

import './catalog.scss';
import { Card } from '../Card/Card';
import { getProductWithPagination } from '../../api/products';
import { CardData } from '../../types/CardData';

import { DropDown } from '../../controls/DropDown/DropDown';
import { PageRoute } from '../../controls/PageRoute/PageRoute';
import { PageTitle } from '../../controls/PageTitle/PageTitle';
import { ItemsOnPage } from '../../controls/ItemsOnPage/ItemsOnPage';
import { PhonesForCatalogData } from '../../types/PhonesForCatalogData';
import { Pagination } from '../Pagination/Pagination';
import { Loader } from '../Loader/Loader';

export interface Option {
  title: string;
  selects: (string | number)[];
}

const filterBy = {
  title: 'Sort By',
  selects: ['Newest', 'Oldest', 'Cheapest'],
};

const selectNum = {
  title: 'Items on page',
  selects: ['16', '32', '48'],
};

export const Catalog: React.FC = () => {
  const [catalogData, setCatalogData] = useState<CardData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();

  const limit = searchParams.get('limit') || '16';
  const page = searchParams.get('page') || '1';

  const [selectedPage, setSelectedPage] = useState(limit);
  const [selectedFilter, setSelectedFilter] = useState(filterBy.selects[0]);

  const [total, setTotal] = useState(0);

  const handleCatalogData = (data: CardData[]) => {
    setCatalogData(data);
  };

  const fetchPhonesForCatalog = async () => {
    try {
      setIsLoading(true);
      // eslint-disable-next-line max-len
      const productsFromServer: unknown = await getProductWithPagination(page, limit);
      // eslint-disable-next-line max-len
      const data: PhonesForCatalogData = productsFromServer as PhonesForCatalogData;

      setIsLoading(false);
      handleCatalogData(data.rows);
      setTotal(data.count);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPhonesForCatalog();
  }, [page, limit]);

  return (
    <>
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
            <DropDown
              options={filterBy}
              selectedItem={selectedFilter}
              setOnSelect={setSelectedFilter}
            />
            <DropDown
              options={selectNum}
              selectedItem={selectedPage}
              setOnSelect={setSelectedPage}
            />
          </div>

          {isLoading
            ? <Loader />
            : (
              <div className="catalog__products">
                {catalogData.map(
                  cardData => (
                    <Fragment key={cardData.name}>
                      <Card key={cardData.name} cardData={cardData} />
                    </Fragment>
                  ),
                )}
              </div>
            )}
        </div>
      </div>

      {!isLoading && (
        <div className="catalog__pagination">
          <Pagination limit={limit} total={total} page={page} />
        </div>
      )}
    </>
  );
};
