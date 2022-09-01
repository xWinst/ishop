import { createReducer } from '@reduxjs/toolkit';
import { getProducts } from './operations';

const initalState = {
  products: [],
  isLoding: false,
  error: null,
};

const products = createReducer(initalState, {
  [getProducts.pending]: state => {
    state.isLoding = true;
  },

  [getProducts.fulfilled]: (state, action) => {
    state.products = action.payload;
    state.isLoding = false;
  },

  [getProducts.rejected]: (state, action) => {
    state.error = action.payload;
    state.isLoding = false;
  },
});

export default products;
