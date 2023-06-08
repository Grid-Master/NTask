import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IPhoto {
  id: number;
  isSelected: boolean;
  file: any;
}

const gallerySlice = createSlice({
  name: 'users',
  initialState: {
    photos: [] as IPhoto[],
  },
  reducers: {
    addPhoto(state, action: PayloadAction<IPhoto>) {
      state.photos.unshift(action.payload);
    },
    removePhotos(state, action: PayloadAction<number[]>) {},
  },
});

export const { addPhoto, removePhotos } = gallerySlice.actions;

export default gallerySlice.reducer;
