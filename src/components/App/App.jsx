import { Routes, Route } from 'react-router-dom';
import React, { lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { GlobalStyle } from 'components/GlobalStyle';
import { Box } from 'components/Box';
import SharedLayout from 'components/SharedLayout';
import NotFound from 'pages/NotFound';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const Cast = lazy(() => import('components/Cast'));
const Reviews = lazy(() => import('components/Reviews'));
const MovieDetails = lazy(() => import('components/MovieDetails'));

const App = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <GlobalStyle />
      <ToastContainer />
    </Box>
  );
};

export default App;
