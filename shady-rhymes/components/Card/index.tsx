import { memo } from 'react';
import Image from 'next/image';

// Utils
import { blurDataURL } from '../../utils/utils';

// Components
import Rating from '../Rating';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

interface CardProps {
  src: string;
  altText?: string;
  width?: number;
  height?: number;
  productName: string;
  helperText: string;
  subText: string;
  rating: number;
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
  subText,
  rating,
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
              style={{
                maxWidth: '100%',
                height: 'auto'
              }}
            />
          </a>
        </Link>
      </Box>
      <Flex flexDir="column" pl="20px">
        <Heading fontWeight={400}>{productName}</Heading>
        <Text variant="helper" py="10px">
          {helperText}
        </Text>
        <Rating rating={rating} />
        <Text pt="18px">{subText}</Text>
        <Button onClick={handleClick}>Delete</Button>
      </Flex>
    </Flex>
  );
};

export default memo(Card);
