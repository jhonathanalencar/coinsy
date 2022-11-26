import { Header, Summary } from '../../components';

import * as S from './styles';
import { TransactionsList } from './components/TransactionsList';

export function Transactions() {
  return (
    <S.TransactionsContainer>
      <Header />
      <Summary />

      <TransactionsList />
    </S.TransactionsContainer>
  );
}
