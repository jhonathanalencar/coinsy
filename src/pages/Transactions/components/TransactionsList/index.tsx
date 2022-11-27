import { useContextSelector } from 'use-context-selector';
import PulseLoader from 'react-spinners/PulseLoader';

import { TransactionsContext } from '../../../../contexts/TransactionsContext';
import { PaginationContext } from '../../../../contexts/PaginationContext';
import { dateFormatter, priceFormatter } from '../../../../utils/formatter';

import * as S from './styles';

export function TransactionsList() {
  const isLoading = useContextSelector(TransactionsContext, (context) => context.isLoading);
  const transactions = useContextSelector(TransactionsContext, (context) => context.transactions);
  const selectTransaction = useContextSelector(
    TransactionsContext,
    (context) => context.selectTransaction,
  );

  const listStart = useContextSelector(
    PaginationContext,
    (context) => context.indexOfFirstTransaction,
  );
  const listEnd = useContextSelector(
    PaginationContext,
    (context) => context.indexOfLastTransaction,
  );

  if (isLoading) {
    return (
      <S.LoaderContainer>
        <PulseLoader size={24} color='#e1e1e1' />
      </S.LoaderContainer>
    );
  }

  if (!transactions) {
    return (
      <S.ErrorMessage className='container'>
        <span>Something went wrong. Please try later.</span>
      </S.ErrorMessage>
    );
  }

  if (!transactions.length) {
    return (
      <S.ErrorMessage>
        <span>No transactions found</span>
      </S.ErrorMessage>
    );
  }

  return (
    <S.TransactionsTable className='container'>
      <tbody>
        {transactions.slice(listStart, listEnd).map((transaction) => {
          return (
            <tr key={transaction.id} onClick={() => selectTransaction(transaction)}>
              <td className='slide-down'>{transaction.description}</td>
              <td className={`variant-${transaction.type} slide-down`}>
                {transaction.type === 'expense' && '- '}
                {priceFormatter.format(transaction.price)}
              </td>
              <td className='slide-down'>{transaction.category}</td>
              <td className='slide-down'>
                {dateFormatter.format(new Date(transaction.createdAt))}
              </td>
            </tr>
          );
        })}
      </tbody>
    </S.TransactionsTable>
  );
}
