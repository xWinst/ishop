import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6304a2df761a3bce77ec3b48.mockapi.io';

export const getProducts = createAsyncThunk(
  'contacts/getProducts',
  async (category, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/${category}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async (contact, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.post('/contacts', contact);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (contactId, { rejectWithValue }) => {
//     try {
//       const {
//         data: { id },
//       } = await axios.delete(`/contacts/${contactId}`);
//       return id;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );
