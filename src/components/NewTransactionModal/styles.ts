import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';
import * as ToggleGroup from '@radix-ui/react-toggle-group';

export const DialogOverlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const DialogContent = styled(Dialog.Content)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;

  form {
    background-color: ${(props) => props.theme['gray-800']};
    padding: 1rem;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    width: 100%;

    label {
      margin-top: 1rem;
      font-size: 1.125rem;
      font-weight: 600;
    }

    input {
      border-radius: 0.25rem;
      border: none;
      padding: 0.5rem;
      background-color: ${(props) => props.theme['gray-600']};
      color: ${(props) => props.theme['gray-300']};

      &::placeholder {
        color: ${(props) => props.theme['gray-500']};
      }
    }

    button[type='submit'] {
      height: 3rem;
      margin-top: 1rem;
      border: none;
      border-radius: 0.25rem;
      font-size: 1rem;
      font-weight: 700;
      text-transform: uppercase;
      background-color: ${(props) => props.theme['teal-500']};
      color: ${(props) => props.theme['gray-100']};
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:not(:disabled):is(:hover, :focus) {
        background-color: ${(props) => props.theme['teal-600']};
      }

      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }
    }
  }
`;

export const DialogClose = styled(Dialog.Close)`
  display: inline-flex;
  align-self: flex-end;
  background-color: transparent;
  border: none;
  padding: 0.25rem;
  border-radius: 0.25rem;
  cursor: pointer;

  svg {
    width: 1.75rem;
    height: 1.75rem;
    color: ${(props) => props.theme['gray-300']};
    transition: color 0.3s ease;
  }

  &:not(:disabled):is(:hover, :focus) {
    svg {
      color: ${(props) => props.theme['red-400']};
    }
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const DialogTitle = styled(Dialog.Title)`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${(props) => props.theme['gray-100']};
`;

export const ToggleGroupRoot = styled(ToggleGroup.Root)`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-block: 1rem;
`;

interface ToggleGroupItemProps {
  variant: 'income' | 'expense';
}

export const ToggleGroupItem = styled(ToggleGroup.Item)<ToggleGroupItemProps>`
  flex: 1;
  height: 3.5rem;
  padding: 0.5rem;
  background-color: ${(props) => props.theme['gray-600']};
  border: none;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;

  span {
    font-size: 1rem;
    font-weight: 600;
    color: ${(props) => props.theme['gray-300']};
  }

  svg {
    width: 1.75rem;
    height: 1.75rem;
    color: ${(props) =>
      props.variant === 'expense' ? props.theme['red-300'] : props.theme['green-300']};
  }

  &[data-state='on'] {
    background-color: ${(props) =>
      props.variant === 'expense' ? props.theme['red-300'] : props.theme['green-400']};

    svg {
      color: ${(props) => props.theme['gray-200']};
    }
  }
`;
