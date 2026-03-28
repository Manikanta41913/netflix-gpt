import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTSuggestedMovies = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);

  if (!movieNames) {
    return (
      <div className="max-w-6xl mx-auto mt-8">
        <div className="text-center text-gray-400">
          <p className="text-sm">
            GPT-powered movie suggestions will appear here 🚀
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto mt-8 bg-black bg-opacity-80 p-6 rounded-lg">
      <h2 className="text-3xl font-bold text-white mb-6">
        🎬 Recommended Movies
      </h2>
      <div className="space-y-6">
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GPTSuggestedMovies;
