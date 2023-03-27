import dynamic from 'next/dynamic';
import type { NextPage } from 'next';
import { Suspense, useState } from 'react';

// Services
import { getProduct, handleAddProduct, handleDelete } from '@/services/api';

// Constants
import { SERVICES } from '@/constants/common';

// Components
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import Hero from '@/components/Header';
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
import { useRouter } from 'next/router';

const FormModal = dynamic(() => import('../components/FormModal'));

const ConfirmModal = dynamic(() => import('../components/ConfirmModal'));

interface Props {
  blogs: Product[];
  page: any;
  limit: number;
}

const Home: NextPage<Props> = ({ blogs, page, limit }) => {
  const toast = useToast();
  const [blogId, setBlogId] = useState<string>();
  const [products, setProducts] = useState(blogs);

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

  const pageNumberClick = (page: any, limit: number) => {
    route.push({
      pathname: route.pathname,
      query: { page: page, limit: limit }
    });
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
    setProducts([...products, data]);

    onCloseAddModal();
    toast({
      title: 'Product created',
      status: 'success',
      duration: 3000,
      isClosable: true
    });
  };

  return (
    <>
      <SEO title="Shady Rhymes" description="Nextjs practice" />
      <Hero />
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

        <Button onClick={() => pageNumberClick(parseInt(page) + 1, limit)}>
          Next
        </Button>
      </Container>
      <About heading="What they say about our services" service={SERVICES} />
      <Footer />
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
    </>
  );
};

export const getStaticProps = async ({ query, ...props }: { query: any }) => {
  try {
    const data = await getProduct(query.page, query.limit);

    return {
      props: {
        blogs: data,
        page: query.page,
        limit: query.limit
      }
    };
  } catch {}
};

export default Home;
