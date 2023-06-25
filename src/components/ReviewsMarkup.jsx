import PropTypes from 'prop-types';

export default function ReviewsMarkup({ reviews }) {
  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map(({ id, content, author }) => (
          <li key={id}>
            <h3>{author}</h3>
            <p>{content}</p>
          </li>
        ))
      ) : (
        <h2>We don't have any reviews for this movie...</h2>
      )}
    </ul>
  );
}

ReviewsMarkup.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ),
};
