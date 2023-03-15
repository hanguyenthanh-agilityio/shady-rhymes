import { ReactNode } from 'react';

// Components
import { Text } from '@chakra-ui/react';

interface LayoutProp {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProp) => {
  return (
    <>
      <Text>Header</Text>
      {children}
      <Text>Footer</Text>
    </>
  );
};

export default Layout;
