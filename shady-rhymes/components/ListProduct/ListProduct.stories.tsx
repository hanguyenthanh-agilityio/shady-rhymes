import { ComponentMeta, ComponentStory } from '@storybook/react';
import ListProduct from '.';
import { PRODUCT } from '../../constants/common';

export default {
  title: 'Components/ListProduct',
  component: ListProduct
} as ComponentMeta<typeof ListProduct>;

const TemplateListProduct: ComponentStory<typeof ListProduct> = args => (
  <ListProduct {...args} />
);

export const DefaultListProduct = TemplateListProduct.bind({});

DefaultListProduct.args = {
  productItem: PRODUCT
};
