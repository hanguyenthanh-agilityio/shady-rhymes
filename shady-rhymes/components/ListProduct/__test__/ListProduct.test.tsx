import { render } from '@testing-library/react';
import ListProduce from '..';
import React from 'react';
import '@testing-library/jest-dom';
import { PRODUCT } from '../../../constants/common';

describe('ListProduce component', () => {
  const props = {
    onClick: jest.fn()
  };
  it('Should render ListProduce snapshot correctly', () => {
    const listProduce = render(<ListProduce products={PRODUCT} {...props} />);

    expect(listProduce).toMatchSnapshot();
  });
});
