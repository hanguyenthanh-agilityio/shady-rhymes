import { render } from '@testing-library/react';
import Introduce from '..';
import React from 'react';
import '@testing-library/jest-dom';

describe('Introduce component', () => {
  it('Should render Introduce snapshot correctly', () => {
    const introduce = render(<Introduce />);

    expect(introduce).toMatchSnapshot();
  });
});
