import { FC, useState, useRef } from 'react';
import './gallery.sass';
const testphoto = require('../../images/testphoto.jpg');

const Gallery: FC = () => {
  const photoPicker = useRef<HTMLInputElement>(null);
  const [selectedPhoto, setSelectedPhoto] = useState();
  const [uploaded, setUploaded] = useState<any>();

  const handlePick = () => {
    if (photoPicker.current) {
      photoPicker.current.click();
    }
  };

  const addPhotoHandler = (e: any) => {
    setSelectedPhoto(e.target.files[0]);
    uploadPhotoHandler();
  };

  const uploadPhotoHandler = async () => {
    if (!selectedPhoto) {
      alert('Пожалуйста выберите фото');
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      const photoArrayBuffer = event.target?.result;
      console.log('Фото в виде массива:', photoArrayBuffer);
      // Дальнейшие действия с фото в виде массива
    };
    reader.readAsArrayBuffer(selectedPhoto);
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
