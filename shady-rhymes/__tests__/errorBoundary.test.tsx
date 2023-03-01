import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import ErrorBoundary from '../component/errorBoundary';

beforeEach(() => {
  jest.spyOn(global.console, 'log');
});

describe('Render LoadingIndicator', () => {
  const ThrowError = () => {
    throw new Error('Test');
  };
  it('Should render snapshot correctly', () => {
    expect(
      render(
        <ErrorBoundary>
          <ThrowError />
        </ErrorBoundary>
      )
    ).toMatchSnapshot();
  });
});
