import Link from 'next/link';

// Types
import { ListItem } from '../types/common';

// Components
import { List, ListItem as ListItemChakra } from '@chakra-ui/react';

interface ListItemProps {
  item: ListItem[];
}

const ListItem = ({ item }: ListItemProps) => {
  return (
    <List>
      {item.map(({ label }, index) => (
        <>
          <ListItemChakra
            key={index}
            color="text.reversal"
            fontSize={{ xs: '12px', md: '18px' }}
            lineHeight={{ xs: '18px', md: '27px' }}
            pb="24px"
          >
            <Link href="/">{label}</Link>
          </ListItemChakra>
        </>
      ))}
    </List>
  );
};

export default ListItem;
