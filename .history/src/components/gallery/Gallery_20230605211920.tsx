import { FC } from 'react';
import './gallery.sass';
const testphoto = require('../../images/testphoto.jpg');

const Gallery: FC = () => {
  return (
    <div className="gallery">
      <div>
        <h1 className="gallery__title">Галерея</h1>
        <button className="gallery__btn">Добавить фото</button>
      </div>
      <ul className="gallery__list">
        <li className="gallery__list-item">
          <img alt="photo" />
        </li>
        <li className="gallery__list-item">
          <img alt="photo" />
        </li>
        <li className="gallery__list-item">
          <img alt="photo" />
        </li>
      </ul>
    </div>
  );
};

export default Gallery;
