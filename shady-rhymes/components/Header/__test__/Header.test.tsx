import { render } from '@testing-library/react';
import React from 'react';

// Components
import Header from '..';

describe('Header component', () => {
  it('Should render Header snapshot correctly', () => {
    const header = render(<Header />);

    expect(header).toMatchSnapshot();
  });
});
