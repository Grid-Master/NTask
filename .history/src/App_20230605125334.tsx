import './App.css';
import Navbar from './components/navabar/Navbar';
import UserList from './components/userList/UserList';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/users" element={<UserList />} />
      </Routes>
    </div>
  );
}

export default App;
