import { Container, Flex, Heading } from '@chakra-ui/react';

// Constants
import { INTRO } from '../../constants/common';

// Components
import Feature from '../Feature';

const Introduce = () => {
  return (
    <Container mb="80px">
      <Heading
        size={{ xs: 'small', md: 'large' }}
        fontWeight={500}
        pt="70px"
        pb="16px"
      >
        Why Choosing Us
      </Heading>
      <Flex flexDir={{ xs: 'column', md: 'row' }}>
        {INTRO.map(({ iconImage, title, text, subText }) => (
          <Feature
            key={iconImage}
            iconImage={iconImage}
            title={title}
            text={text}
            subText={subText}
          />
        ))}
      </Flex>
    </Container>
  );
};

export default Introduce;
