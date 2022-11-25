import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font: inherit;
  }

  :focus{
    outline: 0;
    box-shadow: 0 0 0.15rem ${(props) => props.theme['blue-700']};;
  }

  body{
    background-color: ${(props) => props.theme['gray-700']};
    color: ${(props) => props.theme['gray-400']};
    font-size: 1rem;
    font-weight: 400;
    font-family: 'Noto Sans', sans-serif;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }
`;
