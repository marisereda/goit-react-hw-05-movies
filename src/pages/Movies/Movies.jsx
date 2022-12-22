import MovieGallery from 'components/MovieGallery';
import { SearchBar } from 'components/SearchBar';

const Movies = () => {
  const handleSubmit = () => {};
  return (
    <main>
      <SearchBar onSearchSubmit={handleSubmit} />
      <MovieGallery />
    </main>
  );
};

export default Movies;
