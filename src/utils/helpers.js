export const formatCurrency = (amount) => {
  // Use environment variable REACT_APP_CURRENCY if provided, default to INR
  const currency = (process.env.REACT_APP_CURRENCY || 'INR').toUpperCase();
  // Use locale based on currency (fallback to 'en-IN' for INR)
  const locale = currency === 'INR' ? 'en-IN' : 'en-US';

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);
};

export const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
};

export const calculateBalance = (income, expense) => {
  return income - expense;
};

export const isEditableWithin12Hours = (createdAt) => {
  const now = new Date();
  const created = new Date(createdAt);
  const hoursDiff = (now - created) / (1000 * 60 * 60);
  return hoursDiff < 12;
};

export const validateTransactionForm = (formData) => {
  const errors = {};
  
  if (!formData.description?.trim()) {
    errors.description = 'Description is required';
  }
  if (!formData.amount || formData.amount <= 0) {
    errors.amount = 'Amount must be greater than 0';
  }
  if (!formData.category) {
    errors.category = 'Category is required';
  }
  if (!formData.date) {
    errors.date = 'Date is required';
  }
  
  return errors;
};
