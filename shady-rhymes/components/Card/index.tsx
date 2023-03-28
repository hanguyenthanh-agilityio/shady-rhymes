import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Utils
import { blurDataURL } from '../../utils/utils';

// Components
import { BsStarFill } from 'react-icons/bs';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';

interface CardProps {
  src: string;
  altText?: string;
  width?: number;
  height?: number;
  productName: string;
  helperText: string;
  price: string;
  id: string;
  onClick: (id: string) => void;
}

const Card = ({
  src,
  altText,
  width,
  height,
  productName,
  helperText,
  price,
  id,
  onClick
}: CardProps) => {
  const handleClick = () => {
    return onClick(id);
  };

  return (
    <Flex flexDir="column">
      <Box maxW="400px">
        <Link
          href={{
            pathname: '/blogs/[id]/',
            query: { id: id }
          }}
        >
          <a>
            <Image
              src={src}
              alt={altText}
              width={width}
              height={height}
              placeholder="blur"
              blurDataURL={blurDataURL()}
            />
          </a>
        </Link>
      </Box>
      <Flex flexDir="column" pl={{ xs: '0', ms: '20px' }}>
        <Heading fontWeight={400} data-testid="product-name">
          {productName}
        </Heading>
        <Text variant="helper" py="10px">
          {helperText}
        </Text>
        <Flex>
          {[...Array(5)].map((_, index) => {
            return (
              <BsStarFill
                key={index}
                style={{ marginRight: '4', width: '16px', height: '16px' }}
                color="#dfb300"
              />
            );
          })}
        </Flex>
        <Flex
          flexDir={{ xs: 'column', md: 'row' }}
          justifyContent={{ xs: 'flex-start', md: 'space-between' }}
          alignItems={{ xs: 'flex-start', md: 'center' }}
          pt="18px"
        >
          <Text>{price}</Text>
          <Button
            onClick={handleClick}
            data-testid="card-input-field"
            mt={{ xs: '10px', md: '0' }}
          >
            Delete
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default memo(Card);
