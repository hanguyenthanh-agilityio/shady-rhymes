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
    <Box bg="pink.100" minH="700px">
      <Container>
        <Heading size="large" fontWeight={500} textAlign="center" py="80px">
          {heading}
        </Heading>
        <SimpleGrid columns={{ xs: 1, md: 3 }} spacing={10} pt="20px">
          {service.map(
            ({ title, text, avatarName, avatarSrc, name, intro }, index) => (
              <Stack key={index}>
                <Text size="large">{title}</Text>
                <Text size="medium" maxH="144px">
                  {text}
                </Text>
                <Flex pt="20px" alignItems="center">
                  <Avatar name={avatarName} src={avatarSrc} />
                  <Stack pl="6px">
                    <Text size="medium">{name}</Text>
                    <Text
                      size="small"
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
