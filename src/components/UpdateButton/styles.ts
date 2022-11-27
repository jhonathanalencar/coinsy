import styled from 'styled-components';

export const UpdateButtonContainer = styled.div`
  position: fixed;
  right: 1rem;
  bottom: 1rem;

  button {
    display: inline-flex;
    background-color: ${(props) => props.theme['blue-400']};
    border: none;
    border-radius: 50%;
    padding: 0.5rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    box-shadow: 0.1rem 0.1rem 0.35rem rgba(0, 0, 0, 0.3);

    svg {
      width: 1.5rem;
      height: 1.5rem;
      color: ${(props) => props.theme['gray-100']};
    }

    &:hover {
      background-color: ${(props) => props.theme['blue-500']};
    }
  }
`;
