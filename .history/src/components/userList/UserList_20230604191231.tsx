import React, { FC } from 'react';
import './userList.sass';

const UserList: FC = () => {
  return (
    <div className="userList">
      <div>
        <h1>Пользователи</h1>
        <button>Добавить пользователя</button>
      </div>
      <table>
        <tr>
          <td>Имя</td>
          <td>Дата рождения</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Никита</td>
          <td>09.02.2004</td>
          <td>Удалить</td>
          <td>Изменить</td>
        </tr>
      </table>
    </div>
  );
};

export default UserList;
