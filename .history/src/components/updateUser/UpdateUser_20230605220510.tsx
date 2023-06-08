import { FC } from 'react';

const UpdateUser: FC = () => {
  return (
    <div className="updateUser">
      <h1>Пользователь</h1>
      <form>
        <label>
          <input type="text" />
        </label>
        <label>
          <input type="text" />
        </label>
        <div>
          <button></button>
          <button></button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
