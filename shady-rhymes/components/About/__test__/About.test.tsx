import { render } from '@testing-library/react';
import Service from '..';
import React from 'react';
import '@testing-library/jest-dom';
import { SERVICES } from '../../../constants/common';
import { ChakraProvider } from '@chakra-ui/react';

describe('Service component', () => {
  it('Should render Service snapshot correctly', () => {
    const service = render(
      <ChakraProvider>
        <Service
          heading="What they say about our services"
          service={SERVICES}
        />
      </ChakraProvider>
    );

    expect(service).toMatchSnapshot();
  });
});
