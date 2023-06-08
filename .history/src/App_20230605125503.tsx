import './App.css';
import { FC, useEffect } from 'react';
import Navbar from './components/navabar/Navbar';
import UserList from './components/userList/UserList';
import { Routes, Route, useNavigate } from 'react-router-dom';

const App: FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/users');
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/users" element={<UserList />} />
      </Routes>
    </div>
  );
};

export default App;
