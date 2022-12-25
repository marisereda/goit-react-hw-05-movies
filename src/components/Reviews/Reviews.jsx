import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box } from 'components/Box';
import { getReviews } from 'utils';
import Loader from 'components/Loader';
import { Content } from './Reviews.styled';

const STATUS = {
  idle: 0,
  pending: 1,
  resolved: 2,
  rejected: 3,
};

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [status, setStatus] = useState(STATUS.idle);

  // -------------------------------------------------
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function getCast() {
      try {
        setStatus(STATUS.pending);
        const reviewInfo = await getReviews({ id: movieId, signal });
        setReviews(reviewInfo);
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
  if (!reviews) {
    return;
  }

  // -------------------------------------------------
  return (
    <Box borderRadius="textBlock" backgroundColor="bgAccent" padding={6}>
      {status === STATUS.pending && <Loader />}

      {reviews.length === 0 ? (
        <p>There is no reviews.</p>
      ) : (
        <Box as="ul" display="flex" flexDirection="column" gridGap={6}>
          {reviews.map(({ id, author, created_at, content }) => (
            <Box
              as="li"
              display="flex"
              flexDirection="column"
              gridGap={3}
              key={id}
            >
              <h3>{author}</h3>
              <h4>{created_at.slice(0, 10)}</h4>
              <Content>{content}</Content>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Reviews;
