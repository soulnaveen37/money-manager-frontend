import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import TransactionModal from '../components/TransactionModal';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-6 animate-fadeIn">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to Money Manager</h1>
        <p className="text-gray-600">Manage your personal and business finances with ease</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card">
          <p className="text-gray-600 text-sm font-medium">Total Income</p>
          <p className="text-3xl font-bold text-green-600 mt-2">$5,432.00</p>
          <p className="text-xs text-gray-500 mt-2">This month</p>
        </div>

        <div className="card">
          <p className="text-gray-600 text-sm font-medium">Total Expenses</p>
          <p className="text-3xl font-bold text-red-600 mt-2">$2,156.00</p>
          <p className="text-xs text-gray-500 mt-2">This month</p>
        </div>

        <div className="card">
          <p className="text-gray-600 text-sm font-medium">Balance</p>
          <p className="text-3xl font-bold text-blue-600 mt-2">$3,276.00</p>
          <p className="text-xs text-gray-500 mt-2">Available</p>
        </div>
      </div>

      {/* Add Transaction Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        <FaPlus size={20} />
        Add Transaction
      </button>

      {/* Modal */}
      <TransactionModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      {/* Recent Transactions */}
      <div className="card mt-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Transactions</h2>
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">Grocery Shopping</p>
              <p className="text-xs text-gray-500">Food • Personal</p>
            </div>
            <p className="font-semibold text-red-600">-$85.50</p>
          </div>
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">Salary Deposit</p>
              <p className="text-xs text-gray-500">Salary • Office</p>
            </div>
            <p className="font-semibold text-green-600">+$3,500.00</p>
          </div>
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium text-gray-900">Fuel</p>
              <p className="text-xs text-gray-500">Fuel • Office</p>
            </div>
            <p className="font-semibold text-red-600">-$45.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
