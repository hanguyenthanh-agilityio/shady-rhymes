import {
  Box,
  Flex,
  useBreakpointValue,
  VStack,
  Stack,
  Text,
  Button,
  Heading
} from '@chakra-ui/react';
import SearchInput from './searchInput';

const Hero = () => {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={'url(/images/hero.png)'}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <VStack
        w="100%"
        justify="center"
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
      >
        <Stack align="center">
          <Heading size="huge" textAlign="center" maxW="800px" color="#fff">
            Make your interior more minimaistic & modern
          </Heading>
          <Text size="medium" textAlign="center" color="#fff" maxW="500px">
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
