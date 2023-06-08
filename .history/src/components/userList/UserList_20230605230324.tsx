import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import './userList.sass';
import { useAppSelector } from '../../store/hooks';

const UserList: FC = () => {
  const navigate = useNavigate();
  const users = useAppSelector((state) => state.usersReducer.users);
  console.log(users);

  const navigateHandler = (router: string) => {
    navigate(router);
    window.scrollTo(0, 0);
  };

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
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.date}</td>
            <td className="userList__table-btn">Удалить</td>
            <td className="userList__table-btn" onClick={() => navigateHandler(`${user.name}`)}>
              Изменить
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default UserList;
