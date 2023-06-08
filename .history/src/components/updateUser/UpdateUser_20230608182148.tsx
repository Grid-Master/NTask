import { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import './updateUser.sass';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addUser, updateUser } from '../../store/usersSlice';
import { create } from 'domain';

const UpdateUser: FC = () => {
  const [name, setName] = useState<string>();
  const [date, setDate] = useState<string>();
  const users = useAppSelector((state) => state.usersReducer.users);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!pathname.includes('/createuser')) {
      let user = users.find((user) => user.id.toString() === params.id);
      setName(user?.name);
      setDate(user?.date.split('.').reverse().join('-'));
    } else {
      setName('');
    }
  }, []);

  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const dateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const cancelHandler = () => {
    navigate('/NTask/users');
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    if (!pathname.includes('/createuser')) {
      if (name && date && params.id) {
        const updatedUser = {
          id: +params.id,
          name,
          date: date.split('-').reverse().join('.'),
        };
        dispatch(updateUser(updatedUser));
        alert('Данные пользователя успешно обновлены');
        navigate('/NTask/users');
      }
    } else {
      if (name && date) {
        const createdUser = {
          id: new Date().getTime(),
          name,
          date: date.split('-').reverse().join('.'),
        };
        dispatch(addUser(createdUser));
        alert('Пользователь успешно создан');
        navigate('/NTask/users');
      }
    }
  };

  if (name === undefined) return <>Error</>;

  return (
    <div className="updateUser">
      <h1 className="updateUser__title">Пользователь</h1>
      <form className="updateUser__form" onSubmit={submitHandler}>
        <label className="updateUser__form-name">
          Имя
          <input type="text" value={name} onChange={nameHandler} placeholder="Введите ваше имя" />
        </label>
        <label className="updateUser__form-date">
          Дата рождения
          <input type="date" value={date} onChange={dateHandler} />
        </label>
        <div className="updateUser__form-btns">
          <button className="updateUser__form-btns-cancel" onClick={cancelHandler}>
            Отмена
          </button>
          {pathname.includes('/createuser') ? (
            <button className="updateUser__form-btns-update">Создать</button>
          ) : (
            <button className="updateUser__form-btns-update" type="submit">
              Изменить
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
