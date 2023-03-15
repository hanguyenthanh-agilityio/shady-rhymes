import React, { memo } from 'react';

// Components
import {
  Button,
  Modal as ModalChakra,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react';

interface ModalProps {
  modalTitle: string;
  buttonAction?: string;
  ButtonClose?: string;
  children?: React.ReactNode;
  isOpen?: boolean;
  isLoading?: boolean;
  onClose?: () => void;
  onClick?: () => void;
}

const Modal = ({
  modalTitle,
  ButtonClose,
  buttonAction,
  children,
  isOpen = false,
  isLoading,
  onClose = () => {},
  onClick = () => {}
}: ModalProps) => {
  return (
    <ModalChakra isOpen={isOpen} onClose={onClose}>
      <ModalOverlay data-testid="modal-overlay" />
      <ModalContent data-testid="modal-content">
        {/* Header */}
        <ModalHeader textAlign="center" data-testid="title">
          {modalTitle}
        </ModalHeader>
        <ModalCloseButton data-testid="modal-close-button" />
        {/* Body */}
        <ModalBody textAlign="center">{children}</ModalBody>
        {/* Footer */}
        <ModalFooter padding="20px 0" display="flex" justifyContent="center">
          <Button
            mr="20px"
            type="submit"
            data-testid="confirm-button"
            isLoading={isLoading}
            onClick={onClick}
          >
            {buttonAction}
          </Button>
          <Button variant="close" onClick={onClose} data-testid="close-button">
            {ButtonClose}
          </Button>
        </ModalFooter>
      </ModalContent>
    </ModalChakra>
  );
};

export default memo(Modal);
