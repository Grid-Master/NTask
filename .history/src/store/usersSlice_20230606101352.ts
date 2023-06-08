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
    updateUser(state, action: PayloadAction<IUser>) {
      state.users[action.payload.id + 1].name = action.payload.name;
      state.users[action.payload.id + 1].date = action.payload.date;
    },
    removeUser(state, action: PayloadAction<number>) {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const { removeUser, updateUser } = usersSlice.actions;

export default usersSlice.reducer;
