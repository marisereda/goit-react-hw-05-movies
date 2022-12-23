import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box } from 'components/Box';
import { getMovies } from 'utils';
import MovieGallery from 'components/MovieGallery';
import Loader from 'components/Loader';
import { PageTitle } from './Home.styled';

const END_POINT = 'trending/movie/day';
const STATUS = {
  idle: 0,
  pending: 1,
  resolved: 2,
  rejected: 3,
};

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [status, setStatus] = useState(STATUS.idle);

  useEffect(() => {
    async function getTrendingMovies() {
      try {
        const trendingMovies = await getMovies({ endPoint: END_POINT });
        console.log('Home page:', trendingMovies);
        setStatus(STATUS.resolved);

        setTrendingMovies(trendingMovies);
      } catch (error) {
        setStatus(STATUS.rejected);
        toast(error.message);
      }
    }
    getTrendingMovies();
  }, []);

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
        <MovieGallery movies={trendingMovies} />
        <ToastContainer />
      </Box>
    </Box>
  );
};

export default Home;
