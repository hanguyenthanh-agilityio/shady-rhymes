import { Flex } from '@chakra-ui/react';

import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';

interface RatingProps {
  rating: number;
}

const Rating = ({ rating }: RatingProps) => {
  const totalStars = 5;

  return (
    <Flex>
      {[...new Array(totalStars)].map((_, index) => {
        const roundedRating = Math.round(rating * 2) / 2;

        if (roundedRating - index >= 1) {
          return (
            <BsStarFill
              key={index}
              style={{ marginLeft: '4' }}
              color={index < rating ? '#dfb300' : 'blue'}
            />
          );
        }
        if (roundedRating - index === 0.5) {
          return (
            <BsStarHalf
              key={index}
              style={{ marginLeft: '4' }}
              color="#dfb300"
            />
          );
        }
        return <BsStar key={index} style={{ marginLeft: '1' }} />;
      })}
    </Flex>
  );
};

export default Rating;
