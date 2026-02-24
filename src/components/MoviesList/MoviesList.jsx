import './MoviesList.scss';
import { MovieCard } from '../MovieCard';

export const MoviesList = ({ movies, query }) => {
  let visibleMovies = [...movies];

  if (query) {
    visibleMovies = visibleMovies.filter(film => {
      const normalizedQuery = query.toLowerCase().trim();

      return (
        film.title.toLowerCase().includes(normalizedQuery) ||
        film.description.toLowerCase().includes(normalizedQuery)
      );
    });
  }

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};
