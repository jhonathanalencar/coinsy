import { CurrencyCircleDollar, ArrowCircleUp, ArrowCircleDown } from 'phosphor-react';
import { priceFormatter } from '../../utils/formatter';

import * as S from './styles';

interface SummaryCard {
  title: string;
  amount: number;
  type: 'balance' | 'income' | 'expense';
  variant?: boolean;
}

const summaryCardIcon = {
  balance: <CurrencyCircleDollar />,
  income: <ArrowCircleUp />,
  expense: <ArrowCircleDown />,
};

export function SummaryCard({ title, amount, type, variant }: SummaryCard) {
  return (
    <S.CardContainer type={type} variant={variant}>
      <header>
        <span>{title}</span>
        {summaryCardIcon[type]}
      </header>
      <strong>{priceFormatter.format(amount)}</strong>
    </S.CardContainer>
  );
}
