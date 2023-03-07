import Image from 'next/image';

// Components
import { Container, Flex, Heading, Stack, Text } from '@chakra-ui/react';

const Visualize = () => {
  return (
    <Container my="80px">
      <Flex
        flexDir={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
      >
        <Stack>
          <Heading size="large" fontWeight={500}>
            Visualize your ideas with us
          </Heading>
          <Text size="medium" py="20px" pr="70px" maxW="806px">
            We are ready to help you build and also realize the room design that
            you dream of, with our experts and also the best category
            recommendations from us
          </Text>
        </Stack>
        <Flex>
          <Image
            src="/images/visualize.png"
            alt="visualize-image"
            width={900}
            height={600}
            style={{ objectFit: 'cover' }}
          />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Visualize;
