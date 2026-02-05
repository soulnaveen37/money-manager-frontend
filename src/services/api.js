import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const transactionService = {
  // Transaction endpoints
  getAllTransactions: (params) => apiClient.get('/transactions', { params }),
  getTransactionById: (id) => apiClient.get(`/transactions/${id}`),
  createTransaction: (data) => apiClient.post('/transactions', data),
  updateTransaction: (id, data) => apiClient.put(`/transactions/${id}`, data),
  deleteTransaction: (id) => apiClient.delete(`/transactions/${id}`),
  
  // Filter endpoints
  getTransactionsByDateRange: (startDate, endDate) => 
    apiClient.get('/transactions/filter/date-range', { 
      params: { startDate, endDate } 
    }),
  getTransactionsByCategory: (category) => 
    apiClient.get('/transactions/filter/category', { params: { category } }),
  getTransactionsByDivision: (division) => 
    apiClient.get('/transactions/filter/division', { params: { division } }),
};

export const dashboardService = {
  // Dashboard endpoints
  getMonthlyReport: (month, year) => 
    apiClient.get('/dashboard/monthly', { params: { month, year } }),
  getWeeklyReport: (week, year) => 
    apiClient.get('/dashboard/weekly', { params: { week, year } }),
  getYearlyReport: (year) => 
    apiClient.get('/dashboard/yearly', { params: { year } }),
  getCategoryReport: () => apiClient.get('/dashboard/categories'),
};

export const accountService = {
  // Account endpoints
  getAccounts: () => apiClient.get('/accounts'),
  createAccount: (data) => apiClient.post('/accounts', data),
  updateAccount: (id, data) => apiClient.put(`/accounts/${id}`, data),
  transferFunds: (data) => apiClient.post('/accounts/transfer', data),
};

export default apiClient;
