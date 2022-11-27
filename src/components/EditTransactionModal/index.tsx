import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useContextSelector } from 'use-context-selector';
import ScaleLoader from 'react-spinners/ScaleLoader';

import { TransactionsContext } from '../../contexts/TransactionsContext';

import * as S from './styles';

const editTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'expense']),
});

type EditTransactionFormInputs = z.infer<typeof editTransactionFormSchema>;

export function EditTransactionModal() {
  const transaction = useContextSelector(
    TransactionsContext,
    (context) => context.selectedTransaction,
  );

  const isLoading = useContextSelector(TransactionsContext, (context) => context.isLoading);

  const selectTransaction = useContextSelector(
    TransactionsContext,
    (context) => context.selectTransaction,
  );

  const deleteTransaction = useContextSelector(
    TransactionsContext,
    (context) => context.deleteTransaction,
  );

  const updateTransaction = useContextSelector(
    TransactionsContext,
    (context) => context.updateTransaction,
  );

  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
    control,
  } = useForm<EditTransactionFormInputs>({
    resolver: zodResolver(editTransactionFormSchema),
    defaultValues: {
      type: transaction?.type,
      description: transaction?.description,
      category: transaction?.category,
      price: transaction?.price,
    },
  });

  async function handleUpdateTransaction(data: EditTransactionFormInputs) {
    if (!transaction) {
      return;
    }

    try {
      await updateTransaction({ ...data, id: transaction.id, createdAt: transaction.createdAt });

      handleClose();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDeleteTransaction() {
    if (!transaction) {
      return;
    }

    try {
      await deleteTransaction({ id: transaction.id });

      handleClose();
    } catch (error) {
      console.log(error);
    }
  }

  function handleClose() {
    selectTransaction(null);
  }

  return (
    <Dialog.Portal>
      <S.DialogOverlay>
        <S.DialogContent>
          <form onSubmit={handleSubmit(handleUpdateTransaction)}>
            <S.DialogClose type='button' onClick={handleClose} disabled={isSubmitting}>
              <X weight='bold' />
            </S.DialogClose>
            <Dialog.Title>Edit Transaction</Dialog.Title>
            <label htmlFor='description'>Description</label>
            <input
              type='text'
              id='description'
              placeholder='description'
              required
              {...register('description')}
              disabled={isSubmitting}
            />

            <label htmlFor='price'>Price</label>
            <input
              type='number'
              id='price'
              placeholder='price'
              required
              {...register('price', { valueAsNumber: true })}
              disabled={isSubmitting}
            />

            <label htmlFor='category'>Category</label>
            <input
              type='text'
              id='category'
              placeholder='category'
              required
              {...register('category')}
              disabled={isSubmitting}
            />

            <Controller
              name='type'
              control={control}
              render={({ field }) => {
                return (
                  <S.ToggleGroupRoot type='single' {...field} onValueChange={field.onChange}>
                    <S.ToggleGroupItem value='income' variant='income'>
                      <span>Income</span>
                      <ArrowCircleUp />
                    </S.ToggleGroupItem>
                    <S.ToggleGroupItem value='expense' variant='expense'>
                      <span>Expense</span>
                      <ArrowCircleDown />
                    </S.ToggleGroupItem>
                  </S.ToggleGroupRoot>
                );
              }}
            />

            <S.ButtonsContainer>
              <S.DeleteButton type='button' onClick={handleDeleteTransaction}>
                {isLoading ? <ScaleLoader height={26} color='#e1e1e1' /> : 'Delete'}
              </S.DeleteButton>

              <div>
                <S.CancelButton type='button' onClick={handleClose}>
                  Cancel
                </S.CancelButton>
                <S.UpdateButton type='submit'>
                  {isLoading ? <ScaleLoader height={26} color='#e1e1e1' /> : 'Update'}
                </S.UpdateButton>
              </div>
            </S.ButtonsContainer>
          </form>
        </S.DialogContent>
      </S.DialogOverlay>
    </Dialog.Portal>
  );
}
