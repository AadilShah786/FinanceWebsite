import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaSignInAlt, FaUserPlus, FaUserCircle } from 'react-icons/fa';

const Navbar = ({ isLoggedIn, userProfileImage }) => {
  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link to="/">Logo</Link>
        </div>
        
        {/* Center Option Buttons */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-400 flex items-center gap-1">
            <FaHome /> Home
          </Link>
          <Link to="/client" className="hover:text-gray-400 flex items-center gap-1">
            <FaUser /> Client
          </Link>
          <Link to="/admin" className="hover:text-gray-400 flex items-center gap-1">
            <FaUserCircle /> Admin
          </Link>
        </div>

        {/* Sign In Options */}
        <div className="flex space-x-6 items-center">
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              {userProfileImage ? (
                <img
                  src={userProfileImage}
                  alt="User Profile"
                  className="w-8 h-8 rounded-full"
                />
              ) : (
                <FaUserCircle size={24} />
              )}
              <button className="hover:text-gray-400" onClick={() => {/* handle logout */}}>
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link to="/signin" className="hover:text-gray-400 flex items-center gap-1">
                <FaSignInAlt /> Sign In
              </Link>
              <Link to="/signup" className="hover:text-gray-400 flex items-center gap-1">
                <FaUserPlus /> Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
