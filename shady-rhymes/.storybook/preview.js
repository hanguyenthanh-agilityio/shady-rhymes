import { ChakraProvider } from '@chakra-ui/react';
import themes from '../themes/chakra';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};

export const decorators = [
  Story => (
    <ChakraProvider theme={themes}>
      <Story />
    </ChakraProvider>
  )
];
