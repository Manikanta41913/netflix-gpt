import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { fetchFromTMDB } from "../utils/apiHelper";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies,
  );

  useEffect(() => {
    // Only fetch if data doesn't exist in Redux (memoization)
    if (nowPlayingMovies) return;

    const getNowPlayingMovies = async () => {
      const data = await fetchFromTMDB(
        "https://api.themoviedb.org/3/movie/now_playing",
      );

      if (data && data.results) {
        console.log("Now Playing Movies:", data.results);
        dispatch(addNowPlayingMovies(data.results));
      } else {
        console.error("Failed to fetch Now Playing movies");
        dispatch(addNowPlayingMovies([]));
      }
    };

    getNowPlayingMovies();
  }, [dispatch, nowPlayingMovies]);
};

export default useNowPlayingMovies;
