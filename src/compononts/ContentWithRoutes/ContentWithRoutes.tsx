import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Accessories } from '../../pages/Accessories/Accessories';
import { Cart } from '../../pages/Cart/Cart';
import { Favorites } from '../../pages/Favorites/Favorites';
import { PageNotFound } from '../../pages/PageNotFound/PageNotFound';
import { Phones } from '../../pages/Phones/Phones';
import { Tablets } from '../../pages/Tablets/Tablets';
import { HomePage } from '../../pages/HomePage/HomePage';
import { PhoneInfo } from '../../pages/PhoneInfo/PhoneInfo';

export const ContentWithRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/phones">
        <Route index element={<Phones />} />
        <Route path=":itemId" element={<PhoneInfo />} />
      </Route>
      <Route path="/tablets" element={<Tablets />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/cart" element={<Cart />} />

      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
