import { ComponentMeta, ComponentStory } from '@storybook/react';
import LoadingIndicator from '.';

export default {
  title: 'Components/LoadingIndicator',
  component: LoadingIndicator
} as ComponentMeta<typeof LoadingIndicator>;

const TemplateLoading: ComponentStory<typeof LoadingIndicator> = () => (
  <LoadingIndicator />
);

export const DefaultLoading = TemplateLoading.bind({});

DefaultLoading.args = {};
