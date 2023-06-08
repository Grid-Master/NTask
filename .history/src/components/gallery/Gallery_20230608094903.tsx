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
    // @ts-ignore
    setSelectedPhoto(URL.createObjectURL(e.target.files[0]));
  };

  const uploadPhotoHandler = (photo: any) => {
    if (!photo) {
      alert('Please select a photo');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event: any) => {
      const photoDataURL = event.target.result;
      setSelectedPhoto(photoDataURL);
    };
    reader.readAsDataURL(photo);
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
      <img src={selectedPhoto} alt="121" />
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
