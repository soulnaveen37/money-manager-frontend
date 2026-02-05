import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const [timeFrame, setTimeFrame] = useState('month'); // month, week, year

  const monthlyData = [
    { name: 'Jan', income: 4000, expense: 2400 },
    { name: 'Feb', income: 3000, expense: 1398 },
    { name: 'Mar', income: 2000, expense: 9800 },
    { name: 'Apr', income: 2780, expense: 3908 },
    { name: 'May', income: 1890, expense: 4800 },
    { name: 'Jun', income: 2390, expense: 3800 },
  ];

  const weeklyData = [
    { name: 'Mon', income: 800, expense: 400 },
    { name: 'Tue', income: 600, expense: 300 },
    { name: 'Wed', income: 1200, expense: 800 },
    { name: 'Thu', income: 900, expense: 500 },
    { name: 'Fri', income: 1100, expense: 700 },
    { name: 'Sat', income: 500, expense: 600 },
    { name: 'Sun', income: 400, expense: 300 },
  ];

  const yearlyData = [
    { name: '2021', income: 24000, expense: 19000 },
    { name: '2022', income: 28000, expense: 22000 },
    { name: '2023', income: 32000, expense: 25000 },
    { name: '2024', income: 36000, expense: 28000 },
  ];

  const getChartData = () => {
    switch (timeFrame) {
      case 'week':
        return weeklyData;
      case 'year':
        return yearlyData;
      default:
        return monthlyData;
    }
  };

  const categoryData = [
    { category: 'Food', amount: 450, division: 'Personal' },
    { category: 'Fuel', amount: 120, division: 'Office' },
    { category: 'Movie', amount: 50, division: 'Personal' },
    { category: 'Medical', amount: 200, division: 'Personal' },
    { category: 'Loan', amount: 500, division: 'Personal' },
  ];

  return (
    <div className="p-6 animate-fadeIn">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Dashboard</h1>
        
        {/* Time Frame Selector */}
        <div className="flex gap-2">
          <button
            onClick={() => setTimeFrame('week')}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              timeFrame === 'week' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            Weekly
          </button>
          <button
            onClick={() => setTimeFrame('month')}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              timeFrame === 'month' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setTimeFrame('year')}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              timeFrame === 'year' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            Yearly
          </button>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="card">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Income vs Expenses</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={getChartData()}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="income" fill="#10B981" name="Income" />
              <Bar dataKey="expense" fill="#EF4444" name="Expenses" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Trend Analysis</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={getChartData()}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="income" stroke="#10B981" name="Income" />
              <Line type="monotone" dataKey="expense" stroke="#EF4444" name="Expenses" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Category Summary */}
      <div className="card">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Category Summary</h2>
        <div className="space-y-3">
          {categoryData.map((item, index) => (
            <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">{item.category}</p>
                <p className="text-xs text-gray-500">{item.division}</p>
              </div>
              <p className="font-semibold text-gray-900">${item.amount.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
