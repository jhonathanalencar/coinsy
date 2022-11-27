import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  margin-block: 1rem;

  form {
    display: flex;
    flex: 1;
    align-items: center;
    gap: 0.5rem;

    input {
      width: 100%;
      flex: 1;
      font-size: 1rem;
      border-radius: 0.25rem;
      border: none;
      padding: 0.5rem;
      background-color: ${(props) => props.theme['gray-900']};
      color: ${(props) => props.theme['gray-300']};

      &::placeholder {
        color: ${(props) => props.theme['gray-500']};
      }
    }

    button {
      padding: 0.5rem 0.75rem;
      font-size: 1rem;
      font-weight: 600;
      display: inline-flex;
      border-radius: 0.25rem;
      border: none;
      display: flex;
      align-items: center;
      gap: 0.25rem;
      background-color: ${(props) => props.theme['blue-400']};
      color: ${(props) => props.theme['gray-100']};
      cursor: pointer;
      transition: background-color 0.3s ease-in-out;

      svg {
        width: 1.5rem;
        height: 1.5rem;
        color: ${(props) => props.theme['gray-100']};
      }

      &:not(:disabled):is(:hover, :foucs) {
        background-color: ${(props) => props.theme['blue-500']};
      }
    }
  }
`;
