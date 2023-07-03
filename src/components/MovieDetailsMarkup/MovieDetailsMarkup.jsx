import PropTypes from 'prop-types';
import { Info, Wraper } from './MovieDetailsMarkupStyled';
export default function MovieDetailsMarkup({ movie }) {
  return (
    movie && (
      <>
        <Wraper>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.original_title}
              height="500"
              width="350"
            />
          </div>
          <Info>
            <h2>
              {movie.original_title} ({movie.release_date.slice(0, 4)})
            </h2>
            <p>User score: {Math.round(movie.popularity)}%</p>

            <h2>Overview</h2>
            <p>{movie.overview}</p>

            <h2>Genres</h2>
            <p>
              {movie.genres?.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </p>
          </Info>
        </Wraper>
      </>
    )
  );
}

MovieDetailsMarkup.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
    popularity: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }),
};
