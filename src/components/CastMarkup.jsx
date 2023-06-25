import PropTypes from 'prop-types';

export default function CastMarkup({ cast }) {
  return (
    <ul>
      {cast &&
        cast.map(({ id, name, profile_path, character }) => (
          <li key={id}>
            <img
              src={
                profile_path &&
                `https://image.tmdb.org/t/p/original${profile_path}`
              }
              alt={name}
              height="300"
            />
            <h2>{name}</h2>
            <p>Character: {character}</p>
          </li>
        ))}
    </ul>
  );
}

CastMarkup.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      character: PropTypes.string.isRequired,
      profile_path: PropTypes.string,
    })
  ),
};
