import '../styles/globals.css';
import type { AppProps } from 'next/app';

// Components
import ErrorBoundary from '../components/errorBoundary';
import { ChakraProvider } from '@chakra-ui/react';

// 1. Import the extendTheme function
import CHAKRA_THEME_DEFAULT from '../theme/chakra';

// 3. Pass the `theme` prop to the `ChakraProvider`
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={CHAKRA_THEME_DEFAULT}>
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </ChakraProvider>
  );
}

export default MyApp;
