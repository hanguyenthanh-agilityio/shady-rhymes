import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';

// Components
import Card from '..';

describe('Card component', () => {
  const props = {
    src: '/',
    width: 400,
    height: 425,
    productName: 'Product',
    helperText: 'Category',
    subText: 'IDR 150000',
    rating: 3,
    id: '1',
    onClick: jest.fn()
  };

  const card = () => {
    return render(<Card {...props} />);
  };

  it('Should render Card snapshot correctly', () => {
    expect(card()).toMatchSnapshot();
  });

  it('Should render Card correctly with productName prop', () => {
    const { getByTestId } = card();
    const name = getByTestId('product-name');

    expect(name).toHaveTextContent(props.productName);
  });

  it('Should render Card correctly with onClick prop', () => {
    const { getByTestId } = card();
    const clickCard = getByTestId('card-input-field');

    fireEvent.click(clickCard);
    expect(props.onClick).toHaveBeenCalled();
  });
});
