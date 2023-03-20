import Image from 'next/image';

// Constants
import { FEATURE, LEGAL, MEDIA, SUPPORT } from '../../constants/common';

// Components
import ListItem from '../ListItem';
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue
} from '@chakra-ui/react';

const Footer = () => {
  const width = useBreakpointValue({
    xs: 124,
    md: 228
  });
  const height = useBreakpointValue({
    xs: 36,
    md: 68
  });
  return (
    <Box bgGradient="linear(275.58deg, #000000 0%, #4B4B4B 100%)">
      <Container>
        <SimpleGrid
          templateColumns={{
            xs: '1fr',
            md: '1fr 1fr',
            lg: '2fr 1fr 1fr 1fr 1fr'
          }}
          spacing={8}
          py={{ xs: '28px', md: '100px' }}
        >
          <Stack maxW={{ xs: '124px', md: '228px' }} spacing={6}>
            <Image
              src="/logo/footer.png"
              alt="footer-logo"
              width={width}
              height={height}
            />
          </Stack>
          <Stack align={'flex-start'}>
            <Text size={{ xs: 'small', md: 'large' }} variant="footer">
              Features
            </Text>
            <ListItem item={FEATURE} />
          </Stack>
          <Stack align={'flex-start'}>
            <Text size={{ xs: 'small', md: 'large' }} variant="footer">
              Support
            </Text>
            <ListItem item={SUPPORT} />
          </Stack>
          <Stack align={'flex-start'}>
            <Text size={{ xs: 'small', md: 'large' }} variant="footer">
              Legal
            </Text>
            <ListItem item={LEGAL} />
          </Stack>
          <Stack align={'flex-start'}>
            <Text size={{ xs: 'small', md: 'large' }} variant="footer">
              Social Media
            </Text>
            <ListItem item={MEDIA} />
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
