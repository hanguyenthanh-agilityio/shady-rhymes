import Image from 'next/image';

// Components
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Rating from '../../components/Rating';
import { Product } from '../../types/common';

// Utils
import { blurDataURL } from '../../utils/utils';

const Detail = ({ blog }: { blog: Product }) => {
  return (
    <Flex flexDir="column">
      <Box maxW="400px">
        <Image
          id={blog.id}
          src={blog.src}
          alt={blog.altText}
          width={425}
          height={400}
          placeholder="blur"
          blurDataURL={blurDataURL()}
          style={{
            maxWidth: '100%',
            height: 'auto',
            objectFit: 'cover'
          }}
        />
      </Box>
      <Flex flexDir="column" pl="20px">
        <Heading fontWeight={400}>{blog.productName}</Heading>
        <Text variant="helper" py="10px">
          {blog.helperText}
        </Text>
        <Rating rating={blog.rating} />
        <Text pt="18px">{blog.subText}</Text>
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
      blog: data
    }
  };
};

export const getStaticPaths = async () => {
  const res = await fetch('https://6405632440597b65de35cc7e.mockapi.io/blogs');
  const data = await res.json();

  // Get the paths we want to pre-render based on blogs
  const paths = data.map((blog: Product) => ({
    params: { id: blog.id.toString() }
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export default Detail;
