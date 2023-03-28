import { render } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { ChakraProvider } from '@chakra-ui/react';

// Components
import Layout from '..';

describe('Layout component', () => {
  it('Should render Layout snapshot correctly', () => {
    const layout = render(
      <ChakraProvider>
        <Layout children={<>Layout</>} />
      </ChakraProvider>
    );

    expect(layout).toMatchSnapshot();
  });
});
