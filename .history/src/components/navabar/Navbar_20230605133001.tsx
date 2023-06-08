import { FC } from 'react';
import './navbar.sass';
import { useNavigate, useLocation } from 'react-router-dom';
const logo = require('../../images/logo.png');

const Navbar: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div className="navbar">
      <div className="navbar__imagecontainer">
        <img src={logo} alt="logo" />
      </div>
      <div
        className={pathname === 'users' ? 'navbar__item navbar__active' : 'navbar__item'}
        onClick={() => navigate('users')}>
        Пользователи
      </div>
      <div className="navbar__item" onClick={() => navigate('gallery')}>
        Галерея
      </div>
    </div>
  );
};

export default Navbar;
