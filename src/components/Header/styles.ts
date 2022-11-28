import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${(props) => props.theme['red-300']};
  padding-bottom: 5rem;
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: linear-gradient(0deg, #202026, transparent);
    margin-top: 4rem;
    z-index: -1;
  }
`;

export const HeaderContent = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.h2`
  color: ${(props) => props.theme['beige-300']};
  font-size: 2rem;
  font-weight: 600;
`;

export const NewTransactionButton = styled(Dialog.Trigger)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  border: none;
  background-color: ${(props) => props.theme['teal-500']};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme['teal-600']};
  }

  span {
    font-size: 1rem;
    font-weight: 700;
    color: ${(props) => props.theme['gray-100']};
  }

  svg {
    height: 1.5rem;
    width: 1.5rem;
    color: ${(props) => props.theme['beige-300']};
  }
`;
