import { ThemeProvider } from 'styled-components';
import { PaginationContextProvider } from './contexts/PaginationContext';

import { TransactionsContextProvider } from './contexts/TransactionsContext';

import { Transactions } from './pages/Transactions';

import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionsContextProvider>
        <PaginationContextProvider>
          <Transactions />
        </PaginationContextProvider>
      </TransactionsContextProvider>

      <GlobalStyle />
    </ThemeProvider>
  );
}
