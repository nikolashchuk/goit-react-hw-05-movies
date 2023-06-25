import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getActors } from '../Services/serviceAPI';
import CastMarkup from 'components/CastMarkup';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getActors(movieId)
      .then(data => setCast(data))
      .catch(error => console.log(error));
  }, [movieId]);

  return <CastMarkup cast={cast} />;
}
