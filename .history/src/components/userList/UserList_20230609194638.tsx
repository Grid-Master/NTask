import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import './userList.sass';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { removeUser } from '../../store/usersSlice';

const UserList: FC = () => {
  const navigate = useNavigate();
  const users = useAppSelector((state) => state.usersReducer.users);
  const dispatch = useAppDispatch();

  const updateHandler = (router: string) => {
    navigate(router);
    window.scrollTo(0, 0);
  };

  const deleteHandler = (id: number) => {
    dispatch(removeUser(id));
  };

  return (
    <div className="userList">
      <div>
        <h1 className="userList__title">Пользователи</h1>
        <button className="userList__addUserBtn" onClick={() => updateHandler('createuser')}>
          Добавить пользователя
        </button>
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
            <td className="userList__table-btn" onClick={() => deleteHandler(user.id)}>
              Удалить &nbsp
            </td>
            <td className="userList__table-btn" onClick={() => updateHandler(`${user.id}`)}>
              Изменить
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default UserList;
