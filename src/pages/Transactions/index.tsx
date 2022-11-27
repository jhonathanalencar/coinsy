import { Header, Summary } from '../../components';

import * as S from './styles';
import { TransactionsList } from './components/TransactionsList';
import { SearchBar } from '../../components/SearchBar';

export function Transactions() {
  return (
    <S.TransactionsContainer>
      <Header />
      <Summary />
      <SearchBar />
      <TransactionsList />
    </S.TransactionsContainer>
  );
}
