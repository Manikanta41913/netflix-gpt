import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <>
      <MainContainer />
      <SecondaryContainer />
      {/*
        MainContianer
          -VedioBackground
          -VideoTitle
        Secondary Container
          - MoiveList * n
            -card * n
      */}
    </>
  );
};

export default Browse;
