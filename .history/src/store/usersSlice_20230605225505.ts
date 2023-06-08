import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUser {
  id: number;
  name: string;
  date: string;
}

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [] as IUser[],
  },
  reducers: {},
});

export default usersSlice.reducer;
