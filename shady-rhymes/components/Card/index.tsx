import { memo } from 'react';
import Image from 'next/image';

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
    <Box>
      <Image src={src} alt={altText} width={width} height={height} />
      <Flex flexDir="column" pl="20px">
        <Heading fontWeight={400}>{productName}</Heading>
        <Text variant="helper" py="10px">
          {helperText}
        </Text>
        <Rating rating={rating} />
        <Text pt="18px">{subText}</Text>
      </Flex>
    </Box>
  );
};

export default memo(Card);
