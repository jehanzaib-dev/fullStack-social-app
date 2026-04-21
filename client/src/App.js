import {Routes, Route, Navigate} from 'react-router-dom';
import {useContext} from 'react';
import {AuthContext} from './context/authContext.js';




import HomePage from './pages/home/home.jsx';
import LoginPage from './pages/login/login.jsx';
import ProfilePage from './pages/profile/profile.jsx';
import RegisterPage from './pages/register/register.jsx';

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Routes>
      {/* Home */}
      <Route
        path="/"
        element={user ? <HomePage /> : <Navigate to="/login" />}
      />

      {/* Login */}
      <Route
        path="/login"
        element={!user ? <LoginPage /> : <Navigate to="/" />}
      />

      {/* Register */}
      <Route
        path="/register"
        element={!user ? <RegisterPage /> : <Navigate to="/" />}
      />

      {/* Profile (PROTECTED) */}
      <Route
        path="/profile/:username"
        element={user ? <ProfilePage /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}
export default App;