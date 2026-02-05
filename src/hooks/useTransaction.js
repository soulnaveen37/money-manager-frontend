import { useTransactionStore } from '../utils/store';
import { useCallback } from 'react';

export const useTransaction = () => {
  const {
    transactions,
    filters,
    setTransactions,
    addTransaction,
    updateTransaction,
    deleteTransaction,
    setFilters,
    clearFilters,
  } = useTransactionStore();

  const filteredTransactions = useCallback(() => {
    let filtered = transactions;

    if (filters.category) {
      filtered = filtered.filter(t => t.category === filters.category);
    }

    if (filters.division) {
      filtered = filtered.filter(t => t.division === filters.division);
    }

    if (filters.startDate && filters.endDate) {
      filtered = filtered.filter(t => {
        const txDate = new Date(t.transactionDate);
        return txDate >= new Date(filters.startDate) && txDate <= new Date(filters.endDate);
      });
    }

    return filtered;
  }, [transactions, filters]);

  return {
    transactions,
    filters,
    filteredTransactions: filteredTransactions(),
    setTransactions,
    addTransaction,
    updateTransaction,
    deleteTransaction,
    setFilters,
    clearFilters,
  };
};
