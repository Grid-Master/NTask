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
      <div className="userList__container">
        <h1 className="userList__title">Пользователи</h1>
        <button className="userList__addUserBtn" onClick={() => updateHandler('createuser')}>
          Добавить пользователя
        </button>
      </div>
      <ul className="userList__grid">
        <li className="userList__grid-name">Имя</li>
        <li>Дата рождения</li>
        <li></li>
        <li></li>
        {users.map((user) => (
          <>
            <li>{user.name}</li>
            <li>{user.date}</li>
            <li className="userList__table-btn" onClick={() => deleteHandler(user.id)}>
              Удалить
            </li>
            <li className="userList__table-btn" onClick={() => updateHandler(`${user.id}`)}>
              Изменить
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
