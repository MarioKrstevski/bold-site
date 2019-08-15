import React from 'react';
import { Provider } from 'react-redux';
import { createStore as reduxCreateStore } from 'redux';
import rootReducer from './index';

const createStore = () => reduxCreateStore(rootReducer);

const StoreProvider = ({ children }) => (
  <Provider store={createStore()}>{children}</Provider>
);

export { StoreProvider }