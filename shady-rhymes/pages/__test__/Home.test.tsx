import { render } from '@testing-library/react';
import React from 'react';
import Home from '..';

describe('Home component', () => {
  it('Should render Home snapshot correctly', () => {
    const home = render(<Home blogs={[]} />);

    expect(home).toMatchSnapshot();
  });
});
