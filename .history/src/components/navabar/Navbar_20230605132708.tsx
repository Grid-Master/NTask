import { FC } from 'react';
import './navbar.sass';
import { useNavigate, useParams } from 'react-router-dom';
const logo = require('../../images/logo.png');

const Navbar: FC = () => {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);

  return (
    <div className="navbar">
      <div className="navbar__imagecontainer">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar__item navbar__active" onClick={() => navigate('users')}>
        Пользователи
      </div>
      <div className="navbar__item" onClick={() => navigate('gallery')}>
        Галерея
      </div>
    </div>
  );
};

export default Navbar;