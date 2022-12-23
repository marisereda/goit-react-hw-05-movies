import { Item, Image, Title, Votes } from './MovieCard.styled';
import { Box } from 'components/Box';

const MovieCard = ({ title, posterPath, votes }) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/w500';
  return (
    <Item>
      <Image src={BASE_URL + posterPath} alt={`Poster ${title}`} />
      <Box
        display="flex"
        height="titleBlock"
        alignItems="center"
        justifyContent="space-between"
        padding={4}
        as="div"
      >
        <Title>{title}</Title>
        <Votes>{votes.toFixed(1)}</Votes>
      </Box>
    </Item>
  );
};

export default MovieCard;
