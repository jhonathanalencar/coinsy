import { ReactNode } from 'react';
import { useContextSelector } from 'use-context-selector';

import { TransactionsContext } from '../../../../contexts/TransactionsContext';
import { dateFormatter, priceFormatter } from '../../../../utils/formatter';

import * as S from './styles';

export function TransactionsList() {
  const transactions = useContextSelector(TransactionsContext, (context) => context.transactions);

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
          <td>{transaction.description}</td>
          <td className={`variant-${transaction.type}`}>
            {transaction.type === 'expense' && '-'}
            {priceFormatter.format(transaction.price)}
          </td>
          <td>{transaction.category}</td>
          <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
        </tr>
      );
    });
  }

  return (
    <S.TransactionsTable className='container'>
      <tbody>{content}</tbody>
    </S.TransactionsTable>
  );
}
