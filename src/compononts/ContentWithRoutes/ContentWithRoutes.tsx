/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useEffect } from 'react';
import cn from 'classnames';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Accessories } from '../../pages/Accessories/Accessories';
import { Cart } from '../../pages/Cart/Cart';
import { Favorites } from '../../pages/Favorites/Favorites';
import { PageNotFound } from '../../pages/PageNotFound/PageNotFound';
import { Phones } from '../../pages/Phones/Phones';
import { Tablets } from '../../pages/Tablets/Tablets';
import { HomePage } from '../../pages/HomePage/HomePage';
import { Contacts } from '../../pages/Contacts/Contacts';
import { PhoneInfo } from '../../pages/PhoneInfo/PhoneInfo';
import './contentWithRoutes.scss';
import {
  FavoritesAndCartCountContext,
} from '../FavoritesCartContext/FavoritesCartContext';

export const ContentWithRoutes = () => {
  const {
    isModalOpen,
  } = useContext(FavoritesAndCartCountContext);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('scroll-lock');
    }

    return () => {
      document.body.classList.remove('scroll-lock');
    };
  }, [isModalOpen]);

  return (
    <div
      className={cn('routes', { 'routes--onBlur': isModalOpen })}
    >
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
        <Route path="/contacts" element={<Contacts />} />

        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};
