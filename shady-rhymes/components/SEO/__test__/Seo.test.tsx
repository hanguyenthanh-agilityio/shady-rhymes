import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import SEO from '..';

describe('SEO component', () => {
  const props = {
    title: 'Shady Rhymes',
    description: 'Nextjs practice'
  };

  const seo = () => {
    return render(<SEO {...props} />);
  };

  it('Should render SEO snapshot correctly', () => {
    expect(seo()).toMatchSnapshot();
  });
});
