import * as Dialog from '@radix-ui/react-dialog';
import { X, ArrowCircleUp, ArrowCircleDown } from 'phosphor-react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useContextSelector } from 'use-context-selector';
import ScaleLoader from 'react-spinners/ScaleLoader';

import { TransactionsContext } from '../../contexts/TransactionsContext';

import * as S from './styles';

const NewTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'expense']),
});

type NewTransactionFormInputs = z.infer<typeof NewTransactionFormSchema>;

export function NewTransactionModal() {
  const createNewTransaction = useContextSelector(
    TransactionsContext,
    (context) => context.createTransaction,
  );

  const {
    register,
    reset,
    control,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(NewTransactionFormSchema),
    defaultValues: {
      type: 'income',
    },
  });

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    try {
      await createNewTransaction(data);
      reset();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Dialog.Portal>
      <S.DialogOverlay>
        <S.DialogContent>
          <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
            <S.DialogClose disabled={isSubmitting}>
              <X weight='bold' />
            </S.DialogClose>
            <S.DialogTitle>Add new transaction</S.DialogTitle>
            <label htmlFor='description'>Description</label>
            <input type='text' placeholder='Description' required {...register('description')} />
            <label htmlFor='price'>Price</label>
            <input
              type='number'
              placeholder='Price'
              required
              {...register('price', { valueAsNumber: true })}
            />
            <label htmlFor='category'>Category</label>
            <input type='text' placeholder='Category' required {...register('category')} />
            <Controller
              name='type'
              control={control}
              render={({ field }) => (
                <S.ToggleGroupRoot type='single' onValueChange={field.onChange} {...field}>
                  <S.ToggleGroupItem value='income' variant='income'>
                    <span>Income</span>
                    <ArrowCircleUp />
                  </S.ToggleGroupItem>
                  <S.ToggleGroupItem value='expense' variant='expense'>
                    <span>Expense</span>
                    <ArrowCircleDown />
                  </S.ToggleGroupItem>
                </S.ToggleGroupRoot>
              )}
            />
            <button type='submit' disabled={isSubmitting}>
              {isSubmitting ? <ScaleLoader height={26} color='#e1e1e1' /> : 'Add'}
            </button>
          </form>
        </S.DialogContent>
      </S.DialogOverlay>
    </Dialog.Portal>
  );
}
