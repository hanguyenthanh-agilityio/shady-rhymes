import { ComponentMeta, ComponentStory } from '@storybook/react';
import ListItem from '.';
import { FEATURE } from '../../constants/common';

export default {
  title: 'Components/ListItem',
  component: ListItem
} as ComponentMeta<typeof ListItem>;

const TemplateListItem: ComponentStory<typeof ListItem> = args => (
  <ListItem {...args} />
);

export const DefaultListItem = TemplateListItem.bind({});

DefaultListItem.args = {
  item: FEATURE
};
