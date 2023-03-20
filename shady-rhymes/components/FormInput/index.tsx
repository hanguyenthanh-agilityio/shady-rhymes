import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input
} from '@chakra-ui/react';
import { memo } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { ERROR_MESSAGES } from '../../constants/error-messages';

interface FormInputProps {
  isInvalid: boolean;
  label: string;
  inputName: string;
  register: UseFormRegister<any>;
}

const FormInput = ({
  label,
  isInvalid,
  inputName,
  register
}: FormInputProps) => {
  return (
    <FormControl mb="15px" isInvalid={isInvalid}>
      <FormLabel>{label}</FormLabel>
      <Input
        size="full"
        color="text.default"
        {...register(inputName, { required: true })}
      />
      <FormErrorMessage>
        {isInvalid && ERROR_MESSAGES.FIELD_REQUIRED}
      </FormErrorMessage>
    </FormControl>
  );
};

export default memo(FormInput);
