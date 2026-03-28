import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";
import { fetchFromTMDB } from "../utils/apiHelper";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovieVideos = async () => {
      console.log("🎬 Fetching trailer for movieId:", movieId);

      const data = await fetchFromTMDB(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      );

      if (data && data.results) {
        console.log("🎬 API Response:", data);

        const filteredData = data.results.filter(
          (video) => video.type === "Trailer" && video.site === "YouTube",
        );

        const trailer = filteredData.length
          ? filteredData[0]
          : data.results.find((v) => v.site === "YouTube");

        console.log("🎬 Selected trailer:", trailer);
        dispatch(addTrailerVideo(trailer || null));
      } else {
        console.error("Failed to fetch trailer");
        dispatch(addTrailerVideo(null));
      }
    };

    if (movieId) {
      getMovieVideos();
    }
  }, [movieId, dispatch]);
};

export default useMovieTrailer;
