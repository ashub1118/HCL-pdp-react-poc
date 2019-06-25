import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux";
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom'

import MainReducer from './reducers/main-reducer';

import './index.css';
import App from './App';
//  import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';
import 'react-app-polyfill/ie11';

import 'react-app-polyfill/ie9';

import 'react-app-polyfill/stable';

const store = createStore(MainReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
