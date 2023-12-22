// Navbar.jsx

import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { user, logOut } = useAuth();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or App Name */}
        <div>
          <Link to="/" className="text-white text-lg font-bold">
            TaskManager
          </Link>
        </div>

        {/* Navigation Links */}
        <div className={`space-x-4 lg:flex ${showMenu ? 'flex' : 'hidden'}`}>
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/register" className="text-white">
            Register
          </Link>
          <Link to="/login" className="text-white">
            Login
          </Link>
          <Link to="/dashboard" className="text-white">
            Dashboard
          </Link>
        </div>

        {/* Display User Info */}
        {user && (
          <div className="flex items-center space-x-4">
            <span className="text-white">{user.displayName}</span>
            {user.photoURL && (
              <img
                src={user.photoURL}
                alt={user.displayName}
                className="w-8 h-8 rounded-full"
              />
            )}
            <button
              onClick={logOut}
              className="text-white hover:underline focus:outline-none"
            >
              Log Out
            </button>
          </div>
        )}

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
