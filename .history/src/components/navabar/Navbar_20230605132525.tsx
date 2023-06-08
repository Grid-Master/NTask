import { FC } from 'react';
import './navbar.sass';
import { useNavigate } from 'react-router-dom';
const logo = require('../../images/logo.png');

const Navbar: FC = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="navbar__imagecontainer">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar__item navbar__active">Пользователи</div>
      <div className="navbar__item" onClick={() => navigate('gallery')}>
        Галерея
      </div>
    </div>
  );
};

export default Navbar;
