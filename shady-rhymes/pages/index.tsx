import dynamic from 'next/dynamic';
import type { NextPage } from 'next';
import { Suspense, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// Services
import { getProduct, handleAddProduct, handleDelete } from '@/services/api';

// Constants
import { SERVICES } from '@/constants/common';

// Layout
import Layout from '@/layouts/Layout';

// Components
import SEO from '@/components/SEO';
import Introduce from '@/components/Introduce';
import Visualize from '@/components/Visualize';
import ListProduct from '@/components/ListProduct';
import About from '@/components/About';
import LoadingIndicator from '@/components/LoadingIndicator';
import {
  Button,
  Container,
  Flex,
  Heading,
  useDisclosure,
  useToast
} from '@chakra-ui/react';

// Types
import { Product } from '@/types/common';

const FormModal = dynamic(() => import('../components/FormModal'));

const ConfirmModal = dynamic(() => import('../components/ConfirmModal'));

interface Props {
  blogs: Product[];
  page: string;
  limit: string;
}

const Home: NextPage<Props> = ({ blogs, page = '1', limit = '10' }) => {
  const toast = useToast();
  const [blogId, setBlogId] = useState<string>();
  const [products, setProducts] = useState(blogs);
  const [params, setParams] = useState({
    page: parseInt(page),
    limit: parseInt(limit)
  });

  const {
    isOpen: isOpenAddModal,
    onOpen: onOpenAddModal,
    onClose: onCloseAddModal
  } = useDisclosure();

  const {
    isOpen: isOpenDeleteModal,
    onOpen: onOpenDeleteModal,
    onClose: onCloseDeleteModal
  } = useDisclosure();

  const route = useRouter();
  console.log('route', route);

  useEffect(() => {
    route.push({
      pathname: route.pathname,
      query: { page: params.page, limit: params.limit }
    });
  }, [params.limit, params.page]);

  const handleNextButton = async () => {
    setParams({ ...params, page: Number(page) + 1 });
    const res = await getProduct({
      page: (Number(page) + 1).toString(),
      limit: limit
    });
    setProducts(res);
  };

  const handlePreviousButton = async () => {
    setParams({ ...params, page: parseInt(page) - 1 });

    const res = await getProduct({
      page: (Number(page) - 1).toString(),
      limit
    });
    setProducts(res);
  };

  const handleDeleteProduct = async () => {
    try {
      await handleDelete(blogId);
      const data = await getProduct();
      setProducts(data);

      onCloseDeleteModal();
      toast({
        title: 'Item deleted.',
        status: 'success',
        duration: 3000,
        isClosable: true
      });
    } catch (error) {
      toast({
        title: 'Delete failed.',
        status: 'error',
        isClosable: true
      });
    }
  };

  const handleOpenDeleteModal = (id: string) => {
    setBlogId(id);
    onOpenDeleteModal();
  };

  const handleConfirm = async (data: Product) => {
    await handleAddProduct(data);
    // setProducts([...products, data]);

    onCloseAddModal();
    toast({
      title: 'Product created',
      status: 'success',
      duration: 3000,
      isClosable: true
    });
  };

  console.log('page', Number(page));

  return (
    <Layout>
      <SEO title="Shady Rhymes" description="Nextjs practice" />
      <Introduce />
      <Visualize />
      <Container>
        <Heading
          size={{ xs: 'small', md: 'large' }}
          fontWeight={500}
          pt={{ xs: '20px', md: '50px' }}
          pb="20px"
          textAlign="center"
        >
          Featured Product
        </Heading>
        <Flex justifyContent="center">
          <Button onClick={onOpenAddModal} my="10px">
            Add new product
          </Button>
        </Flex>
        <ListProduct products={products} onClick={handleOpenDeleteModal} />
        <Flex alignItems="center" justifyContent="center" mt="50px">
          <Button
            disabled={Number(page) === 1}
            onClick={handlePreviousButton}
            mr="20px"
          >
            Previous
          </Button>
          <Button isDisabled={products.length < 10} onClick={handleNextButton}>
            Next
          </Button>
        </Flex>
      </Container>
      <About heading="What they say about our services" service={SERVICES} />
      {/* Open add new product modal */}

      {isOpenAddModal && (
        <Suspense fallback={<LoadingIndicator />}>
          <FormModal
            modalTitle="Add new product"
            buttonLabel="Confirm"
            onClose={onCloseAddModal}
            onConfirm={handleConfirm}
          />
        </Suspense>
      )}

      {/* Open delete product modal */}

      {isOpenDeleteModal && (
        <Suspense fallback={<LoadingIndicator />}>
          <ConfirmModal
            title="Are you sure you want to remove ?"
            buttonLabel="Yes"
            isOpen={isOpenDeleteModal}
            onClose={onCloseDeleteModal}
            onDelete={handleDeleteProduct}
          />
        </Suspense>
      )}
    </Layout>
  );
};

export const getServerSideProps = async ({ query }: { query: any }) => {
  try {
    const blogs = await getProduct({ page: query.page, limit: query.limit });

    return {
      props: {
        blogs,
        page: query.page,
        limit: query.limit
      }
    };
  } catch {}
};

export default Home;
