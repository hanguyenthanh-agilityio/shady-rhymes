import { ComponentMeta, ComponentStory } from '@storybook/react';
import FormModal from '.';

export default {
  title: 'Components/FormModal',
  component: FormModal
} as ComponentMeta<typeof FormModal>;

const TemplateFormModal: ComponentStory<typeof FormModal> = args => (
  <FormModal {...args} />
);

export const DefaultFormModal = TemplateFormModal.bind({});

DefaultFormModal.args = {
  modalTitle: 'Product',
  buttonLabel: 'Confirm',
  isLoading: true
};
