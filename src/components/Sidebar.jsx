import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaChartLine, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white p-6 hidden md:flex flex-col">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-blue-400">💰 Money Manager</h1>
      </div>
      
      <nav className="flex-1 space-y-4">
        <Link 
          to="/" 
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition"
        >
          <FaHome size={20} />
          <span>Home</span>
        </Link>
        
        <Link 
          to="/dashboard" 
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition"
        >
          <FaChartLine size={20} />
          <span>Dashboard</span>
        </Link>
      </nav>
      
      <div className="border-t border-gray-700 pt-4">
        <Link to="/settings" className="flex items-center gap-3 p-3 w-full rounded-lg hover:bg-gray-800 transition">
          <FaCog size={20} />
          <span>Settings</span>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
