import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
  },
  reducers: {},
});

export default usersSlice.reducer;
