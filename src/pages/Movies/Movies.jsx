import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box } from 'components/Box';
import MovieGallery from 'components/MovieGallery';
import Loader from 'components/Loader';
import { SearchBar } from 'components/SearchBar';
import { getMovies } from 'utils';

const STATUS = {
  idle: 0,
  pending: 1,
  resolved: 2,
  rejected: 3,
};

const Movies = () => {
  const [foundMovies, setFoundMovies] = useState([]);
  const [status, setStatus] = useState(STATUS.movieGallery);
  const [searchParams, setSearchPararms] = useSearchParams();

  //------------------------------------------------
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const search = searchParams.get('query');

    setFoundMovies([]);
    if (!search) {
      return;
    }

    async function sendQuery() {
      try {
        setStatus(STATUS.pending);

        const foundMovies = await getMovies({
          search: search.trim(),
          signal,
        });
        setStatus(STATUS.resolved);
        setFoundMovies(foundMovies);
      } catch (error) {
        setStatus(STATUS.rejected);
        toast(error.message);
      }
    }
    sendQuery();

    return () => {
      controller.abort();
    };
  }, [searchParams]);

  //------------------------------------------------
  const handleSubmit = search => {
    setSearchPararms(search ? { query: search.trim() } : {});
  };

  //------------------------------------------------

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
        <SearchBar
          onSearchSubmit={handleSubmit}
          value={searchParams.get('query')}
        />

        {status === STATUS.pending && <Loader />}

        <MovieGallery movies={foundMovies} />
      </Box>
    </Box>
  );
};

export default Movies;
