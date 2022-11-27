import { Header, Summary, SearchBar, Pagination } from '../../components';
import { TransactionsList } from './components/TransactionsList';

import * as S from './styles';

export function Transactions() {
  return (
    <S.TransactionsContainer>
      <Header />
      <Summary />
      <SearchBar />

      <TransactionsList />
      <Pagination />
    </S.TransactionsContainer>
  );
}
