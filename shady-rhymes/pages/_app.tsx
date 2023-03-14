import '../styles/globals.css';
import type { AppProps } from 'next/app';

// Components
import ErrorBoundary from '../components/ErrorBoundary';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';

// Import the extendTheme function
import CHAKRA_THEME_DEFAULT from '../theme/chakra';

// Import React-query
import { QueryClient, QueryClientProvider } from 'react-query';

// Pass the `theme` prop to the `ChakraProvider`
function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={CHAKRA_THEME_DEFAULT}>
        <ErrorBoundary>
          <CSSReset />
          <Component {...pageProps} />
        </ErrorBoundary>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
