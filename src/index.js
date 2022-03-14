import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux'
import rootRender from  './store/reducer/reducer1'
import { createStore } from 'redux'


const store = createStore(rootRender)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
