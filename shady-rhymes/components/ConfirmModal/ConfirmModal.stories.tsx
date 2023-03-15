import { ComponentMeta, ComponentStory } from '@storybook/react';

// Components
import ConfirmModal from '.';

export default {
  title: 'Components/ConfirmModal',
  component: ConfirmModal
} as ComponentMeta<typeof ConfirmModal>;

const TemplateConfirmModal: ComponentStory<typeof ConfirmModal> = args => (
  <ConfirmModal {...args} />
);

export const DefaultConfirmModal = TemplateConfirmModal.bind({});

DefaultConfirmModal.args = {
  title: 'Are you sure you want to remove?',
  buttonLabel: 'Yes',
  isOpen: true,
  isLoading: true
};
