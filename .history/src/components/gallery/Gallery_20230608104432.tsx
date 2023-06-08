import { FC, useState, useRef } from 'react';
import './gallery.sass';
import { useAppDispatch } from '../../store/hooks';
import { IPhoto, addPhoto } from '../../store/gallerySlice';
const testphoto = require('../../images/testphoto.jpg');

const Gallery: FC = () => {
  const photoPicker = useRef<HTMLInputElement>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<File | null>(null);
  const dispatch = useAppDispatch();

  const handlePick = () => {
    if (photoPicker.current) {
      photoPicker.current.click();
    }
  };

  const addPhotoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setSelectedPhoto(e.target.files[0]);

    //@ts-ignore
    console.log('12', e.target.files[0]);

    const addingPhoto: IPhoto = {
      id: new Date().getTime(),
      isSelected: false,
      //@ts-ignore
      file: JSON.stringify(e.target.files[0]),
    };
    dispatch(addPhoto(addingPhoto));
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
        <li className="gallery__list-item">
          <img className="gallery__list-item-photo" src={testphoto} alt="photo" />
        </li>
        <li className="gallery__list-item">
          <img className="gallery__list-item-photo" src={testphoto} alt="photo" />
        </li>
        <li className="gallery__list-item-active">
          <img className="gallery__list-item-photo" src={testphoto} alt="photo" />
        </li>
      </ul>
    </div>
  );
};

export default Gallery;
