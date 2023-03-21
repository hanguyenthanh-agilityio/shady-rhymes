import Link from 'next/link';

// Types
import { ListItems } from '../../types/common';

// Components
import { Box, Flex, List, ListItem, Text } from '@chakra-ui/react';

interface ListFeatureProps {
  item: ListItems[];
}

const ListFeature = ({ item }: ListFeatureProps) => {
  return (
    <>
      {item.map(({ title, label }) => (
        <List key={title}>
          <Text size={{ xs: 'small', md: 'large' }} variant="footer">
            {title}
          </Text>
          <ListItem
            color="text.reversal"
            fontSize={{ xs: '12px', md: '18px' }}
            lineHeight={{ xs: '18px', md: '27px' }}
            pb="24px"
          >
            <Link href="/">
              <a>{label}</a>
            </Link>
          </ListItem>
        </List>
      ))}
    </>
  );
};

export default ListFeature;
