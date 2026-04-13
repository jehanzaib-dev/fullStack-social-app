import {Routes, Route} from 'react-router-dom';


import HomePage from './pages/home/home.jsx';
import LoginPage from './pages/login/login.jsx';
import ProfilePage from './pages/profile/profile.jsx';
import RegisterPage from './pages/register/register.jsx';

function App() {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/profile/:username" element={<ProfilePage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
    </Routes>
  );
}

export default App;
