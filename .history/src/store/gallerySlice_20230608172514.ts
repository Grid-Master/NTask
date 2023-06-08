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
      const pickedPhoto = state.photos.findIndex((photo) => photo.id === action.payload);
      console.log(pickedPhoto, 'picked');
      if (pickedPhoto !== -1) {
        state.photos[pickedPhoto] = {
          ...state.photos[pickedPhoto],
          isSelected: !state.photos[pickedPhoto].isSelected,
        };
      }
    },
    removePhotos(state, action: PayloadAction<number[]>) {
      action.payload.forEach((id) => {
        state.photos = state.photos.filter((photo) => photo.id !== id);
      });
    },
  },
});

export const { addPhoto, pickPhoto, removePhotos } = gallerySlice.actions;

export default gallerySlice.reducer;
