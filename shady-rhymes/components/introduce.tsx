import { Container, Flex, Heading } from '@chakra-ui/react';
import { INTRO } from '../constants/common';
import Feature from './feature';

const Introduce = () => {
  return (
    <Container mb="80px">
      <Heading size="large" fontWeight={500} pt="70px" pb="16px">
        Why Choosing Us
      </Heading>
      <Flex flexDir="row">
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
