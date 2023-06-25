import { useState, useEffect } from 'react';
import {
  useParams,
  Link,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';

import { getDetailsById } from '../Services/serviceAPI';
import MovieDetailsMarkup from 'components/MovieDetailsMarkup';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    getDetailsById(movieId)
      .then(setMovie)
      .catch(error => console.log(error));
  }, [movieId]);

  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(location?.state?.from ?? '/');
  };

  return (
    <main>
      <button type="button" onClick={handleGoBack}>
        Go back
      </button>
      <MovieDetailsMarkup movie={movie} />

      <h3>Additional info</h3>

      <ul>
        <li>
          <Link state={{ from: location?.state?.from ?? '/' }} to="cast">
            Cast
          </Link>
        </li>
        <li>
          <Link state={{ from: location?.state?.from ?? '/' }} to="Reviews">
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
}
