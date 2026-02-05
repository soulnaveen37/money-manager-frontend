import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const TransactionModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('income');
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    category: '',
    division: 'Personal',
    date: new Date().toISOString().split('T')[0],
  });

  const categories = {
    income: ['Salary', 'Freelance', 'Investment', 'Gift', 'Bonus'],
    expense: ['Food', 'Fuel', 'Movie', 'Medical', 'Loan', 'Entertainment'],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting:', { ...formData, type: activeTab });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Add Transaction</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            <FaTimes />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('income')}
            className={`pb-3 font-semibold transition ${
              activeTab === 'income'
                ? 'text-green-600 border-b-2 border-green-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Income
          </button>
          <button
            onClick={() => setActiveTab('expense')}
            className={`pb-3 font-semibold transition ${
              activeTab === 'expense'
                ? 'text-red-600 border-b-2 border-red-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Expense
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="e.g., Monthly Salary"
              className="input-field"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Amount
            </label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="0.00"
              className="input-field"
              step="0.01"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="input-field"
              required
            >
              <option value="">Select Category</option>
              {categories[activeTab].map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Division
            </label>
            <select
              name="division"
              value={formData.division}
              onChange={handleChange}
              className="input-field"
            >
              <option value="Personal">Personal</option>
              <option value="Office">Office</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="btn-outline flex-1"
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`flex-1 px-6 py-2 text-white rounded-lg font-medium transition ${
                activeTab === 'income'
                  ? 'bg-green-600 hover:bg-green-700'
                  : 'bg-red-600 hover:bg-red-700'
              }`}
            >
              Add {activeTab === 'income' ? 'Income' : 'Expense'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TransactionModal;
