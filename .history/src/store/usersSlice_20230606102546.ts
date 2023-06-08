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
      let updateUser = state.users.find((user) => user.id === action.payload.id);
      if (updateUser) {
        updateUser.name = action.payload.name;
        updateUser.date = action.payload.date;
      }
      state.users = state.users.map((user) => (user.id === updateUser?.id ? updateUser : user));
    },
    removeUser(state, action: PayloadAction<number>) {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const { removeUser, updateUser } = usersSlice.actions;

export default usersSlice.reducer;
