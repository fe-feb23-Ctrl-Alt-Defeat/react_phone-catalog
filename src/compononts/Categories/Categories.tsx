import React, { useCallback, useEffect, useState } from 'react';
import { CategoryCard } from '../CategoryCard/CategoryCard';
import { getProductsByCategory } from '../../api/products';

import categoriePhone from '../../images/categoriesPhone.png';
import categorieTablet from '../../images/categoriesTablets.png';
import categorieAccessories from '../../images/categoriesAccessories.png';

import './categorie.scss';

export const Categories = () => {
  const [totalPhones, setTotalPhones] = useState<number>(0);
  const [totalTablets, setTotalTablets] = useState<number>(0);
  const [totalAccessories, setTotalAccessories] = useState<number>(0);

  const loadData = useCallback(async () => {
    const phones = await getProductsByCategory('phones');
    const tablets = await getProductsByCategory('tablets');
    const accessories = await getProductsByCategory('accessories');

    setTotalAccessories(accessories.length);
    setTotalTablets(tablets.length);
    setTotalPhones(phones.length);
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
            path="/tablets"
            img={categorieTablet}
            title="Tablets"
            quantity={totalTablets}
          />
          <CategoryCard
            path="/accessories"
            img={categorieAccessories}
            title="Accessories"
            quantity={totalAccessories}
          />
        </div>
      </div>
    </div>
  );
};
