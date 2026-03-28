import MovieCard from "./MovieCard";
import { memo } from "react";

const MovieList = ({ title, movies = [] }) => {
  return (
    <section className="mb-6">
      <div className="mb-2">
        <p className="text-2xl text-bold font-semibold">{title}</p>
      </div>
      <div className="flex gap-3 overflow-x-scroll scrollbar-hide">
        {movies.length === 0 ? (
          <p className="text-sm text-gray-500">No movies found.</p>
        ) : (
          movies.map((m) => (
            <MovieCard key={m.id} poster_path={m.poster_path} />
          ))
        )}
      </div>
    </section>
  );
};

export default memo(MovieList);
