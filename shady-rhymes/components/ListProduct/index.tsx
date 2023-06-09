import { memo } from 'react';

// Types
import { Product } from '../../types/common';

// Components
import Card from '../Card';
import { Flex, SimpleGrid } from '@chakra-ui/react';

interface ListProductProps {
  products: Product[];
  onClick: (id: string) => void;
}

const ListProduct = ({ products, onClick }: ListProductProps) => {
  return (
    <SimpleGrid columns={{ xs: 2, md: 4 }} spacing={10} pt="20px">
      {products.map(({ id, src, altText, productName, helperText, price }) => (
        <Flex key={id} flexDir="column">
          <Card
            src={src}
            altText={altText}
            width={400}
            height={425}
            productName={productName}
            helperText={helperText}
            price={price}
            id={id}
            onClick={onClick}
          />
        </Flex>
      ))}
    </SimpleGrid>
  );
};

export default memo(ListProduct);
