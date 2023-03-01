import { ComponentMeta, ComponentStory } from '@storybook/react';

// Components
import ErrorBoundary from '../../component/errorBoundary';

export default {
  title: 'Components/ErrorBoundary',
  component: ErrorBoundary
} as ComponentMeta<typeof ErrorBoundary>;

const TemplateErrorBoundary: ComponentStory<typeof ErrorBoundary> = args => (
  <ErrorBoundary {...args} />
);

export const DefaultErrorBoundary = TemplateErrorBoundary.bind({});

DefaultErrorBoundary.args = {};
