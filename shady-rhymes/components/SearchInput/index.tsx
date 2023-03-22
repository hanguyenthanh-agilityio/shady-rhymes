import { memo } from 'react';

// Components
import { Search2Icon } from '@chakra-ui/icons';

import { Icon, Input, InputGroup, InputRightElement } from '@chakra-ui/react';

interface SearchInputProps {
  placeholder?: string;
  onChange?: () => void;
}

const SearchInput = ({
  placeholder = 'Search Furniture',
  onChange
}: SearchInputProps) => {
  return (
    <InputGroup w="360px" position="relative">
      <Input
        placeholder={placeholder}
        onChange={onChange}
        name="search-input"
        data-testid="search-input-field"
        bg="rgb(255,255,255,0.5)"
      />
      <InputRightElement
        children={<Icon as={Search2Icon} color="icon.primary" />}
      />
    </InputGroup>
  );
};

export default memo(SearchInput);
