import { useState, useEffect, ReactNode, useCallback } from 'react';
import { createContext } from 'use-context-selector';
import { api } from '../libs/axios';

export type TransactionType = {
  id: string;
  description: string;
  price: number;
  type: 'income' | 'expense';
  category: string;
  createdAt: Date;
};

type CreateTransactionData = Omit<TransactionType, 'id' | 'createdAt'>;

interface TransactionsContextData {
  transactions: TransactionType[];
  isLoading: boolean;
  selectedTransaction: TransactionType | null;
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (transaction: CreateTransactionData) => Promise<void>;
  selectTransaction: (data: TransactionType | null) => void;
  deleteTransaction: (data: Pick<TransactionType, 'id'>) => Promise<void>;
}

interface TransactionsContextProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionsContextData);

export function TransactionsContextProvider({ children }: TransactionsContextProviderProps) {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);
  const [selectedTransaction, setSelectedTransaction] = useState<TransactionType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTransactions = useCallback(async (query?: string) => {
    setIsLoading(true);

    const result = await api.get<TransactionType[]>('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    });

    setTransactions(result.data);
    setIsLoading(false);
  }, []);

  const createTransaction = useCallback(async (transaction: CreateTransactionData) => {
    setIsLoading(true);

    const result = await api.post<TransactionType>('/transactions', {
      ...transaction,
      createdAt: new Date(),
    });

    setTransactions((prev) => {
      return [result.data, ...prev];
    });
    setIsLoading(false);
  }, []);

  const deleteTransaction = useCallback(async (data: Pick<TransactionType, 'id'>) => {
    setIsLoading(true);

    await api.delete(`/transactions/${data.id}`);

    setTransactions((prev) => prev.filter((transaction) => transaction.id !== data.id));
    setIsLoading(false);
  }, []);

  const selectTransaction = useCallback((data: TransactionType | null) => {
    setSelectedTransaction(data);
  }, []);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        isLoading,
        selectedTransaction,
        fetchTransactions,
        createTransaction,
        selectTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
