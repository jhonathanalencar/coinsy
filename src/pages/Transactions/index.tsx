import { Header, Summary, SearchBar, Pagination } from '../../components';
import { UpdateButton } from '../../components/UpdateButton';
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
      <UpdateButton />
    </S.TransactionsContainer>
  );
}
