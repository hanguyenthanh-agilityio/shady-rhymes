// Components
import {
  Avatar,
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text
} from '@chakra-ui/react';

// Types
import { Service } from '../../types/common';

interface ServicesProps {
  heading: string;
  service: Service[];
}

const Services = ({ heading, service }: ServicesProps) => {
  return (
    <Box
      bgGradient="linear(279.85deg, #FFFFFF 0%, #FAF5F2 100%)"
      minH="700px"
      mt="150px"
    >
      <Container pb={{ xs: '80px', md: '0' }}>
        <Heading
          size={{ xs: 'small', md: 'large' }}
          fontWeight={500}
          textAlign="center"
          py={{ xs: '40px', md: '80px' }}
        >
          {heading}
        </Heading>
        <SimpleGrid columns={{ xs: 1, md: 3 }} spacing={10} pt="20px">
          {service.map(
            ({ title, text, avatarName, avatarSrc, name, intro }, index) => (
              <Stack key={index}>
                <Text size={{ xs: 'small', md: 'large' }}>{title}</Text>
                <Text
                  size={{ xs: 'tiny', md: 'medium' }}
                  maxH={{ xl: '180px', xxl: '144px' }}
                >
                  {text}
                </Text>
                <Flex pt="20px" alignItems="center">
                  <Avatar
                    name={avatarName}
                    src={avatarSrc}
                    w={{ xs: '40px', md: '60px' }}
                    h={{ xs: '40px', md: '60px' }}
                  />
                  <Stack pl="6px">
                    <Text size={{ xs: 'small', md: 'medium' }}>{name}</Text>
                    <Text
                      size={{ xs: 'tiny', md: 'small' }}
                      fontWeight={300}
                      mt="0 !important"
                      className="123"
                    >
                      {intro}
                    </Text>
                  </Stack>
                </Flex>
              </Stack>
            )
          )}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Services;
