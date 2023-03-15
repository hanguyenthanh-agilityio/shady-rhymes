import { ComponentMeta, ComponentStory } from '@storybook/react';

// Components
import Introduce from '.';

export default {
  title: 'Components/Introduce',
  component: Introduce
} as ComponentMeta<typeof Introduce>;

const TemplateIntroduce: ComponentStory<typeof Introduce> = () => <Introduce />;

export const DefaultIntroduce = TemplateIntroduce.bind({});

DefaultIntroduce.args = {};
