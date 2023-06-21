/* eslint-disable no-console */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable max-len */
import React, {
  useEffect,
  useState,
  Fragment,
} from 'react';
import { useSearchParams } from 'react-router-dom';

import { Card } from '../Card/Card';
import { getProductWithPaginationSorted, getProductsByQuery } from '../../api/products';
import { DropDown } from '../../controls/DropDown/DropDown';
import { PageRoute } from '../../controls/PageRoute/PageRoute';
import { PageTitle } from '../../controls/PageTitle/PageTitle';
import { ItemsOnPage } from '../../controls/ItemsOnPage/ItemsOnPage';
import { PhonesForCatalogData } from '../../types/PhonesForCatalogData';
import { Pagination } from '../Pagination/Pagination';
import { Loader } from '../Loader/Loader';
import { catalogProductsFilter } from '../../utils/functionsHelpers/catalogProductsFilter';
import { CardData } from '../../types/CardData';
import { Search } from '../Search/Search';

import './catalog.scss';
// import { getSearchWith } from '../../utils/searchHelper';

export interface Option {
  title: string;
  selects: (string | number)[];
}

const filterBy = {
  title: 'Sort By',
  selects: ['Expensive', 'Cheapest', 'Newest', 'Oldest'],
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
  const order = searchParams.get('order') || 'Expensive';

  const query = searchParams.get('query') || '';

  const { orderBy, orderDir } = catalogProductsFilter(order);

  const [selectedPage, setSelectedPage] = useState(limit);
  const [selectedFilter, setSelectedFilter] = useState(order);

  const [total, setTotal] = useState(0);

  const handleCatalogData = (data: CardData[]) => {
    setCatalogData(data);
  };

  const fetchPhonesForCatalog = async () => {
    try {
      setIsLoading(true);

      if (query) {
        const data = await getProductsByQuery(query);

        setIsLoading(false);
        handleCatalogData(data);
        setTotal(data.length);

        return;
      }

      const productsFromServer: unknown = await getProductWithPaginationSorted(page, limit, orderDir, orderBy);
      const data: PhonesForCatalogData = productsFromServer as PhonesForCatalogData;

      setIsLoading(false);
      handleCatalogData(data.rows);
      setTotal(data.count);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPhonesForCatalog();
  }, [page, limit, order, orderBy, orderDir, query]);

  return (
    <>
      <div className="catalog">
        <div className="container">
          <div className="catalog__path">
            <PageRoute to="/phones" text="Phones" />
          </div>

          <div className="catalog__title">
            <PageTitle title="Mobile phones" />
            <ItemsOnPage itemsOnPage={total} text="items" />
          </div>

          <div className="catalog__sorts">
            <div className="catalog__sorts-items">
              <div className="catalog__sorts-items-dropdown">
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
              <div className="catalog__sorts-items-search">
                <Search />
              </div>
            </div>
          </div>

          {isLoading
            ? <Loader />
            : (
              <div className="catalog__products">
                {catalogData.map(
                  cardData => (
                    <Fragment key={cardData.name}>
                      <Card
                        key={cardData.name}
                        cardData={cardData}
                      />
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
