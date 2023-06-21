/* eslint-disable no-constant-condition */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
import React, { FC, useContext } from 'react';
import useLocalStorage from 'use-local-storage';

import { Footer } from './compononts/Footer/Footer';
import { Header } from './compononts/Header/Header';
import { ContentWithRoutes } from './compononts/ContentWithRoutes/ContentWithRoutes';

import './App.scss';
import { Authorization } from './compononts/Authorization/Authorization';
import { FavoritesAndCartCountContext } from './compononts/FavoritesCartContext/FavoritesCartContext';

export const App: FC = () => {
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light', 'light');
  const { isModalOpen } = useContext(FavoritesAndCartCountContext);
  const switchTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';

    setTheme(newTheme);
  };

  return (
    <div className="App" data-theme={theme}>
      <Header switchTheme={switchTheme} theme={theme} />
      {isModalOpen && <Authorization />}
      <ContentWithRoutes />
      <Footer />
    </div>
  );
};
