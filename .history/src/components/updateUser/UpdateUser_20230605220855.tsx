import { FC } from 'react';
import './updateUser.sass';

const UpdateUser: FC = () => {
  return (
    <div className="updateUser">
      <h1>Пользователь</h1>
      <form>
        <label>
          Имя
          <input type="text" />
        </label>
        <label>
          Дата рождения
          <input type="text" />
        </label>
        <div>
          <button>Отмена</button>
          <button>Изменить</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
