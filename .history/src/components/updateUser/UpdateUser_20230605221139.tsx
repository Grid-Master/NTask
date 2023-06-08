import { FC } from 'react';
import './updateUser.sass';

const UpdateUser: FC = () => {
  return (
    <div className="updateUser">
      <h1 className="updateUser__title">Пользователь</h1>
      <form className="updateUser__form">
        <label className="updateUser__form-name">
          Имя
          <input type="text" />
        </label>
        <label className="updateUser__form-date">
          Дата рождения
          <input type="text" />
        </label>
        <div className="updateUser__form-btns">
          <button className="updateUser__form-btns-cancel">Отмена</button>
          <button className="updateUser__form-btns-update">Изменить</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
