import Image from 'next/image';

// Components
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Rating from '../../components/Rating';
import { Product } from '../../types/common';

// Utils
import { blurDataURL } from '../../utils/utils';

const Detail = (blogs: Product) => {
  return (
    <Flex flexDir="column">
      <Box maxW="400px">
        <Image
          src={blogs.id}
          alt={blogs.altText}
          placeholder="blur"
          blurDataURL={blurDataURL()}
          style={{
            maxWidth: '100%',
            height: 'auto'
          }}
        />
      </Box>
      <Flex flexDir="column" pl="20px">
        <Heading fontWeight={400}>{blogs.productName}</Heading>
        <Text variant="helper" py="10px">
          {blogs.helperText}
        </Text>
        <Rating rating={blogs.rating} />
        <Text pt="18px">{blogs.subText}</Text>
      </Flex>
    </Flex>
  );
};

export const getStaticProps = async ({ params }: any) => {
  console.log('param', params);

  const res = await fetch(
    `https://6405632440597b65de35cc7e.mockapi.io/blogs/${params.id}`
  );
  const data = await res.json();
  console.log('data', data);

  return {
    props: {
      blogs: data
    }
  };
};

export const getStaticPaths = async () => {
  const res = await fetch('https://6405632440597b65de35cc7e.mockapi.io/blogs');
  const data = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = data.map((blogs: Product) => ({
    params: { id: blogs.id.toString() }
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };

  // return {

  //   paths: data.map((blogs: Product) => {
  //     return {
  //       params: {
  //         id: blogs.id
  //       }
  //     };
  //   }),
  //   fallBack: false
  // };
};

export default Detail;
