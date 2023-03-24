import { configureStore } from '@reduxjs/toolkit';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import placeReducer from './place.slice';
import {
  categoryReducer,
  productReducer,
  cartReducer,
  ordersReducer,
  authReducer,
} from './reducers';

export const store = configureStore({
  reducer: {
    place: placeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});


const rootReducer = combineReducers({
  products: productReducer,
  category: categoryReducer,
  cart: cartReducer,
  orders: ordersReducer,
  auth: authReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
