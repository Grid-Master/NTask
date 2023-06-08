import React, { FC } from 'react';
import './userList.sass';

const UserList: FC = () => {
  return (
    <div className="userList">
      <div>
        <h1 className="userList__title">Пользователи</h1>
        <button className="userList__addUserBtn">Добавить пользователя</button>
      </div>
      <table className="userList__table">
        <tr className="userList__table-info">
          <td>Имя</td>
          <td>Дата рождения</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Никита</td>
          <td>09.02.2004</td>
          <td className="userList__table-btn">Удалить</td>
          <td className="userList__table-btn">Изменить</td>
        </tr>
        <tr>
          <td>Никита</td>
          <td>09.02.2004</td>
          <td className="userList__table-btn">Удалить</td>
          <td className="userList__table-btn">Изменить</td>
        </tr>
      </table>
    </div>
  );
};

export default UserList;
