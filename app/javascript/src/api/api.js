import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = '/api/random_greeting';

const getMessagesAPI = createAsyncThunk(
  'msgSlice/getMessages',
  async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
  },
);

export default getMessagesAPI;