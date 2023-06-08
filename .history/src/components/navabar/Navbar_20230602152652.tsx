import { FC } from 'react';
import './navbar.sass';
const logo = require('../../images/logo.png');

const Navbar: FC = () => {
  return (
    <div className="navbar">
      <div className="navbar__imagecontainer">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar__item navbar__active">Пользователи</div>
      <div className="navbar__item">Галерея</div>
    </div>
  );
};

export default Navbar;
