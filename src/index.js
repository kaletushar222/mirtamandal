import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import { createStore } from 'redux'
import rootReducer from './reducers/index'

const store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));

console.log("store : ", store.getState())
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

