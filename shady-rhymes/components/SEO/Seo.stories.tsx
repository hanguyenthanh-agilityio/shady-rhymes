import { ComponentMeta, ComponentStory } from '@storybook/react';

// Components
import SEO from '.';

export default {
  title: 'Components/SEO',
  component: SEO
} as ComponentMeta<typeof SEO>;

const TemplateSEO: ComponentStory<typeof SEO> = args => <SEO {...args} />;

export const DefaultSEO = TemplateSEO.bind({});

DefaultSEO.args = {
  title: 'Shady Rhymes',
  description: 'Nextjs practice'
};
