import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { fetchFromTMDB } from "../utils/apiHelper";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);

  useEffect(() => {
    // Only fetch if data doesn't exist in Redux (memoization)
    if (popularMovies) return;

    const getPopularMovies = async () => {
      const data = await fetchFromTMDB(
        "https://api.themoviedb.org/3/movie/popular",
      );

      if (data && data.results) {
        console.log("Popular Movies:", data.results);
        dispatch(addPopularMovies(data.results));
      } else {
        console.error("Failed to fetch Popular movies");
        dispatch(addPopularMovies([]));
      }
    };

    getPopularMovies();
  }, [dispatch, popularMovies]);
};

export default usePopularMovies;
