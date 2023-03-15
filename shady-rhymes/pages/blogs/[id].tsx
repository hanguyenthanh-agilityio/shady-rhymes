import Image from 'next/image';

// Components
import Rating from '../../components/Rating';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text
} from '@chakra-ui/react';

// Types
import { Product } from '../../types/common';

// Utils
import { blurDataURL } from '../../utils/utils';
import Layout from '../../layouts/Layout/layout';

const Detail = ({ blog }: { blog: Product }) => {
  return (
    <Layout>
      <Container px="50px">
        <SimpleGrid
          columns={{ xs: 1, md: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ xs: 18, md: 24 }}
        >
          <Flex>
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
                objectFit: 'cover',
                alignItems: 'center'
              }}
            />
          </Flex>
          <Stack spacing={{ xs: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading size={{ xs: 'small', md: 'large' }}>
                {blog.productName}
              </Heading>
              <Text variant="helper" py="10px">
                {blog.helperText}
              </Text>
              <Rating rating={blog.rating} />
              <Text pt="18px">{blog.subText}</Text>
            </Box>

            <Stack spacing={{ base: 4, sm: 6 }} direction={'column'}>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}
                >
                  Features
                </Text>
              </Box>
            </Stack>

            <Button
              rounded="none"
              w="full"
              mt="8px"
              py="7"
              textTransform="uppercase"
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg'
              }}
            >
              Add to cart
            </Button>
          </Stack>
        </SimpleGrid>
      </Container>
    </Layout>
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
