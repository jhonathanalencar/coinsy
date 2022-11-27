import { useMemo } from 'react';
import { useContextSelector } from 'use-context-selector';
import { TransactionsContext } from '../contexts/TransactionsContext';

export function useSummary() {
  const transactions = useContextSelector(TransactionsContext, (context) => context.transactions);

  const { balance, expense, income } = useMemo(() => {
    return transactions.reduce(
      (accumulator, transaction) => {
        if (transaction.type === 'expense') {
          accumulator.expense += transaction.price;
          accumulator.balance -= transaction.price;
        } else {
          accumulator.income += transaction.price;
          accumulator.balance += transaction.price;
        }

        return accumulator;
      },
      {
        income: 0,
        expense: 0,
        balance: 0,
      },
    );
  }, [transactions]);

  return {
    income,
    expense,
    balance,
  };
}
