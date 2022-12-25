import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Box } from 'components/Box';
import Loader from 'components/Loader';
import { getMovieCast } from 'utils';
import { Image, ImageWrap } from './Cast.styled';

const STATUS = {
  idle: 0,
  pending: 1,
  resolved: 2,
  rejected: 3,
};

const Cast = () => {
  const BASE_URL = 'https://image.tmdb.org/t/p/w300';
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [status, setStatus] = useState(STATUS.idle);

  // -------------------------------------------------
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function getCast() {
      try {
        setStatus(STATUS.pending);
        const castInfo = await getMovieCast({ id: movieId, signal });
        setCast(castInfo);
        setStatus(STATUS.resolved);
      } catch (error) {
        setStatus(STATUS.rejected);
        toast(error.message);
      }
    }
    getCast();

    return () => {
      controller.abort();
    };
  }, [movieId]);

  // -------------------------------------------------
  if (!cast) {
    return;
  }

  // -------------------------------------------------
  return (
    <Box borderRadius="textBlock" backgroundColor="bgAccent" padding={6}>
      {status === STATUS.pending && <Loader />}
      {cast.length === 0 ? (
        <p>There is no cast.</p>
      ) : (
        <Box
          display="grid"
          gridTemplateColumns="1fr 1fr 1fr"
          gridGap={5}
          maxWidth="maxBox"
          as="ul"
        >
          {cast.map(({ id, profile_path, name, character }) => (
            <li key={id}>
              <ImageWrap>
                <Image src={BASE_URL + profile_path} alt={name} />
              </ImageWrap>
              <h3>{name}</h3>
              <p>
                Character: <span>{character}</span>
              </p>
            </li>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Cast;
