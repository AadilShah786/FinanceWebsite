import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaHome, FaSignInAlt, FaUserPlus, FaUserCircle } from 'react-icons/fa';

const Navbar = ({ isLoggedIn, userProfileImage }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 bg-opacity-80 text-white p-4 w-screen fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold block">
          <Link to="/">Logo</Link>
        </div>
        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <FaBars size={24} />
          </button>
        </div>

      

        {/* Center Option Buttons for Desktop */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-gray-400">Home</a>
          <a href="#Whyus" className="hover:text-gray-400">Why Choose Us?</a>
          <a href="#Pricing" className="hover:text-gray-400">Pricing</a>
          <a href="#Faq" className="hover:text-gray-400">FAQ</a>
          <a href="#Footer" className="hover:text-gray-400">Contact</a>
        </div>

        {/* Sign In Options */}
        <div className="space-x-6 items-center hidden md:flex">
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
              <button className="hover:text-gray-400" onClick={() => {/* handle logout */ }}>
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center space-y-4 mt-4">
            <a href="/" className="hover:text-gray-400">Home</a>
            <a href="#Whyus" className="hover:text-gray-400">Why Choose Us?</a>
            <a href="#Pricing" className="hover:text-gray-400">Pricing</a>
            <a href="#Faq" className="hover:text-gray-400">FAQ</a>
            <a href="#Footer" className="hover:text-gray-400">Contact</a>
            {isLoggedIn ? (
              <button className="hover:text-gray-400" onClick={() => {/* handle logout */ }}>
                Logout
              </button>
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
      )}
    </nav>
  );
};

export default Navbar;



{/* <Link to="/" className="hover:text-gray-400 flex items-center gap-1">
            <FaHome /> Home
          </Link>
          <Link to="/client" className="hover:text-gray-400 flex items-center gap-1">
            <FaUser /> Client
          </Link>
          <Link to="/admin" className="hover:text-gray-400 flex items-center gap-1">
            <FaUserCircle /> Admin
          </Link> */}