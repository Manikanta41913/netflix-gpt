import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies) || [];
  const popularMovies =
    useSelector((store) => store.movies?.popularMovies) || [];
  const topRatedMovies =
    useSelector((store) => store.movies?.topRatedMovies) || [];
  const upcomingMovies =
    useSelector((store) => store.movies?.upcomingMovies) || [];
  return (
    <div className="bg-gray-600 p-4 md:p-6 -mt-48 relative z-20">
      <div>
        <MovieList title="Now Playing" movies={movies} />
        <MovieList title="Top Rated" movies={topRatedMovies} />
        <MovieList title="Popular" movies={popularMovies} />
        <MovieList title="Upcoming" movies={upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
