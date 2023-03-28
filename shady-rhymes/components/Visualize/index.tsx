import Image from 'next/image';

// Components
import { Container, Flex, Heading, Stack, Text } from '@chakra-ui/react';

// Utils
import myImageLoader, { blurDataURL } from '../../utils/utils';

const Visualize = () => {
  return (
    <Container my="80px">
      <Stack
        direction={{ xs: 'column-reverse', md: 'row' }}
        justifyContent="space-between"
      >
        <Stack>
          <Heading
            size={{ xs: 'small', md: 'large' }}
            fontWeight={500}
            pt={{ xs: '100px', md: '0' }}
          >
            Visualize your ideas with us
          </Heading>
          <Text
            size={{ xs: 'tiny', md: 'medium' }}
            py={{ xs: '12px', md: '20px' }}
            pr={{ xs: '0', md: '70px' }}
            maxW={{ md: '806px' }}
          >
            We are ready to help you build and also realize the room design that
            you dream of, with our experts and also the best category
            recommendations from us
          </Text>
        </Stack>
        <Flex>
          <Image
            src="/visualize.png"
            alt="visualize-image"
            width={900}
            height={600}
            // style={{ objectFit: 'cover' }}
            placeholder="blur"
            blurDataURL={blurDataURL()}
          />
        </Flex>
      </Stack>
    </Container>
  );
};

export default Visualize;
