import React from 'react';
import './App.scss';
import { HomePage } from './pages/HomePage/HomePage';

export const App: React.FC = () => {
  const appps = 1234;

  console.log(appps);

  return (
    <HomePage />
  );
};
