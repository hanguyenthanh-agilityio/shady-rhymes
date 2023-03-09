import { memo } from 'react';
import Image from 'next/image';

// Utils
import { blurDataURL } from '../../utils/utils';

// Components
import Rating from '../Rating';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

interface CardProps {
  src: string;
  altText?: string;
  width?: number;
  height?: number;
  productName: string;
  helperText: string;
  subText: string;
  rating: number;
}

const Card = ({
  src,
  altText,
  width,
  height,
  productName,
  helperText,
  subText,
  rating
}: CardProps) => {
  return (
    <Flex flexDir="column">
      <Box maxW="400px">
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
      </Box>
      <Flex flexDir="column" pl="20px">
        <Heading fontWeight={400}>{productName}</Heading>
        <Text variant="helper" py="10px">
          {helperText}
        </Text>
        <Rating rating={rating} />
        <Text pt="18px">{subText}</Text>
      </Flex>
    </Flex>
  );
};

export default memo(Card);
