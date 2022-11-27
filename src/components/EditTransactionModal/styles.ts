import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';
import * as ToggleGroup from '@radix-ui/react-toggle-group';

export const DialogOverlay = styled(Dialog.Overlay)`
  position: fixed;
  z-index: 2;
  min-height: 100vh;
  inset: 0;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DialogContent = styled(Dialog.Content)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  margin-inline: auto;

  form {
    width: 100%;
    background-color: ${(props) => props.theme['gray-800']};
    padding: 2rem 1rem;
    border-radius: 0.25rem;
    display: flex;
    flex-direction: column;

    h2 {
      font-size: 1.25rem;
      font-weight: 900;
      color: ${(props) => props.theme['gray-300']};
    }

    label {
      margin-top: 1rem;
      font-size: 1.125rem;
      font-weight: 600;
      color: ${(props) => props.theme['gray-400']};
    }

    input {
      background-color: ${(props) => props.theme['gray-700']};
      color: ${(props) => props.theme['gray-300']};
      border: none;
      border-radius: 0.25rem;
      height: 2.5rem;
      padding: 0.5rem;

      &::placeholder {
        color: ${(props) => props.theme['gray-500']};
      }

      &:disabled {
        opacity: 0.7;
      }
    }
  }
`;

export const DialogClose = styled(Dialog.Close)`
  display: inline-flex;
  background: transparent;
  border: none;
  cursor: pointer;
  align-self: flex-end;

  svg {
    height: 1.5rem;
    width: 1.5rem;
    color: ${(props) => props.theme['gray-400']};
    transition: color 0.3s ease-in-out;
  }

  &:hover {
    svg {
      color: ${(props) => props.theme['red-500']};
    }
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;

  > div {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;
  }

  @media (min-width: 25em) {
    > div {
      flex-direction: row;
      gap: 1rem;
    }
  }
`;

const Button = styled.button`
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const DeleteButton = styled(Button)`
  background-color: ${(props) => props.theme['red-400']};
  color: ${(props) => props.theme['gray-100']};

  &:not(:disabled):is(:hover, :focus) {
    background-color: ${(props) => props.theme['red-500']};
  }
`;

export const CancelButton = styled(Button)`
  background-color: ${(props) => props.theme['gray-400']};
  color: ${(props) => props.theme['gray-100']};

  &:not(:disabled):is(:hover, :focus) {
    background-color: ${(props) => props.theme['gray-500']};
  }
`;

export const UpdateButton = styled(Button)`
  background-color: ${(props) => props.theme['teal-500']};
  color: ${(props) => props.theme['gray-100']};

  &:not(:disabled):is(:hover, :focus) {
    background-color: ${(props) => props.theme['teal-600']};
  }
`;

export const ToggleGroupRoot = styled(ToggleGroup.Root)`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-block: 1rem 2rem;
`;

interface ToggleGroupItemProps {
  variant: 'income' | 'expense';
}

export const ToggleGroupItem = styled(ToggleGroup.Item)<ToggleGroupItemProps>`
  flex: 1;
  height: 3rem;
  border: none;
  border-radius: 0.25rem;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  background-color: ${(props) => props.theme['gray-600']};
  cursor: pointer;

  span {
    font-size: 1rem;
    font-weight: 600;
    color: ${(props) => props.theme['gray-100']};
  }

  svg {
    height: 1.5rem;
    width: 1.5rem;
    color: ${(props) =>
      props.variant === 'expense' ? props.theme['red-300'] : props.theme['green-400']};
  }

  &[data-state='on'] {
    background-color: ${(props) =>
      props.variant === 'expense' ? props.theme['red-400'] : props.theme['green-400']};

    svg {
      color: ${(props) => props.theme['gray-100']};
    }
  }
`;
