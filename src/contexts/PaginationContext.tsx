import { useCallback, useState, ReactNode } from 'react';
import { createContext, useContextSelector } from 'use-context-selector';

import { TransactionsContext } from './TransactionsContext';

interface PaginationContextData {
  activePage: number;
  indexOfLastTransaction: number;
  indexOfFirstTransaction: number;
  currentPages: number[];
  disable: {
    next: boolean;
    prev: boolean;
  };
  handleChangePage: (page: number) => void;
  handlePreviousPage: () => void;
  handleNextPage: () => void;
}

interface PaginationContextProviderProps {
  children: ReactNode;
}

export const PaginationContext = createContext({} as PaginationContextData);

export function PaginationContextProvider({ children }: PaginationContextProviderProps) {
  const transactions = useContextSelector(TransactionsContext, (context) => context.transactions);
  const [activePage, setActivePage] = useState(1);
  const [startPage, setStartPage] = useState(0);

  const transactionsPerPage = 10;
  const maxPageAmount = 5;

  const totalPages = Math.ceil(transactions.length / transactionsPerPage);

  const pages = Array(totalPages)
    .fill(0)
    .map((_item, i) => i + 1);

  const currentPages = pages.slice(startPage, startPage + maxPageAmount);

  const indexOfLastTransaction = activePage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;

  const disableNext = startPage + maxPageAmount === totalPages || totalPages < maxPageAmount;
  const disablePrev = startPage === 0;

  const disable = { next: disableNext, prev: disablePrev };

  const handleChangePage = useCallback((page: number) => {
    setActivePage(page);
  }, []);

  const handleNextPage = useCallback(() => {
    const nextPages = startPage + maxPageAmount;

    const difference = totalPages - nextPages;

    if (difference < maxPageAmount) {
      setStartPage((prev) => prev + difference);
    } else {
      setStartPage((prev) => prev + maxPageAmount);
    }
  }, [startPage, totalPages]);

  const handlePreviousPage = useCallback(() => {
    const previousPages = startPage - maxPageAmount;

    const difference = startPage - previousPages;

    if (difference < maxPageAmount || previousPages <= 0) {
      setStartPage(0);
    } else {
      setStartPage((prev) => prev - maxPageAmount);
    }
  }, [startPage]);

  return (
    <PaginationContext.Provider
      value={{
        activePage,
        indexOfFirstTransaction,
        indexOfLastTransaction,
        currentPages,
        disable,
        handleChangePage,
        handlePreviousPage,
        handleNextPage,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
}
