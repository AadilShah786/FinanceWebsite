// index.js or main.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/Home/Home.jsx';
import Profile from './pages/Client/Profile';
import Client from './pages/Client/Dashboard';
// import Admin from './pages/Admin/Admin.jsx';
import Navbar from './pages/Home/Nav.jsx'; // Adjust path as necessary
import Hero2 from './pages/Home/hero2';
import SignIn from './pages/Home/SignIn';
// import WhyChooseUs from './pages/Home/Whyus';
import { AuthProvider } from './AuthProvider'; // Adjust the import based on your file structure
import ProtectedRoute from './ProtectedRoute'; // Import the ProtectedRoute component
import AdminRoute from './AdminRoute'; // Import the AdminRoute component
import AdminDashboard from './pages/Admin/AdminDashboard';

const App = () => {
  return (
    <React.StrictMode>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/client" element={<ProtectedRoute><Client /></ProtectedRoute>} /> */}
            <Route path="/signin" element={<SignIn />} />
            <Route path="/dev" element={<Client />} />
            {/* <Route path="/profile" element={<ProtectedRoute><Client /></ProtectedRoute>} /> */}
            <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
          </Routes>
        </Router>
      </AuthProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
