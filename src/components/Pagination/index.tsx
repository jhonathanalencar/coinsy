import { CaretDoubleLeft, CaretDoubleRight } from 'phosphor-react';

import * as S from './styles';

export function Pagination() {
  return (
    <S.PaginationContainer className='container'>
      <S.PaginationButton>
        <CaretDoubleLeft />
        <span>Previous</span>
      </S.PaginationButton>
      <S.PagesContainer>
        <S.PageButton>1</S.PageButton>
        <S.PageButton>2</S.PageButton>
        <S.PageButton>3</S.PageButton>
        <S.PageButton>4</S.PageButton>
        <S.PageButton>5</S.PageButton>
      </S.PagesContainer>
      <S.PaginationButton>
        <span>Next</span>
        <CaretDoubleRight />
      </S.PaginationButton>

      <S.SmallScreenButtons className='container'>
        <S.PaginationButton>
          <CaretDoubleLeft />
        </S.PaginationButton>
        <S.PaginationButton>
          <CaretDoubleRight />
        </S.PaginationButton>
      </S.SmallScreenButtons>
    </S.PaginationContainer>
  );
}
