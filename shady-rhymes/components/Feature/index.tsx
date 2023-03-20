import { Box, Flex, Text, useBreakpointValue } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

interface FeatureProps {
  iconImage?: string;
  title: string;
  text: string;
  subText?: string;
}

const Feature = ({ iconImage, title, text, subText }: FeatureProps) => {
  const width = useBreakpointValue({
    xs: 28,
    md: 60
  });
  const height = useBreakpointValue({
    xs: 28,
    md: 60
  });

  return (
    <Flex
      flexDir="column"
      alignItems="flex-start"
      justifyContent="space-between"
      minW={{ xl: '330px', xxl: '425px' }}
      minH={{ xs: '140px', md: '280px' }}
      pb={{ xs: '26px', md: '0' }}
    >
      {iconImage && (
        <Image src={iconImage} alt="icon" width={width} height={height} />
      )}
      <Text
        size={{ xs: 'tiny', md: 'large' }}
        fontWeight={{ xs: '500' }}
        py="10px"
        data-testid="feature-title"
      >
        {title}
      </Text>
      <Text
        size={{ xs: 'tiny', md: 'medium' }}
        pb={{ xs: '10px', md: '20px' }}
        minH={{ xs: '48px', md: '72px' }}
        maxW={{ xl: '280px', xxl: '340px' }}
        data-testid="feature-text"
      >
        {text}
      </Text>
      {subText && (
        <Box
          color="#f79489"
          fontSize={{ xs: '12px', md: '18px' }}
          lineHeight={{ xs: '24px', md: '36px' }}
        >
          <Link href="/">{subText}</Link>
        </Box>
      )}
    </Flex>
  );
};

export default Feature;
