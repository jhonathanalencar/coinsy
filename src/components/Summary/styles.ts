import styled from 'styled-components';

export const SummaryContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: -5rem;
  position: relative;
  z-index: 1;

  div:first-child {
    grid-column: 1 / -1;
  }

  @media (min-width: 25em) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 40em) {
    grid-template-columns: repeat(3, 1fr);

    div:first-child {
      grid-column: 3;
      grid-row: 1;
    }
  }
`;
