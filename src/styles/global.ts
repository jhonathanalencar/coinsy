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
    box-shadow: 0 0 0.15rem ${(props) => props.theme['blue-400']};;
  }

  body{
    background-color: ${(props) => props.theme['gray-800']};
    color: ${(props) => props.theme['gray-400']};
    font-size: 1rem;
    font-weight: 400;
    font-family: 'Noto Sans', sans-serif;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  .flex_center{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }

  .container{
    width: 100%;
    max-width: ${(props) => props.theme['max-width']};
    margin-inline: auto;
    padding: 1rem;
  }

  .slide-down{
    animation: slideDown 0.5s ease-in-out;

    @keyframes slideDown {
      from{
        opacity: 0;
        transform: translateY(-20%);
      }

      to{
        opacity: 1;
        transform: translateY(0%);
      }
    }
  }
`;
