import { memo } from 'react';

// Components
import Modal from '../Modal';
import { Text } from '@chakra-ui/react';

interface ConfirmModalProps {
  title: string;
  buttonLabel: string;
  isLoading?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
  onDelete?: () => void;
}

const ConfirmModal = ({
  title,
  buttonLabel,
  isOpen,
  onClose,
  onDelete,
  isLoading
}: ConfirmModalProps) => (
  <Modal
    modalTitle="Remove Product"
    buttonAction={buttonLabel}
    ButtonClose="No"
    isOpen={isOpen}
    isLoading={isLoading}
    onClick={onDelete}
    onClose={onClose}
    data-testid="modal"
  >
    <Text
      size="medium"
      color="text.default"
      textAlign="center"
      py="10px"
      data-testid="confirm-modal"
    >
      {title}
    </Text>
  </Modal>
);

export default memo(ConfirmModal);
