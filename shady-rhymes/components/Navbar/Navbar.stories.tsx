import { ComponentMeta, ComponentStory } from '@storybook/react';
import Navbar from '.';
import { NAV_ITEMS } from '../../constants/common';

// Components

export default {
  title: 'Components/NavBar',
  component: Navbar
} as ComponentMeta<typeof Navbar>;

const TemplateNavbar: ComponentStory<typeof Navbar> = args => (
  <Navbar {...args} />
);

export const DefaultNavbar = TemplateNavbar.bind({});

DefaultNavbar.args = {
  navItem: NAV_ITEMS
};
