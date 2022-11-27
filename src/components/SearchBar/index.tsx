import { useContextSelector } from 'use-context-selector';
import { MagnifyingGlass } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { TransactionsContext } from '../../contexts/TransactionsContext';

import * as S from './styles';

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchBar() {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => context.fetchTransactions,
  );

  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query);
  }

  return (
    <S.SearchBarContainer className='container'>
      <form onSubmit={handleSubmit(handleSearchTransactions)}>
        <label htmlFor='query' className='visually-hidden'>
          Search transactions
        </label>
        <input id='query' type='text' placeholder='Search' {...register('query')} />
        <button disabled={isSubmitting}>
          <span>Search</span>
          <MagnifyingGlass />
        </button>
      </form>
    </S.SearchBarContainer>
  );
}
