import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { users } from '../data/users';

interface IUser {
  id: number;
  name: string;
  date: string;
}

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [...users] as IUser[],
  },
  reducers: {},
});

export default usersSlice.reducer;
