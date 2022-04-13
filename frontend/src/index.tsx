/*
 * Copyright (c) 2022 LasGIS FOE Helper
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Main/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import configureStore from './redux/configureStore';

const store = configureStore();

ReactDOM.render(
  //  <React.StrictMode>
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  //  </React.StrictMode>
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
