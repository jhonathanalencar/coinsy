import { useState, useEffect, ReactNode } from 'react';
import { createContext } from 'use-context-selector';
import { api } from '../libs/axios';

type TransactionType = {
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
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (transaction: CreateTransactionData) => Promise<void>;
}

interface TransactionsContextProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionsContextData);

export function TransactionsContextProvider({ children }: TransactionsContextProviderProps) {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);

  async function fetchTransactions(query?: string) {
    const result = await api.get<TransactionType[]>('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    });

    setTransactions(result.data);
  }

  async function createTransaction(transaction: CreateTransactionData) {
    const result = await api.post<TransactionType>('/transactions', {
      ...transaction,
      createdAt: new Date(),
    });

    setTransactions((prev) => {
      return [result.data, ...prev];
    });
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
