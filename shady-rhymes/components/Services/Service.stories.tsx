import { ComponentMeta, ComponentStory } from '@storybook/react';
import Service from '.';
import { SERVICES } from '../../constants/common';

export default {
  title: 'Components/Service',
  component: Service
} as ComponentMeta<typeof Service>;

const TemplateService: ComponentStory<typeof Service> = args => (
  <Service {...args} />
);

export const DefaultService = TemplateService.bind({});

DefaultService.args = {
  heading: 'What they say about our services',
  service: SERVICES
};
