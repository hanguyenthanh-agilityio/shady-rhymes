import Image from 'next/image';

// Constants
import { FEATURE } from '../../constants/common';

// Components
import ListFeature from '../../components/ListFeature';
import { Box, Container, SimpleGrid, Stack, Text } from '@chakra-ui/react';

//Utils
import { blurDataURL } from '../../utils/utils';

const Footer = () => {
  return (
    <Box bgGradient="linear(275.58deg, #000000 0%, #4B4B4B 100%)">
      <Container>
        <SimpleGrid
          templateColumns={{
            xs: '1fr',
            md: '1fr 1fr',
            lg: '1fr 2fr'
          }}
          spacing={8}
          py={{ xs: '28px', md: '100px' }}
        >
          <Stack maxW={{ xs: '124px', md: '228px' }} spacing={6}>
            <Image
              src="/logo/footer.png"
              alt="footer-logo"
              width={228}
              height={68}
              placeholder="blur"
              blurDataURL={blurDataURL()}
            />
          </Stack>
          <Stack
            className="1231134"
            display="flex"
            flexDir={{ xs: 'column', md: 'row' }}
            align={'flex-start'}
          >
            <ListFeature item={FEATURE} />
          </Stack>
        </SimpleGrid>
        <Text
          textAlign="center"
          size={{ xs: 'tiny', md: 'medium' }}
          variant="default"
          pb="40px"
          pt={{ xs: '0', md: '80px' }}
        >
          Copyright 2021 ©shady rhymes
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
