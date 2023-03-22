import Link from 'next/link';

// Components
import { Box, Stack } from '@chakra-ui/react';

// Types
import { NavItem } from '../../types/common';

interface NavbarProps {
  navItem: NavItem[];
}

const Navbar = ({ navItem }: NavbarProps) => {
  return (
    <Stack
      flex={{ base: 1, md: 0 }}
      justify="center"
      direction="row"
      spacing={6}
    >
      {navItem.map(({ label }, index) => (
        <Box key={`label-${index}`}>
          <Link href="/">
            <a>{label}</a>
          </Link>
        </Box>
      ))}
    </Stack>
  );
};

export default Navbar;
