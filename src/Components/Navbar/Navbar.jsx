// Navbar.jsx

import  { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or App Name */}
        <div>
          <Link to="/" className="text-white text-lg font-bold">TaskManager</Link>
        </div>

        {/* Navigation Links */}
        <div className={`space-x-4 lg:flex ${showMenu ? 'flex' : 'hidden'}`}>
          <Link to="/" className="text-white">Home</Link>
          <Link to="/tasks" className="text-white">Tasks</Link>
          <Link to="/projects" className="text-white">Projects</Link>
          <Link to="/settings" className="text-white">Settings</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
