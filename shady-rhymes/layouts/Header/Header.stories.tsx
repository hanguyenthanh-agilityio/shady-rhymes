import { ComponentMeta, ComponentStory } from '@storybook/react';

// Components
import Hero from '.';

export default {
  title: 'Components/Hero',
  component: Hero
} as ComponentMeta<typeof Hero>;

const TemplateHero: ComponentStory<typeof Hero> = () => <Hero />;

export const DefaultHero = TemplateHero.bind({});

DefaultHero.args = {};
