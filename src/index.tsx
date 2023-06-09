import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
<<<<<<< HEAD
import { HashRouter as Router } from 'react-router-dom';
import { App } from './App';
=======
import { App } from './App';
import { BrowserRouter as Router } from 'react-router-dom';
>>>>>>> 3241e67 (added fonts and create a part of footer)

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);
