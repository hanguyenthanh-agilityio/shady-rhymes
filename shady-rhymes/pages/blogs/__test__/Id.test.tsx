import { render } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { PRODUCT } from '../../../constants/common';

// Components
import Detail, { getStaticProps } from '../[id]';
import { ChakraProvider } from '@chakra-ui/react';

describe('Detail component', () => {
  it('Should render Detail snapshot correctly', () => {
    const detail = render(
      <ChakraProvider>
        <Detail
          blog={{
            id: '1',
            src: '/',
            altText: undefined,
            productName: '',
            helperText: '',
            price: ''
          }}
        />
      </ChakraProvider>
    );

    expect(detail).toMatchSnapshot();
  });

  // it('', async () => {
  //   global.fetch = jest.fn().mockImplementationOnce(() =>
  //     Promise.resolve({
  //       json: () => Promise.resolve({ data: PRODUCT })
  //     })
  //   );
  //   const res = await getStaticProps(1);
  // });
});
