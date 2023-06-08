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
    pickPhoto(state, action: PayloadAction<number>) {
      const pickedPhoto = state.photos.find((photo) => photo.id === action.payload);
      if (pickedPhoto) {
        pickedPhoto.isSelected = !pickedPhoto.isSelected;
      }
    },
    removePhotos(state, action: PayloadAction<number[]>) {},
  },
});

export const { addPhoto, pickPhoto, removePhotos } = gallerySlice.actions;

export default gallerySlice.reducer;
