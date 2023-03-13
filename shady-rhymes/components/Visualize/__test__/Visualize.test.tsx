import { render } from '@testing-library/react';
import Visualize from '..';
import React from 'react';
import '@testing-library/jest-dom';

describe('Visualize component', () => {
  it('Should render Visualize snapshot correctly', () => {
    const visualize = render(<Visualize />);

    expect(visualize).toMatchSnapshot();
  });
});
