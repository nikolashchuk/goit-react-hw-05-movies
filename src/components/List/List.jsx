import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { FilmName, Films } from './ListStyled';

export default function List({ movies }) {
  const location = useLocation();
  return (
    <Films>
      {movies &&
        movies.map(({ id, title, poster_path, original_title }) => (
          <li key={id}>
            <Link state={{ from: location }} to={`/movies/${id}`}>
              <img
                src={`https://image.tmdb.org/t/p/original${poster_path}`}
                alt={original_title}
                width=""
                height="400"
              />

              <FilmName>{title}</FilmName>
            </Link>
          </li>
        ))}
    </Films>
  );
}

List.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      original_title: PropTypes.string.isRequired,
    })
  ),
};
