import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useState } from "react";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const [isMuted, setIsMuted] = useState(true);
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  console.log("video key:" + trailerVideo?.key);
  return (
    <div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-10">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        console.log("HIi this testing");
        <button
          onClick={toggleMute}
          className="absolute bottom-[10%] right-[2%] bg-gray-900 bg-opacity-70 text-white p-3 rounded-full hover:bg-opacity-90 transition-all z-50 border-2 border-white text-xl"
          title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? "🔇" : "🔊"}
        </button>
      </div>
    </div>
  );
};

export default VideoBackground;
