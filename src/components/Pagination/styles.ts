import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 26em) {
    flex-direction: row;
    gap: 0.5rem;
  }

  @media (min-width: 32em) {
    gap: 1rem;
  }
`;

export const PagesContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  @media (min-width: 26em) {
    gap: 0.5rem;
    width: fit-content;
  }
`;

export const PaginationButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem;
  border: none;
  background-color: ${(props) => props.theme['green-400']};
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: none;

  span {
    display: none;
    color: ${(props) => props.theme['gray-100']};
  }

  svg {
    height: 1.5rem;
    width: 1.5rem;
    color: ${(props) => props.theme['gray-100']};
  }

  &:not(:disabled):is(:hover, :focus) {
    background-color: ${(props) => props.theme['green-500']};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  @media (min-width: 26em) {
    display: inline-flex;
  }

  @media (min-width: 36em) {
    span {
      display: block;
    }
  }
`;

export const PageButton = styled.button`
  background-color: ${(props) => props.theme['teal-500']};
  border: none;
  border-radius: 0.25rem;
  width: 3rem;
  height: 2.5rem;
  color: ${(props) => props.theme['gray-100']};
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:is(:hover, :focus) {
    background-color: ${(props) => props.theme['teal-400']};
  }

  &.active {
    background-color: ${(props) => props.theme['red-400']};
  }
`;

export const SmallScreenButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;

  > button {
    display: inline-flex;
  }

  @media (min-width: 26em) {
    display: none;
  }
`;
