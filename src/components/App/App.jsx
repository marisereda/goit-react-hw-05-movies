import { Routes, Route } from 'react-router-dom';
import React, { lazy } from 'react';

import { GlobalStyle } from 'components/GlobalStyle';
import { Box } from 'components/Box';
import SharedLayout from 'components/SharedLayout';
// import Home from 'pages/Home';
// import Movies from 'pages/Movies';
// import MovieDetails from 'components/MovieDetails';
// import Cast from 'components/Cast';
// import Reviews from 'components/Reviews';
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
    </Box>
  );
};

export default App;

// '/' - компонент Home, домашняя страница со списком популярных кинофильмов.
// '/movies' - компонент Movies, страница поиска фильмов по ключевому слову.
// '/movies/:movieId' - компонент MovieDetails, страница с детальной информацией о кинофильме.
// /movies/:movieId/cast - компонент Cast, информация о актерском составе. Рендерится на странице MovieDetails.
// /movies/:movieId/reviews - компонент Reviews, информация об обзорах. Рендерится на странице MovieDetails.
// Code Splitting (разделение кода)
