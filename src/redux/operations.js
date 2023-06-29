import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.default.baseUrl = 'https://6443bb28466f7c2b4b593743.mockapi.io';

export const fetchAll = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/contacts');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async (contact, thunkAPI) => {
    try {
      const res = await axios.get('/contacts', contact);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deletedContacts = createAsyncThunk(
  'contacts/deletedContacts',
  async (contactId, thunkAPI) => {
    try {
      const res = await axios.get(`/contacts/${contactId}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
