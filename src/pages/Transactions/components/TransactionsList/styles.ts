import styled from 'styled-components';

export const TransactionsTable = styled.table`
  display: grid;
  grid-template-columns: 1fr 1fr;

  thead,
  tbody,
  tr {
    display: contents;
  }

  td {
    color: ${(props) => props.theme['gray-400']};
    background-color: ${(props) => props.theme['gray-700']};

    &:nth-child(1) {
      border-top-left-radius: 0.25rem;
      padding: 0.5rem 0 0 0.5rem;
    }

    &:nth-child(2) {
      border-top-right-radius: 0.25rem;
      display: grid;
      place-content: end;
      padding: 0.5rem 0.5rem 0 0;
    }

    &:nth-child(3) {
      margin-bottom: 0.5rem;
      border-bottom-left-radius: 0.25rem;
      padding: 0 0 0.5rem 0.5rem;
    }

    &:nth-child(4) {
      margin-bottom: 0.5rem;
      border-bottom-right-radius: 0.25rem;
      display: grid;
      place-content: end;
      padding: 0 0.5rem 0.5rem 0;
    }

    &.variant-expense {
      color: ${(props) => props.theme['red-300']};
      font-weight: 700;
    }

    &.variant-income {
      color: ${(props) => props.theme['green-300']};
      font-weight: 700;
    }
  }

  @media (min-width: 35em) {
    grid-template-columns: 2fr 1fr 1fr 1fr;

    td {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 0.5rem;

      &:nth-child(1) {
        border-top-left-radius: 0.25rem;
        border-bottom-left-radius: 0.25rem;
        padding: 1rem;
      }

      &:nth-child(2) {
        border-radius: 0;
        place-content: center;
        padding: 1rem;
      }

      &:nth-child(3) {
        border-radius: 0;
        padding: 1rem;
      }

      &:nth-child(4) {
        border-top-right-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
        padding: 1rem;
      }
    }
  }

  @media (min-width: 45em) {
    grid-template-columns: 3fr 1fr 1fr 1fr;
  }
`;

export const ErrorMessage = styled.div`
  display: flex;
  justify-content: center;

  span {
    background-color: ${(props) => props.theme['gray-700']};
    border-radius: 0.25rem;
    padding: 0.5rem;
    text-align: center;
    font-size: 1.125rem;
    font-weight: 600;
    color: ${(props) => props.theme['gray-300']};
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-block: 2rem;
`;
