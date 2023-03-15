import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import Feature from '..';

describe('Feature component', () => {
  const props = {
    title: 'Professionalism',
    text: 'We deliver the final work with great professional way.'
  };

  const feature = () => {
    return render(<Feature {...props} />);
  };

  it('Should render Feature snapshot correctly', () => {
    expect(feature()).toMatchSnapshot();
  });

  it('Should render Feature correctly with title prop', () => {
    const { getByTestId } = feature();
    const title = getByTestId('feature-title');

    expect(title).toHaveTextContent(props.title);
  });

  it('Should render Feature correctly with text prop', () => {
    const { getByTestId } = feature();
    const text = getByTestId('feature-text');

    expect(text).toHaveTextContent(props.text);
  });
});
