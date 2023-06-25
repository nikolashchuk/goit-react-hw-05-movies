import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ReviewsMarkup from '../components/ReviewsMarkup';
import { getReviews } from '../Services/serviceAPI';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId)
      .then(result => {
        setReviews(result);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  return <> {reviews && <ReviewsMarkup reviews={reviews} />} </>;
}
