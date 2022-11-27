import { NotePencil } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';

import * as S from './styles';
import { EditTransactionModal } from '../EditTransactionModal';

export function UpdateButton() {
  return (
    <S.UpdateButtonContainer>
      <Dialog.Root>
        <Dialog.Trigger>
          <NotePencil />
        </Dialog.Trigger>

        <EditTransactionModal />
      </Dialog.Root>
    </S.UpdateButtonContainer>
  );
}
