import { Header, Summary } from '../../components';

import * as S from './styles';
import { TransactionsList } from './components/TransactionsList';
import { SearchBar } from '../../components/SearchBar';
import { Pagination } from '../../components/Pagination';

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
