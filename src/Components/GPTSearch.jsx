import GPTSearchBar from "./GPTSearchBar";
import GPTSuggestedMovies from "./GPTSuggestedMovies";

const GPTSearch = () => {
  return (
    <div className="min-h-screen bg-black pt-24 px-8">
      <GPTSearchBar />
      <GPTSuggestedMovies />
    </div>
  );
};

export default GPTSearch;
