import { useSummary } from '../../hooks/useSummary';
import { SummaryCard } from '../SummaryCard';

import * as S from './styles';

export function Summary() {
  const { balance, expense, income } = useSummary();

  return (
    <S.SummaryContainer className='container'>
      <SummaryCard title='Balance' amount={balance} type='balance' variant />
      <SummaryCard title='Income' amount={income} type='income' />
      <SummaryCard title='Expense' amount={expense} type='expense' />
    </S.SummaryContainer>
  );
}
