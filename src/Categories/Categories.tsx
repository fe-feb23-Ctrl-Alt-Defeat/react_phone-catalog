import React, { useCallback, useEffect, useState } from 'react';
import { CategoryCard } from '../compononts/CategoryCard/CategoryCard';
import { getProductWithPagination } from '../api/products';

import categoriePhone from '../images/categoriesPhone.png';
import categorieTablet from '../images/categoriesTablets.png';
import categorieAccessories from '../images/categoriesAccessories.png';

import './categorie.scss';

export const Categories = () => {
  const [totalPhones, setTotalPhones] = useState<number>(0);

  const loadData = useCallback(async () => {
    const phones = await getProductWithPagination('1', '1');

    setTotalPhones(phones.count);
  }, []);

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="category">
      <div className="container">
        <div className="category__title">Shop by category</div>

        <div className="category__content">
          <CategoryCard
            path="/phones"
            img={categoriePhone}
            title="Mobile phones"
            quantity={totalPhones}
          />
          <CategoryCard
            path="/phones"
            img={categorieTablet}
            title="Tablets"
            quantity={12}
          />
          <CategoryCard
            path="/phones"
            img={categorieAccessories}
            title="Accessories"
            quantity={12}
          />
        </div>
      </div>
    </div>
  );
};
