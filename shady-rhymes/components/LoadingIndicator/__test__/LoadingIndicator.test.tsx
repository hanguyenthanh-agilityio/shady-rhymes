import { render } from '@testing-library/react';

// Components
import LoadingIndicator from '..';

describe('Render LoadingIndicator', () => {
  it('Should render snapshot correctly', () => {
    expect(render(<LoadingIndicator />)).toMatchSnapshot();
  });
});
