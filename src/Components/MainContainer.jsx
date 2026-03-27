import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  // Guard: movies may be null or an empty array while fetching or on error
  if (!movies || movies.length === 0) return null;

  const mainMovie = movies[0];
  if (!mainMovie) return null;

  const { original_title, overview, id } = mainMovie;
  console.log("Main movie:", mainMovie);
  return (
    <div className="relative w-full aspect-video">
      <VideoBackground movieId={id} />
      <VideoTitle title={original_title} overview={overview} />
    </div>
  );
};

export default MainContainer;
