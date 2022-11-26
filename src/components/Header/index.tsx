import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Coins } from 'phosphor-react';

import * as S from './styles';
import { NewTransactionModal } from '../NewTransactionModal';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.HeaderContainer>
      <S.HeaderContent className='container'>
        <S.Logo>Coin$y</S.Logo>

        <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
          <S.NewTransactionButton>
            <span>New</span>
            <Coins />
          </S.NewTransactionButton>

          <NewTransactionModal />
        </Dialog.Root>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
}
