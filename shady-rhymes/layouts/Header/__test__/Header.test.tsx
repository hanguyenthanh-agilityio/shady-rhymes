import { render } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { ChakraProvider } from '@chakra-ui/react';

// Components
import Header from '..';

describe('Header component', () => {
  it('Should render Header snapshot correctly', () => {
    const header = render(
      <ChakraProvider>
        <Header />
      </ChakraProvider>
    );

    expect(header).toMatchSnapshot();
  });
});
