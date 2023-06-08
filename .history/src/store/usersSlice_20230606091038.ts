import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { users } from '../data/users';

export interface IUser {
  id: number;
  name: string;
  date: string;
}

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [...users] as IUser[],
  },
  reducers: {
    removeUser(state, action: PayloadAction<number>) {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const { removeUser } = usersSlice.actions;

export default usersSlice.reducer;
