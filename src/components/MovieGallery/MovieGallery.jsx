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
      {movies.map(({ id, title, poster_path, vote_average }) => (
        <MovieCard
          key={id}
          id={id}
          title={title}
          posterPath={poster_path}
          votes={vote_average}
        ></MovieCard>
      ))}
    </Box>
  );
};

export default MovieGallery;

MovieGallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number.isRequired,
    })
  ).isRequired,
};
