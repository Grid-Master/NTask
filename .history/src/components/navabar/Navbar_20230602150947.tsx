import { FC } from 'react';
import logo from '../../images/logo.png';

const Navbar: FC = () => {
  return (
    <div className="navbar">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>Пользователи</div>
      <div>Галерея</div>
    </div>
  );
};

export default Navbar;
