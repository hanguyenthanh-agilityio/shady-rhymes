import { render } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { PRODUCT } from '../../../constants/common';

// Components
import Detail from '../[id]';

describe('Detail component', () => {
  it('Should render Detail snapshot correctly', () => {
    const detail = render(
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
    );

    expect(detail).toMatchSnapshot();
  });
});
