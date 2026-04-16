import {Routes, Route, Navigate} from 'react-router-dom';
import {useContext} from 'react';
import {AuthContext} from './context/authContext.js';




import HomePage from './pages/home/home.jsx';
import LoginPage from './pages/login/login.jsx';
import ProfilePage from './pages/profile/profile.jsx';
import RegisterPage from './pages/register/register.jsx';

function App() {

  const {user}=useContext(AuthContext);

  return (
    <Routes>
        <Route path="/" element={user ? <HomePage/>:<RegisterPage/>}/>
        <Route path="/login" element={user ? <Navigate to="/"/>:<LoginPage/>}/>
        <Route path="/profile/:username" element={<ProfilePage/>}/>
        <Route path="/register" element={user ? <Navigate to="/" />:<RegisterPage/>}/>
    </Routes>
  );
}

export default App;
