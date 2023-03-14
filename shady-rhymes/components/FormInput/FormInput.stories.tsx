import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useForm } from 'react-hook-form';
import FormInput from '.';

export default {
  title: 'Components/FormInput',
  component: FormInput
} as ComponentMeta<typeof FormInput>;

const TemplateFormInput: ComponentStory<typeof FormInput> = args => {
  const { register } = useForm();

  return <FormInput {...args} register={register} />;
};

export const DefaultFormInput = TemplateFormInput.bind({});

DefaultFormInput.args = {
  label: 'Product Name',
  inputName: 'productName',
  isInvalid: true
};
