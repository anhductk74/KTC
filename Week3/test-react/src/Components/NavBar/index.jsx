import React from 'react';
import { NavLink } from 'react-router';

const NavBar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
      : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium";

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-between sm:justify-start">
            <h1 className="text-white text-2xl font-bold mr-6">Test App</h1>
            <div className="hidden sm:flex space-x-4">
              <NavLink to="/" className={linkClass}>Home</NavLink>
                <NavLink to="/cart" className={linkClass}>Cart</NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
