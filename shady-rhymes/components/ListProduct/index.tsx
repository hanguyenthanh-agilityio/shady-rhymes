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
      <Heading
        size="large"
        fontWeight={500}
        pt="50px"
        pb="20px"
        textAlign="center"
      >
        Featured Product
      </Heading>
      <SimpleGrid columns={{ xs: 1, md: 4 }} spacing={10} pt="20px">
        {productItem
          .slice(0, 4)
          .map(
            ({
              id,
              src,
              altText,
              productName,
              helperText,
              subText,
              rating
            }) => (
              <Card
                key={id}
                src={src}
                altText={altText}
                width={400}
                height={425}
                productName={productName}
                helperText={helperText}
                subText={subText}
                rating={rating}
                id={id}
              />
            )
          )}
      </SimpleGrid>
    </Container>
  );
};

export default memo(ListProduct);
