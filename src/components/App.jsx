import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Navigations from './Navigations';
const HomePage = lazy(() => import('../pages/HomePage'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('../pages/Cast'));
const Reviews = lazy(() => import('../pages/Reviews'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const App = () => {
  return (
    <>
      <header>
        <Navigations />
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};
