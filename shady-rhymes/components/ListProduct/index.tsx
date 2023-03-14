import { memo, useState } from 'react';

// Types
import { Product } from '../../types/common';

// Components
import Card from '../Card';
import {
  Container,
  Flex,
  Heading,
  SimpleGrid,
  useDisclosure,
  useToast,
  Button
} from '@chakra-ui/react';
import ConfirmModal from '../ConfirmModal';
import FormModal from '../FormModal';

interface ListProductProps {
  products: Product[];
  onClick: (id: string) => void;
}

const ListProduct = ({ products, onClick }: ListProductProps) => {
  return (
    <SimpleGrid columns={{ xs: 1, md: 4 }} spacing={10} pt="20px">
      {products.map(
        ({ id, src, altText, productName, helperText, subText, rating }) => (
          <Flex key={id} flexDir="column">
            <Card
              src={src}
              altText={altText}
              width={400}
              height={425}
              productName={productName}
              helperText={helperText}
              subText={subText}
              rating={rating}
              id={id}
              onClick={onClick}
            />
          </Flex>
        )
      )}
    </SimpleGrid>
  );
};

export default memo(ListProduct);
