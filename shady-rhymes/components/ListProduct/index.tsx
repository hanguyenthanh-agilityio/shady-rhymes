import { memo, useState } from 'react';

// Types
import { Product } from '../../types/common';

// Components
import Card from '../Card';
import {
  Button,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  useDisclosure
} from '@chakra-ui/react';
import ConfirmModal from '../ConfirmModal';

interface ListProductProps {
  productItem: Product[];
}

const ListProduct = ({ productItem }: ListProductProps) => {
  const {
    isOpen: isOpenDeleteModal,
    onOpen: onOpenDeleteModal,
    onClose: onCloseDeleteModal
  } = useDisclosure();

  const [blogId, setBlogId] = useState('');

  const onOpenModal = (id: string) => {
    console.log(id);
    onOpenDeleteModal();
    setBlogId(id);
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
    } catch (err) {
      console.log(err);
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
