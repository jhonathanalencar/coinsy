import { SummaryCard } from '../SummaryCard';

import * as S from './styles';

export function Summary() {
  return (
    <S.SummaryContainer className='container'>
      <SummaryCard title='Balance' amount={13000} type='balance' variant />
      <SummaryCard title='Income' amount={7000} type='income' />
      <SummaryCard title='Expense' amount={5000} type='expense' />
    </S.SummaryContainer>
  );
}
