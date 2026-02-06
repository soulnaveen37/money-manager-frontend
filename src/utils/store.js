import { create } from 'zustand';

export const useTransactionStore = create((set) => ({
  transactions: [],
  filters: {
    category: null,
    division: null,
    startDate: null,
    endDate: null,
  },

  setTransactions: (transactions) => set({ transactions }),
  addTransaction: (transaction) =>
    set((state) => ({
      transactions: [transaction, ...state.transactions],
    })),
  updateTransaction: (id, updated) =>
    set((state) => ({
      transactions: state.transactions.map((t) =>
        t.id === id ? { ...t, ...updated } : t
      ),
    })),
  deleteTransaction: (id) =>
    set((state) => ({
      transactions: state.transactions.filter((t) => t.id !== id),
    })),

  setFilters: (filters) => set({ filters }),
  clearFilters: () =>
    set({
      filters: {
        category: null,
        division: null,
        startDate: null,
        endDate: null,
      },
    }),
}));

export const useDashboardStore = create((set) => ({
  timeFrame: 'month',
  data: null,
  loading: false,

  setTimeFrame: (timeFrame) => set({ timeFrame }),
  setData: (data) => set({ data }),
  setLoading: (loading) => set({ loading }),
}));

export const useSettingsStore = create((set) => {
  // Load currency from localStorage on init
  const savedCurrency = typeof window !== 'undefined' ? localStorage.getItem('currency') : 'INR';
  
  return {
    currency: savedCurrency || 'INR',
    setCurrency: (currency) => {
      if (typeof window !== 'undefined') {
        localStorage.setItem('currency', currency);
      }
      set({ currency });
    },
  };
});
