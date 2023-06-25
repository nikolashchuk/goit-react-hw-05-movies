import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieBySearch } from '../Services/serviceAPI';
import Searchbar from 'components/Searchbar';
import List from 'components/List';

export default function Movies() {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    if (search === '') {
      return alert('input any data');
    }

    getMovieBySearch(search)
      .then(setMovies)
      .catch(error => console.log(error));
  }, [search]);

  const onSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    setSearchParams({ search: form.elements.search.value });
    form.reset();
  };

  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      {search && <List movies={movies} />}
    </>
  );
}
