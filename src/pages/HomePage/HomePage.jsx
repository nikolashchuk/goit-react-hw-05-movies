import { useState, useEffect } from 'react';
import { getTrendingMovie } from '../../Services/serviceAPI';
import List from '../../components/List/List';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovie()
      .then(data => setMovies(data.results))
      .catch(error => console.log(error));
  }, []);

  return (
    <main>
      <h2
        style={{
          margin: 8,
          padding: '12px 16px',
          borderRadius: 4,
          backgroundColor: 'gray',
          color: 'white',
        }}
      >
        Trending Movies
      </h2>
      {<List movies={movies} />}
    </main>
  );
}
