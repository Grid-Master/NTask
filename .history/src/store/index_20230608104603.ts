import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice';
import galleryReducer from './gallerySlice';

const store = configureStore({
  reducer: { usersReducer, galleryReducer },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
