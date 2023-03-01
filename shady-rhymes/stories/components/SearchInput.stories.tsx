import { ComponentMeta, ComponentStory } from '@storybook/react';

// Components
import SearchInput from '../../components/searchInput';

export default {
  title: 'Components/SearchInput',
  component: SearchInput
} as ComponentMeta<typeof SearchInput>;

const TemplateSearchInput: ComponentStory<typeof SearchInput> = args => (
  <SearchInput {...args} />
);

export const DefaultSearchInput = TemplateSearchInput.bind({});

DefaultSearchInput.args = {
  placeholder: 'Search Furniture'
};
