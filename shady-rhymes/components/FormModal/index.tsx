import React, { memo } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

// Constants

// Types
import { Product } from '../../types/common';

// Components
import Modal from '../Modal';
import FormInput from '../FormInput';

import { SimpleGrid } from '@chakra-ui/react';

interface FormModalProps {
  modalTitle: string;
  buttonLabel: string;
  isLoading?: boolean;
  productItem?: Product;
  onClose: () => void;
  onConfirm: (data: Product) => void;
}

const FormModal = ({
  modalTitle,
  buttonLabel,
  onClose,
  onConfirm,
  productItem,
  isLoading
}: FormModalProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    control
  } = useForm({ defaultValues: productItem });

  const onSubmit: SubmitHandler<Product> = data => onConfirm(data);

  return (
    <Modal
      modalTitle={modalTitle}
      buttonAction={buttonLabel}
      ButtonClose="Cancel"
      isLoading={isLoading}
      isOpen={true}
      onClick={handleSubmit(onSubmit)}
      onClose={onClose}
      data-testid="modal"
    >
      <form>
        <SimpleGrid w="100%" columns={1}>
          <FormInput
            label="Product name:"
            isInvalid={!!errors.productName}
            inputName="productName"
            register={register}
          />
          <FormInput
            label="Information:"
            isInvalid={!!errors.helperText}
            inputName="helperText"
            register={register}
          />
          <FormInput
            label="Price:"
            isInvalid={!!errors.subText}
            inputName="subText"
            register={register}
          />
        </SimpleGrid>
      </form>
    </Modal>
  );
};

export default memo(FormModal);
