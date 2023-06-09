import React, { FC } from 'react';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Phones } from './pages/Phones/Phones';
import { Tablets } from './pages/Tablets/Tablets';
import { Accessories } from './pages/Accessories/Accessories';
import { Favorites } from './pages/Favorites/Favorites';
import { Cart } from './pages/Cart/Cart';
import { PhoneInfo } from './pages/PhoneInfo/PhoneInfo';
import { PageNotFound } from './pages/PageNotFound/PageNotFound';
import { HomePage } from './pages/HomePage/HomePage';
import { Footer } from './compononts/Footer/Footer';

export const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/phones">
          <Route index element={<Phones />} />
          <Route path=":phoneId" element={<PhoneInfo />} />
        </Route>
        <Route path="/tablets" element={<Tablets />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </>
  );
};
