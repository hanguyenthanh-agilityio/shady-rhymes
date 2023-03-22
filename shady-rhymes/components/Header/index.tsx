// Components
import SearchInput from '../SearchInput';
import { Flex, VStack, Stack, Text, Heading } from '@chakra-ui/react';

const Hero = () => {
  return (
    <Flex
      w="full"
      h="1000px"
      maxH={{ xs: '550px', lg: '1000px' }}
      backgroundImage="url(/images/hero.png)"
      backgroundSize="cover"
      backgroundPosition="center center"
    >
      <VStack
        w="100%"
        justify="center"
        // bgGradient="linear(to-r, blackAlpha.600, transparent)"
      >
        <Stack align="center">
          <Heading
            size={{ xs: 'medium', md: 'huge' }}
            textAlign="center"
            maxW={{ xs: '300px', md: '800px' }}
            color="#fff"
          >
            Make your interior more minimaistic & modern
          </Heading>
          <Text
            size={{ xs: 'tiny', md: 'medium' }}
            textAlign="center"
            color="#fff"
            maxW={{ xs: '260px', md: '500px' }}
          >
            Bringing interiors to life, understanding the person of people
            living in a home is far greater need in design.
          </Text>
        </Stack>
        <Stack align="center" pt="60px" pb="100px">
          <SearchInput />
        </Stack>
      </VStack>
    </Flex>
  );
};

export default Hero;
