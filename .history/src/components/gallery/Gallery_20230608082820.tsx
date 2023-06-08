import { FC, useState } from 'react';
import './gallery.sass';
const testphoto = require('../../images/testphoto.jpg');

const Gallery: FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState();
  const addPhotoHandler = (e: any) => {
    setSelectedPhoto(e.target.files[0]);
  };

  return (
    <div className="gallery">
      <div>
        <h1 className="gallery__title">Галерея</h1>
        <button className="gallery__btn">Добавить фото</button>
        <input className="hidden" type="file" onChange={addPhotoHandler} accept=".png,.jpg" />
      </div>
      <img alt="121" />
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
