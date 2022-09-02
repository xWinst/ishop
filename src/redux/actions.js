import { createAction } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

export const addProduct = createAction('basket/addProduct');
export const deleteProduct = createAction('basket/deleteProduct');
