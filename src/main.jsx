import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/Home/Home.jsx';
import Client from './pages/Client/Dashboard.jsx';
// import Admin from './pages/Admin/Admin.jsx';
import Navbar from './pages/Home/Nav.jsx'; // Adjust path as necessary
import Hero2 from './pages/Home/hero2';
import { useState } from 'react';
// import WhyChooseUs from './pages/Home/Whyus';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfileImage, setUserProfileImage] = useState(null);

  // Simulating login/logout state
  const handleLogin = () => {
    setIsLoggedIn(true);
    setUserProfileImage('path-to-profile-image.jpg'); // Set a valid image path
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserProfileImage(null);
  };

  return (
    <React.StrictMode>
      <Router>
        <Navbar isLoggedIn={isLoggedIn} userProfileImage={userProfileImage} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/client" element={<Client />} />
          {/* <Route path="/admin" element={<Admin />} /> */}
          {/* <Route path="/signin" element={<SignIn onLogin={handleLogin} />} /> */}
          {/* <Route path="/signup" element={<SignUp />} /> */}
        </Routes>
      </Router>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);