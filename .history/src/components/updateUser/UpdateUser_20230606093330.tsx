import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './updateUser.sass';
import { useAppSelector } from '../../store/hooks';
import { IUser } from '../../store/usersSlice';

const UpdateUser: FC = () => {
  const [name, setName] = useState<string>();
  const users = useAppSelector((state) => state.usersReducer.users);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    let user = users.find((user) => user.id.toString() === params.id);
    setName(user?.name);
  }, []);

  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const cancelHandler = () => {
    navigate('/users');
  };

  if (name === undefined) return <>error</>;

  return (
    <div className="u pdateUser">
      <h1 className="updateUser__title">Пользователь</h1>
      <form className="updateUser__form">
        <label className="updateUser__form-name">
          Имя
          <input type="text" value={name} onChange={nameHandler} />
        </label>
        <label className="updateUser__form-date">
          Дата рождения
          <input type="text" />
        </label>
        <div className="updateUser__form-btns">
          <button className="updateUser__form-btns-cancel" onClick={cancelHandler}>
            Отмена
          </button>
          <button className="updateUser__form-btns-update">Изменить</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
