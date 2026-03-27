import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovieVideos = async () => {
      console.log("🎬 Fetching trailer for movieId:", movieId);
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        API_OPTIONS,
      );

      const json = await data.json();
      console.log("🎬 API Response:", json);
      const filteredData = json.results.filter(
        (video) => video.type === "Trailer" && video.site === "YouTube",
      );
      const trailer = filteredData.length
        ? filteredData[0]
        : json.results.find((v) => v.site === "YouTube");

      console.log("🎬 Selected trailer:", trailer);
      dispatch(addTrailerVideo(trailer));
    };

    if (movieId) {
      getMovieVideos();
    }
  }, [movieId, dispatch]);
};

export default useMovieTrailer;
