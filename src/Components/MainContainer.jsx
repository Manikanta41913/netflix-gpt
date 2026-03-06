import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies === null) return;
  const mainMovie = movies[0];
  console.log("Main movie:", mainMovie);

  return (
    <div className="pt-20">
      <VideoBackground movie={mainMovie} />
      <VideoTitle />
    </div>
  );
};

export default MainContainer;
