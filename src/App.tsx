import { ThemeProvider } from 'styled-components';

import { TransactionsContextProvider } from './contexts/TransactionsContext';

import { Header } from './components/Header';
import { Summary } from './components/Summary';

import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionsContextProvider>
        <Header />
        <Summary />
      </TransactionsContextProvider>

      <GlobalStyle />
    </ThemeProvider>
  );
}
