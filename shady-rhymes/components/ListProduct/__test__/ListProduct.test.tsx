import { render } from '@testing-library/react';
import ListProduce from '..';
import React from 'react';
import '@testing-library/jest-dom';
import { PRODUCT } from '../../../constants/common';

describe('ListProduce component', () => {
  it('Should render ListProduce snapshot correctly', () => {
    const listProduce = render(<ListProduce productItem={PRODUCT} />);

    expect(listProduce).toMatchSnapshot();
  });
});
