import { createSlice } from '@reduxjs/toolkit';
import getMessagesAPI from './api';

const initialState = {
  isLoading: false,
  message: '',
};

const messageSlice = createSlice({
  name: 'msgSlice',
  initialState,
  reducers: {},
  extraReducers: {
    [getMessagesAPI.pending]: (state) => ({ ...state, isLoading: true }),
    [getMessagesAPI.fulfilled]: (state, { payload }) => ({
      ...state,
      message: payload.message,
      isLoading: false,
    }),
    [getMessagesAPI.rejected]: (state) => ({
      ...state,
      message: 'Rejected',
      isLoading: false,
    }),
  },
});

export default messageSlice.reducer;