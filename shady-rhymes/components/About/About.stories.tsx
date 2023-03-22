import { ComponentMeta, ComponentStory } from '@storybook/react';
import About from '.';
import { SERVICES } from '../../constants/common';

export default {
  title: 'Components/About',
  component: About
} as ComponentMeta<typeof About>;

const TemplateAbout: ComponentStory<typeof About> = args => <About {...args} />;

export const DefaultAbout = TemplateAbout.bind({});

DefaultAbout.args = {
  heading: 'What they say about our Abouts',
  service: SERVICES
};
