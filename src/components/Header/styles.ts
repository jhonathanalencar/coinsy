import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${(props) => props.theme['red-300']};
  padding-bottom: 5rem;
  position: relative;
  z-index: -1;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: linear-gradient(0deg, #202026, transparent 60%);
    margin-top: 5rem;
  }
`;

export const HeaderContent = styled.div`
  padding: 1rem;
`;

export const Logo = styled.h2`
  color: ${(props) => props.theme['beige-300']};
  font-size: 2rem;
  font-weight: 600;
`;
