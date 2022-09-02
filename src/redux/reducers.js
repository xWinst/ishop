import { createReducer } from '@reduxjs/toolkit';
import { getProducts } from './operations';
import { addProduct, deleteProduct } from './actions';

const initalState = {
  products: [],
  basket: [],
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
    state.error = action.payload.message;
    state.isLoding = false;
    console.log('ERROR5555');
  },

  [addProduct]: (state, action) => {
    state.basket.push(action.payload);
  },

  [deleteProduct]: (state, action) => {
    const index = state.basket.findIndex(({ name }) => name === action.payload);
    state.basket = state.basket.splice(index, 1);
  },
});

export default products;
