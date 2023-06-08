import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './updateUser.sass';
import { useAppSelector } from '../../store/hooks';
import { IUser } from '../../store/usersSlice';

const UpdateUser: FC = () => {
  const [user, setUser] = useState<IUser | null>();
  const users = useAppSelector((state) => state.usersReducer.users);
  const navigate = useNavigate();
  const params = useParams();
  console.log(user);

  useEffect(() => {
    let user = users.find((user) => user.id.toString() === params.id);
    setUser(user);
  }, []);

  const cancelHandler = () => {
    navigate('/users');
  };

  if (!user) return <>error</>;

  return (
    <div className="updateUser">
      <h1 className="updateUser__title">Пользователь</h1>
      <form className="updateUser__form">
        <label className="updateUser__form-name">
          Имя
          <input type="text" value={user.name} />
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
