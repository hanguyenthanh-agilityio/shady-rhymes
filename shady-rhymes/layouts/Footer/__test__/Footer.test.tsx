import { ChakraProvider } from '@chakra-ui/react';
import { render } from '@testing-library/react';
import React from 'react';

// Components
import Footer from '..';

describe('Footer component', () => {
  it('Should render Footer snapshot correctly', () => {
    const footer = render(
      <ChakraProvider>
        <Footer />
      </ChakraProvider>
    );

    expect(footer).toMatchSnapshot();
  });
});
