import { memo, useState } from 'react';

// Types
import { Product } from '../../types/common';

// Components
import Card from '../Card';
import {
  Container,
  Flex,
  Heading,
  SimpleGrid,
  useDisclosure,
  useToast,
  Button
} from '@chakra-ui/react';
import ConfirmModal from '../ConfirmModal';
import FormModal from '../FormModal';

interface ListProductProps {
  productItem: Product[];
}

const ListProduct = ({ productItem }: ListProductProps) => {
  const toast = useToast();

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

  const [blogId, setBlogId] = useState('');
  const [product, setProduct] = useState('');

  const onOpenModal = (id: string) => {
    onOpenDeleteModal();
    setBlogId(id);
  };

  const handleConfirm = async () => {
    const res = await fetch(
      'https://6405632440597b65de35cc7e.mockapi.io/blogs/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ productItem })
      }
    );
    const data = await res.json();
    console.log(data);

    onCloseAddModal();
    toast({
      title: 'Product created',
      status: 'success',
      duration: 3000,
      isClosable: true
    });
  };

  const handleDelete = async () => {
    try {
      const res = await fetch(
        `https://6405632440597b65de35cc7e.mockapi.io/blogs/${blogId}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      const data = await res.json();
      onCloseDeleteModal();
      toast({
        title: 'Item deleted.',
        status: 'success',
        duration: 3000,
        isClosable: true
      });
    } catch (err) {
      toast({
        title: 'Delete failed.',
        status: 'error',
        isClosable: true
      });
    }
  };

  return (
    <Container>
      <Heading
        size="large"
        fontWeight={500}
        pt="50px"
        pb="20px"
        textAlign="center"
      >
        Featured Product
      </Heading>
      <Button onClick={onOpenAddModal}>Add new product</Button>
      {isOpenAddModal && (
        <FormModal
          modalTitle="Add new product"
          buttonLabel="Confirm"
          onClose={onCloseAddModal}
          onConfirm={handleConfirm}
        />
      )}
      <SimpleGrid columns={{ xs: 1, md: 4 }} spacing={10} pt="20px">
        {productItem
          .slice(0, 4)
          .map(
            ({
              id,
              src,
              altText,
              productName,
              helperText,
              subText,
              rating
            }) => (
              <Flex key={id} flexDir="column">
                <Card
                  src={src}
                  altText={altText}
                  width={400}
                  height={425}
                  productName={productName}
                  helperText={helperText}
                  subText={subText}
                  rating={rating}
                  id={id}
                  onClick={onOpenModal}
                />
                {isOpenDeleteModal && (
                  <ConfirmModal
                    title="Are you sure you want to remove ?"
                    buttonLabel="Yes"
                    isOpen={isOpenDeleteModal}
                    onClose={onCloseDeleteModal}
                    onDelete={handleDelete}
                  />
                )}
              </Flex>
            )
          )}
      </SimpleGrid>
    </Container>
  );
};

export default memo(ListProduct);
