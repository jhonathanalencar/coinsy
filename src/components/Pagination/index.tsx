import { useContextSelector } from 'use-context-selector';
import { CaretDoubleLeft, CaretDoubleRight } from 'phosphor-react';

import { PaginationContext } from '../../contexts/PaginationContext';

import * as S from './styles';

export function Pagination() {
  const pages = useContextSelector(PaginationContext, (context) => context.currentPages);
  const handleNextPage = useContextSelector(PaginationContext, (context) => context.handleNextPage);
  const handlePreviousPage = useContextSelector(
    PaginationContext,
    (context) => context.handlePreviousPage,
  );
  const handleChangePage = useContextSelector(
    PaginationContext,
    (context) => context.handleChangePage,
  );
  const disable = useContextSelector(PaginationContext, (context) => context.disable);

  return (
    <S.PaginationContainer className='container'>
      <S.PaginationButton type='button' onClick={handlePreviousPage} disabled={disable.prev}>
        <CaretDoubleLeft />
        <span>Previous</span>
      </S.PaginationButton>
      <S.PagesContainer>
        {pages.map((page) => {
          return (
            <S.PageButton key={page} onClick={() => handleChangePage(page)}>
              {page}
            </S.PageButton>
          );
        })}
      </S.PagesContainer>
      <S.PaginationButton type='button' onClick={handleNextPage} disabled={disable.next}>
        <span>Next</span>
        <CaretDoubleRight />
      </S.PaginationButton>

      <S.SmallScreenButtons className='container'>
        <S.PaginationButton type='button' onClick={handlePreviousPage} disabled={disable.prev}>
          <CaretDoubleLeft />
        </S.PaginationButton>

        <S.PaginationButton type='button' onClick={handleNextPage} disabled={disable.next}>
          <CaretDoubleRight />
        </S.PaginationButton>
      </S.SmallScreenButtons>
    </S.PaginationContainer>
  );
}
