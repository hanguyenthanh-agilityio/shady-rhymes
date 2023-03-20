import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

// Components
import ConfirmModal from '..';

describe('ConfirmModal render', () => {
  const props = {
    title: 'Are you sure you want to remove?',
    buttonLabel: 'Yes',
    onClose: jest.fn(),
    onDelete: jest.fn()
  };
  const confirm = () => {
    return render(<ConfirmModal {...props} />);
  };

  it('Should render ConfirmModal with snapshot correctly', () => {
    const component = confirm();

    expect(component).toMatchSnapshot();
  });
});
