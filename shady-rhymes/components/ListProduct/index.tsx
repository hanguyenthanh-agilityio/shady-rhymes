import { memo } from 'react';

// Types
import { Product } from '../../types/common';

// Components
import Card from '../Card';
import { Container, Heading, SimpleGrid } from '@chakra-ui/react';

interface ListProductProps {
  productItem: Product[];
}

const ListProduct = ({ productItem }: ListProductProps) => {
  return (
    <Container>
      <Heading>Featured Product</Heading>
      <SimpleGrid columns={{ xs: 1, md: 4 }} spacing={10} pt="20px">
        {productItem
          .slice(0, 4)
          .map(
            (
              {
                src,
                altText,
                width,
                height,
                productName,
                helperText,
                subText,
                rating
              },
              index
            ) => (
              <Card
                key={index}
                src={src}
                altText={altText}
                width={width}
                height={height}
                productName={productName}
                helperText={helperText}
                subText={subText}
                rating={rating}
              />
            )
          )}
      </SimpleGrid>
    </Container>
  );
};

export default memo(ListProduct);
