import './App.css';
import { FC, useEffect } from 'react';
import Navbar from './components/navabar/Navbar';
import UserList from './components/userList/UserList';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Gallery from './components/gallery/Gallery';
import UpdateUser from './components/updateUser/UpdateUser';

const App: FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/NTask/users');
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/NTask/users" element={<UserList />} />
        <Route path="/NTask/users/:id" element={<UpdateUser />} />
        <Route path="/NTask/gallery" element={<Gallery />} />
        <Route path="*" element={<h1>Error</h1>} />
      </Routes>
    </div>
  );
};

export default App;
