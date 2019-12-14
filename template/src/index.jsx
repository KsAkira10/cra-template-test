import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Pages from './pages';
import configureStore from './store/configureStore';
import { $ } from './shared/utils';
import './index.scss';

import * as serviceWorker from './serviceWorker';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Pages />
  </Provider>,
  $('#root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
