import { FC } from 'react';
import './gallery.sass';
const testphoto = require('../../images/testphoto.jpg');

const Gallery: FC = () => {
  const addPhotoHandler = (e: any) => {
    console.log(e.target.files);
  };

  return (
    <div className="gallery">
      <div>
        <h1 className="gallery__title">Галерея</h1>
        <button className="gallery__btn">Добавить фото</button>
        <input type="file" onChange={addPhotoHandler} accept=".png,.jpg" />
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
