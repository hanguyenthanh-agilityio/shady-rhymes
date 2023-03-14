import { ComponentMeta, ComponentStory } from '@storybook/react';

// Components
import Visualize from '.';

export default {
  title: 'Components/Visualize',
  component: Visualize
} as ComponentMeta<typeof Visualize>;

const TemplateVisualize: ComponentStory<typeof Visualize> = () => <Visualize />;

export const DefaultVisualize = TemplateVisualize.bind({});

DefaultVisualize.args = {};
