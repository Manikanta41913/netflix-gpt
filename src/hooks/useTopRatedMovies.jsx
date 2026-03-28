import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { fetchFromTMDB } from "../utils/apiHelper";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  useEffect(() => {
    // Only fetch if data doesn't exist in Redux (memoization)
    if (topRatedMovies) return;

    const getTopRatedMovies = async () => {
      const data = await fetchFromTMDB(
        "https://api.themoviedb.org/3/movie/top_rated",
      );

      if (data && data.results) {
        console.log("Top Rated Movies:", data.results);
        dispatch(addTopRatedMovies(data.results));
      } else {
        console.error("Failed to fetch Top Rated movies");
        dispatch(addTopRatedMovies([]));
      }
    };

    getTopRatedMovies();
  }, [dispatch, topRatedMovies]);
};

export default useTopRatedMovies;
