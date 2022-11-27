import { ReactNode } from 'react';
import { useContextSelector } from 'use-context-selector';
import PulseLoader from 'react-spinners/PulseLoader';

import { TransactionsContext } from '../../../../contexts/TransactionsContext';
import { dateFormatter, priceFormatter } from '../../../../utils/formatter';

import * as S from './styles';

export function TransactionsList() {
  const transactions = useContextSelector(TransactionsContext, (context) => context.transactions);
  const isLoading = useContextSelector(TransactionsContext, (context) => context.isLoading);

  let content: ReactNode;
  if (!transactions) {
    content = (
      <S.ErrorMessage>
        <td>Something went wrong. Please try later.</td>
      </S.ErrorMessage>
    );
  } else if (!transactions.length) {
    content = (
      <S.ErrorMessage>
        <td>No transactions found</td>
      </S.ErrorMessage>
    );
  } else {
    content = transactions.map((transaction) => {
      return (
        <tr key={transaction.id}>
          <td className='slide-down'>{transaction.description}</td>
          <td className={`variant-${transaction.type} slide-down`}>
            {transaction.type === 'expense' && '-'}
            {priceFormatter.format(transaction.price)}
          </td>
          <td className='slide-down'>{transaction.category}</td>
          <td className='slide-down'>{dateFormatter.format(new Date(transaction.createdAt))}</td>
        </tr>
      );
    });
  }

  return (
    <>
      {isLoading ? (
        <S.LoaderContainer>
          <PulseLoader size={24} color='#e1e1e1' />
        </S.LoaderContainer>
      ) : (
        <S.TransactionsTable className='container'>
          <tbody>{content}</tbody>
        </S.TransactionsTable>
      )}
    </>
  );
}
