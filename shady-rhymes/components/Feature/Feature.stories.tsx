import { ComponentMeta, ComponentStory } from '@storybook/react';

// Components
import Feature from '.';

export default {
  title: 'Components/Feature',
  component: Feature
} as ComponentMeta<typeof Feature>;

const TemplateFeature: ComponentStory<typeof Feature> = args => (
  <Feature {...args} />
);

export const DefaultFeature = TemplateFeature.bind({});

DefaultFeature.args = {
  title: 'Professionalism',
  text: 'We deliver the final work with great professional way.'
};
