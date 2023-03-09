import Image from 'next/image';

// Components
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Rating from '../../components/Rating';
import { Product } from '../../types/common';

// Utils
import { blurDataURL } from '../../utils/utils';

const Detail = (item: Product) => {
  return (
    <Flex flexDir="column">
      <Box maxW="400px">
        <Image
          src={item.id}
          alt={item.altText}
          placeholder="blur"
          blurDataURL={blurDataURL()}
          style={{
            maxWidth: '100%',
            height: 'auto'
          }}
        />
      </Box>
      <Flex flexDir="column" pl="20px">
        <Heading fontWeight={400}>{item.productName}</Heading>
        <Text variant="helper" py="10px">
          {item.helperText}
        </Text>
        <Rating rating={item.rating} />
        <Text pt="18px">{item.subText}</Text>
      </Flex>
    </Flex>
  );
};

export const getStaticProps = async ({ params }: any) => {
  const res = await fetch(
    `https://6405632440597b65de35cc7e.mockapi.io/blogs/${params.id}`
  );
  const data = await res.json();

  return {
    props: {
      item: data[0]
    }
  };
};

export const getStaticPaths = async () => {
  const res = await fetch('https://6405632440597b65de35cc7e.mockapi.io/blogs');
  const data = await res.json();

  return {
    paths: data
      .map((blog: Product) => {
        return {
          params: {
            id: blog.id
          }
        };
      })
      .flat(),
    fallBack: false
  };
};

export default Detail;
