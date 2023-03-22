import { ComponentMeta, ComponentStory } from '@storybook/react';
import ListFeature from '.';
import { FEATURE } from '../../constants/common';

export default {
  title: 'Components/ListFeatures',
  component: ListFeature
} as ComponentMeta<typeof ListFeature>;

const TemplateListFeature: ComponentStory<typeof ListFeature> = args => (
  <ListFeature {...args} />
);

export const DefaultListFeature = TemplateListFeature.bind({});

DefaultListFeature.args = {
  item: FEATURE
};
