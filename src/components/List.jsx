import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

export default function List({ movies }) {
  const location = useLocation();
  return (
    <ul>
      {movies &&
        movies.map(({ id, title, poster_path, original_title }) => (
          <li key={id}>
            <Link state={{ from: location }} to={`/movies/${id}`}>
              <img
                src={`https://image.tmdb.org/t/p/original${poster_path}`}
                alt={original_title}
                width=""
                height="300"
              />

              <h3>{title}</h3>
            </Link>
          </li>
        ))}
    </ul>
  );
}

List.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
      original_title: PropTypes.string.isRequired,
    })
  ),
};
