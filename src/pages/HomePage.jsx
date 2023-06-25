import { useState, useEffect } from 'react';
import { getTrendingMovie } from '../Services/serviceAPI';
import List from '../components/List';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovie()
      .then(data => setMovies(data.results))
      .catch(error => console.log(error));
  }, []);

  return (
    <main>
      <h2>Trending Movies</h2>
      {<List movies={movies} />}
    </main>
  );
}
