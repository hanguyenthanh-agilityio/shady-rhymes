import { ComponentMeta, ComponentStory } from '@storybook/react';

// Components
import Footer from '.';

export default {
  title: 'Components/Footer',
  component: Footer
} as ComponentMeta<typeof Footer>;

const TemplateFooter: ComponentStory<typeof Footer> = () => <Footer />;

export const DefaultFooter = TemplateFooter.bind({});

DefaultFooter.args = {};
