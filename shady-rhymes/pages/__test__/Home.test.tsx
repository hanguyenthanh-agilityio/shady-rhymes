import { render } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { ChakraProvider } from '@chakra-ui/react';

// Components
import Home from '..';
import { PRODUCT } from '@/constants/common';

describe('Home component', () => {
  const props = {
    blogs: PRODUCT,
    page: '1',
    limit: '10'
  };
  it('Should render Home snapshot correctly', () => {
    const home = render(
      <ChakraProvider>
        <Home {...props} />
      </ChakraProvider>
    );

    expect(home).toMatchSnapshot();
  });
});
