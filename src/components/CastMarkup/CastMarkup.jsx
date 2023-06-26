import PropTypes from 'prop-types';
import { CastList } from './CastMarkupStyled';

export default function CastMarkup({ cast }) {
  const GOOGLE_SERACH = 'https://www.google.com/search?q=';

  return (
    <CastList>
      {cast &&
        cast.map(({ id, name, profile_path, character }) => (
          <a
            href={GOOGLE_SERACH + name}
            rel="noreferrer noopener"
            target="_blank"
          >
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
          </a>
        ))}
    </CastList>
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
