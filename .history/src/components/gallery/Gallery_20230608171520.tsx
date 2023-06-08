import { FC, useState, useRef } from 'react';
import './gallery.sass';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { IPhoto, addPhoto, pickPhoto } from '../../store/gallerySlice';
const testphoto = require('../../images/testphoto.jpg');

const Gallery: FC = () => {
  const photoPicker = useRef<HTMLInputElement>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<File | null>(null);
  const photos = useAppSelector((state) => state.galleryReducer.photos);
  const dispatch = useAppDispatch();

  console.log(photos);

  const handlePick = () => {
    if (photoPicker.current) {
      photoPicker.current.click();
    }
  };

  const addPhotoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    //@ts-ignore
    setSelectedPhoto(e.target.files[0]);
    //@ts-ignore
    const file = e.target.files[0];

    if (file) {
      const addingPhoto: IPhoto = {
        id: new Date().getTime(),
        isSelected: false,
        file,
      };
      dispatch(addPhoto(addingPhoto));
    }
  };

  const photoPickHandler = (id: number) => {
    dispatch(pickPhoto(id));
  };

  return (
    <div className="gallery">
      <div>
        <h1 className="gallery__title">Галерея</h1>
        <button onClick={handlePick} className="gallery__btn">
          Добавить фото
        </button>
        <input
          ref={photoPicker}
          className="hidden"
          type="file"
          onChange={addPhotoHandler}
          accept=".png,.jpg"
        />
      </div>
      <ul className="gallery__list">
        {photos.map((photo) => (
          <li
            onClick={() => photoPickHandler(photo.id)}
            key={photo.id}
            className={
              photo.isSelected ? 'gallery__list-item-active' : 'gallery__list-item-photo'
            
            <img
              src={URL.createObjectURL(photo.file)}
              alt="photo"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Gallery;
