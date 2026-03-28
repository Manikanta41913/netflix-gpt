import { useSelector } from "react-redux";
import { useRef } from "react";
import { LANGUAGE_TRANSLATIONS } from "../utils/constants";
import openAIkey from "../utils/gptopenai";
import { fetchFromTMDB } from "../utils/apiHelper";
import { useDispatch } from "react-redux";
import { addGptMovies } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector((store) => store.gpt.selectedLanguage);
  const langText =
    LANGUAGE_TRANSLATIONS[selectedLanguage] || LANGUAGE_TRANSLATIONS.en;
  const searchText = useRef(null);

  const searchMovieInTMDB = async (movie) => {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movie.trim())}`,
    );
    return data?.results || [];
  };

  const handleGptSearchClick = async () => {
    const userQuery = searchText.current.value;
    console.log("Search text:", userQuery);

    const gptQuery =
      "Act as movie recommendation system and suggest some movies for the query: " +
      userQuery +
      ". only give me names of 5 movies, comma separated like the example result given ahead. Example result: Gadar,Sholay,Golmaal,Don,Koi Mil Gaya";

    try {
      const gptResults = await openAIkey.chat.completions.create({
        model: "llama-3.3-70b-versatile", // Groq's Llama 3.3 model (FREE & FAST)
        messages: [
          {
            role: "system",
            content:
              "You are a helpful movie recommendation assistant. Suggest 5 movies based on the user's query.",
          },
          { role: "user", content: gptQuery },
        ],
      });
      console.log("GPT Results:", gptResults.choices?.[0]?.message?.content);
      const gptMovies =
        gptResults.choices?.[0]?.message?.content?.split(",") || [];

      const moviePromiseArray = gptMovies.map((movie) =>
        searchMovieInTMDB(movie),
      );

      const tmdbResults = await Promise.all(moviePromiseArray);
      console.log("TMDB Results:", tmdbResults);

      dispatch(
        addGptMovies({ movieNames: gptMovies, movieResults: tmdbResults }),
      );
    } catch (error) {
      console.error("Error calling OpenAI:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">
        GPT Movie Search
      </h1>

      <div className="bg-gray-900 p-6 rounded-lg shadow-xl">
        <form className="flex gap-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            ref={searchText}
            placeholder={langText.gptSearchPlaceholder}
            className="flex-1 p-4 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-purple-500"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-purple-800 text-white rounded-md hover:bg-purple-900 transition-colors font-semibold"
            onClick={handleGptSearchClick}
          >
            {langText.search}
          </button>
        </form>
      </div>

      <div className="mt-8 text-center text-gray-400">
        <p>Try: "Show me action movies with superheroes"</p>
      </div>
    </div>
  );
};

export default GPTSearchBar;
