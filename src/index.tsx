/* eslint-disable max-len */
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { App } from './App';
import { FavoritesAndCartCountContextProvider } from './compononts/FavoritesCartContext/FavoritesCartContext';

ReactDOM.render(
  <FavoritesAndCartCountContextProvider>
    <Router>
      <App />
    </Router>
  </FavoritesAndCartCountContextProvider>,
  document.getElementById('root'),
);
