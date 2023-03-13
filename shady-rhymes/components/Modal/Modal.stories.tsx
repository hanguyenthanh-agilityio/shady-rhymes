import { ComponentMeta, ComponentStory } from '@storybook/react';
import Modal from '.';

export default {
  title: 'Components/Modal',
  component: Modal
} as ComponentMeta<typeof Modal>;

const TemplateModal: ComponentStory<typeof Modal> = args => <Modal {...args} />;

export const DefaultModal = TemplateModal.bind({});

DefaultModal.args = {
  modalTitle: 'Remove item',
  buttonAction: 'Yes',
  ButtonClose: 'No',
  children: 'Are you sure ?',
  isOpen: true,
  isLoading: true
};
