import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';

import * as S from './styles';

export function EditTransactionModal() {
  return (
    <Dialog.Portal>
      <S.DialogOverlay>
        <S.DialogContent>
          <form>
            <S.DialogClose>
              <X weight='bold' />
            </S.DialogClose>
            <Dialog.Title>Edit Transaction</Dialog.Title>
            <label htmlFor='description'>Description</label>
            <input type='text' id='description' placeholder='description' required />
            <label htmlFor='price'>Price</label>
            <input type='number' id='price' placeholder='price' required />
            <label htmlFor='category'>Category</label>
            <input type='text' id='category' placeholder='category' required />

            <S.ToggleGroupRoot type='single' value='income'>
              <S.ToggleGroupItem value='income' variant='income'>
                <span>Income</span>
                <ArrowCircleUp />
              </S.ToggleGroupItem>
              <S.ToggleGroupItem value='expense' variant='expense'>
                <span>Expense</span>
                <ArrowCircleDown />
              </S.ToggleGroupItem>
            </S.ToggleGroupRoot>

            <S.ButtonsContainer>
              <S.DeleteButton>Delete</S.DeleteButton>
              <div>
                <S.CancelButton>Cancel</S.CancelButton>
                <S.UpdateButton>Update</S.UpdateButton>
              </div>
            </S.ButtonsContainer>
          </form>
        </S.DialogContent>
      </S.DialogOverlay>
    </Dialog.Portal>
  );
}
