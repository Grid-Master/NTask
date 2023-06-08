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
      console.log('payload', action.payload);
      if (action.payload.name !== undefined) {
        let user = state.users.find((user) => user.id === action.payload.id);
        user?.name = action.payload.name;
      }
    },
    removeUser(state, action: PayloadAction<number>) {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const { removeUser, updateUser } = usersSlice.actions;

export default usersSlice.reducer;
