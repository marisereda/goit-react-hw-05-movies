import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Box } from 'components/Box';
import MovieGallery from 'components/MovieGallery';
import Loader from 'components/Loader';
import { PageTitle } from './Home.styled';
import { getTrendingMovies } from 'utils';

const STATUS = {
  idle: 0,
  pending: 1,
  resolved: 2,
  rejected: 3,
};

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [status, setStatus] = useState(STATUS.idle);

  // -------------------------------------------------
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function getMovies() {
      try {
        const trendingMovies = await getTrendingMovies({ signal });
        setStatus(STATUS.resolved);

        setTrendingMovies(trendingMovies);
      } catch (error) {
        setStatus(STATUS.rejected);
        toast(error.message);
      }
    }
    getMovies();

    return () => {
      controller.abort();
    };
  }, []);

  // -------------------------------------------------
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
        <PageTitle>Trending today</PageTitle>

        {status === STATUS.pending && <Loader />}
        {trendingMovies.length !== 0 && (
          <MovieGallery movies={trendingMovies} />
        )}
      </Box>
    </Box>
  );
};

export default Home;
