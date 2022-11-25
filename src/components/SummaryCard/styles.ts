import styled from 'styled-components';

interface CardContainer {
  type: 'balance' | 'income' | 'expense';
  variant?: boolean;
}

const cardIconColor = {
  balance: 'gray-100',
  income: 'green-300',
  expense: 'red-300',
} as const;

export const CardContainer = styled.div<CardContainer>`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background-color: ${(props) =>
    props.variant ? props.theme['green-600'] : props.theme['gray-600']};
  padding: 1rem;
  border-radius: 0.25rem;
  gap: 0.5rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    span {
      font-size: 1rem;
      color: ${(props) => props.theme['gray-300']};
      text-transform: capitalize;
      font-weight: 600;
    }

    svg {
      width: 1.75rem;
      height: 1.75rem;
      color: ${(props) => props.theme[cardIconColor[props.type]]};
    }
  }

  strong {
    font-size: 1.125rem;
    font-weight: 700;
    color: ${(props) => props.theme['gray-100']};
  }
`;
