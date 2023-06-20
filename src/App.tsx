/* eslint-disable no-constant-condition */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
import React, { FC } from 'react';
import useLocalStorage from 'use-local-storage';

import { Footer } from './compononts/Footer/Footer';
import { Header } from './compononts/Header/Header';
import { ContentWithRoutes } from './compononts/ContentWithRoutes/ContentWithRoutes';

import './App.scss';

export const App: FC = () => {
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light', 'light');

  const switchTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';

    setTheme(newTheme);
  };

  return (
    <div className="App" data-theme={theme}>
      <Header switchTheme={switchTheme} theme={theme} />
      <ContentWithRoutes />
      <Footer />
    </div>
  );
};
