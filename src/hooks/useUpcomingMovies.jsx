import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { fetchFromTMDB } from "../utils/apiHelper";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  useEffect(() => {
    // Only fetch if data doesn't exist in Redux (memoization)
    if (upcomingMovies) return;

    const getUpcomingMovies = async () => {
      const data = await fetchFromTMDB(
        "https://api.themoviedb.org/3/movie/upcoming",
      );

      if (data && data.results) {
        console.log("Upcoming Movies:", data.results);
        dispatch(addUpcomingMovies(data.results));
      } else {
        console.error("Failed to fetch Upcoming movies");
        dispatch(addUpcomingMovies([]));
      }
    };

    getUpcomingMovies();
  }, [dispatch, upcomingMovies]);
};

export default useUpcomingMovies;
