import { FC } from 'react';
import './navbar.sass';
const logo = require('../../images/logo.png');

const Navbar: FC = () => {
  return (
    <div className="navbar">
      <div className="navbar__imagecontainer">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar__item">Пользователи</div>
      <div>Галерея</div>
    </div>
  );
};

export default Navbar;
