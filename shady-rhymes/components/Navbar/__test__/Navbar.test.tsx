import { render } from '@testing-library/react';

// Constants
import { NAV_ITEMS } from '../../../constants/common';

// Components
import Navbar from '..';

describe('Navbar component', () => {
  it('should render Navbar snapshot correctly', () => {
    const Header = render(<Navbar navItem={NAV_ITEMS} />);
    expect(Header).toMatchSnapshot();
  });
});
