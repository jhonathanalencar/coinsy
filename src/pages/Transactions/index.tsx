import { useContextSelector } from 'use-context-selector';
import { Header, Summary, SearchBar, Pagination } from '../../components';
import { UpdateButton } from '../../components/UpdateButton';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { TransactionsList } from './components/TransactionsList';

import * as S from './styles';

export function Transactions() {
  const isSelected = useContextSelector(
    TransactionsContext,
    (context) => context.selectedTransaction,
  );

  return (
    <S.TransactionsContainer>
      <Header />
      <Summary />
      <SearchBar />

      <TransactionsList />
      <Pagination />

      {isSelected && <UpdateButton />}
    </S.TransactionsContainer>
  );
}
