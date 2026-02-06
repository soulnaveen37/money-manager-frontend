import React from 'react';
import { Link } from 'react-router-dom';
import { FaBell, FaUser } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
      <div className="text-lg font-semibold text-gray-800">
        Money Manager Dashboard
      </div>
      
      <div className="flex items-center gap-6">
        <button className="relative text-gray-600 hover:text-gray-900">
          <FaBell size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <Link to="/profile" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition">
          <FaUser size={18} />
          <span className="text-sm font-medium">Profile</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
