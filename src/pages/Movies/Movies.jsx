import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box } from 'components/Box';
import MovieGallery from 'components/MovieGallery';
import Loader from 'components/Loader';
import { SearchBar } from 'components/SearchBar';
import { getMovies } from 'utils';

const END_POINT = 'search/movie';
const STATUS = {
  idle: 0,
  pending: 1,
  resolved: 2,
  rejected: 3,
};

const Movies = () => {
  const [foundMovies, setFoundMovies] = useState([]);
  const [status, setStatus] = useState(STATUS.idle);

  const handleSubmit = async search => {
    try {
      const foundMovies = await getMovies({
        endPoint: END_POINT,
        search: search,
      });
      console.log('Home page:', foundMovies);
      setStatus(STATUS.resolved);

      setFoundMovies(foundMovies);
    } catch (error) {
      setStatus(STATUS.rejected);
      toast(error.message);
    }
  };

  return (
    <Box backgroundColor="bgMain" minHeight="100vh" as="main">
      <Box
        width="container"
        marginLeft="auto"
        marginRight="auto"
        paddingTop={4}
        paddingBottom={5}
        paddingLeft={3}
        paddingRight={3}
      >
        <SearchBar onSearchSubmit={handleSubmit} />
        {status === STATUS.pending && <Loader />}
        <MovieGallery movies={foundMovies} />
        <ToastContainer />
      </Box>
    </Box>
  );
};

export default Movies;
