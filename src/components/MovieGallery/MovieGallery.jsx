import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import MovieCard from 'components/MovieCard';

const MovieGallery = ({ movies }) => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="1fr 1fr 1fr 1fr"
      gridGap={5}
      as="ul"
    >
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          posterPath={movie.poster_path}
          votes={movie.vote_average}
        ></MovieCard>
      ))}
    </Box>
  );
};

export default MovieGallery;
