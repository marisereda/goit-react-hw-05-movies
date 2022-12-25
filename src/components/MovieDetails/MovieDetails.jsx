import { useEffect, useState } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getMovieDetails } from 'utils';
import { Box } from 'components/Box';
import Loader from 'components/Loader';
import { Link } from 'components/Link';
import {
  Image,
  Title,
  SubTitle,
  Paragraph,
  Votes,
  Item,
  LinkBack,
  Icon,
} from './MovieDetails.styled';

const STATUS = {
  idle: 0,
  pending: 1,
  resolved: 2,
  rejected: 3,
};

const MovieDetails = () => {
  const BASE_URL = 'https://image.tmdb.org/t/p/w500';
  const location = useLocation();

  const { movieId } = useParams();
  const [details, setDetails] = useState(null);
  const [status, setStatus] = useState(STATUS.idle);

  // -------------------------------------------------
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    async function getDetails() {
      try {
        setStatus(STATUS.pending);
        const movieDetails = await getMovieDetails(movieId, signal);
        setDetails(movieDetails);
        setStatus(STATUS.resolved);
      } catch (error) {
        setStatus(STATUS.rejected);
        toast(error.message);
      }
    }
    getDetails();
    return () => {
      controller.abort();
    };
  }, [movieId]);

  // -------------------------------------------------
  if (!details) {
    return;
  }

  // -------------------------------------------------
  let genres = [];
  if (details.genres) {
    genres = details.genres.map(genre => genre.name).join(', ');
  }

  // -------------------------------------------------
  const backPath = location.state ? location.state.from : '/';

  return (
    <Box backgroundColor="bgMain" minHeight="100vh" as="main">
      <Box
        width="container"
        marginLeft="auto"
        marginRight="auto"
        paddingTop={5}
        paddingBottom={5}
        paddingLeft={3}
        paddingRight={3}
      >
        {status === STATUS.pending && <Loader />}
        <LinkBack to={backPath}>
          <Icon />
        </LinkBack>

        <Box display="grid" gridTemplateColumns="1fr 2fr" gridGap={6}>
          <Image
            src={BASE_URL + details.poster_path}
            alt={`Poster ${details.title}`}
          />

          <Box borderRadius="textBlock" backgroundColor="bgAccent" padding={6}>
            <Title>{details.title}</Title>
            <SubTitle>
              User score:
              <Votes>{details.vote_average.toFixed(1)}</Votes>
            </SubTitle>
            <SubTitle>Genres:</SubTitle>
            <Paragraph>{genres}</Paragraph>
            <SubTitle>Overview</SubTitle>
            <Paragraph>{details.overview}</Paragraph>
          </Box>

          <Box
            borderRadius="textBlock"
            backgroundColor="bgDark"
            padding={6}
            height="menu"
          >
            <ul>
              <Item>
                <Link to="cast">Cast</Link>
              </Item>
              <Item>
                <Link to="reviews">Reviews</Link>
              </Item>
            </ul>
          </Box>
          <Outlet />
        </Box>
        <ToastContainer />
      </Box>
    </Box>
  );
};

export default MovieDetails;
