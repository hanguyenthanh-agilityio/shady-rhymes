import { Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

interface FeatureProps {
  iconImage?: string;
  title: string;
  text: string;
  subText?: string;
}

const Feature = ({ iconImage, title, text, subText }: FeatureProps) => {
  return (
    <Flex flexDir="column" alignItems="flex-start" minW="425px" minH="280px">
      {iconImage && <Image src={iconImage} alt="icon" width={60} height={60} />}
      <Text size="large" py="10px" data-testid="feature-title">
        {title}
      </Text>
      <Text
        size="medium"
        pb="20px"
        minH="72px"
        maxW="340px"
        data-testid="feature-text"
      >
        {text}
      </Text>
      {subText && <Link href="/">{subText}</Link>}
    </Flex>
  );
};

export default Feature;
