import { Link, useLocation } from 'react-router-dom';
import { Box } from 'components/Box';
import { Item, Image, Title, Votes } from './MovieCard.styled';

const MovieCard = ({ id, title, posterPath, votes }) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/w500';
  const location = useLocation();
  const path = location.pathname === '/movies' ? `${id}` : `movies/${id}`;

  return (
    <Item>
      <Link
        to={path}
        state={{ from: `${location.pathname + location.search}` }}
      >
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
      </Link>
    </Item>
  );
};

export default MovieCard;
