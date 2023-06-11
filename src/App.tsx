/* eslint-disable no-console */
/* eslint-disable max-len */
import React, { FC, useState } from 'react';
import './App.scss';
import { Footer } from './compononts/Footer/Footer';
import { Header } from './compononts/Header/Header';
import { ContentWithRoutes } from './compononts/ContentWithRoutes/ContentWithRoutes';

export const App: FC = () => {
  const [isOpenBurger, setIsOpenBurger] = useState(true);

  console.log(isOpenBurger);

  return (
    <div className="App">
      {isOpenBurger && <Header setIsOpenBurger={setIsOpenBurger} />}
      <ContentWithRoutes />
      {isOpenBurger && <Footer />}
    </div>
  );
};
