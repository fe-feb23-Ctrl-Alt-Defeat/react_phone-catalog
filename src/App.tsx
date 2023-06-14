/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
import React, { FC } from 'react';
import './App.scss';
import { Footer } from './compononts/Footer/Footer';
import { Header } from './compononts/Header/Header';
import { ContentWithRoutes } from './compononts/ContentWithRoutes/ContentWithRoutes';

export const App: FC = () => (
  <div className="App">
    <Header />
    <ContentWithRoutes />
    <Footer />
  </div>
);
