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
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <iframe
        className="w-full h-full object-cover -z-20"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=${isMuted ? "1" : "0"}&controls=0&loop=1&playlist=${trailerVideo?.key}&modestbranding=1&rel=0&enablejsapi=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

      <button
        onClick={toggleMute}
        className="absolute bottom-60 right-6 z-10 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-shadow"
        title={isMuted ? "Unmute" : "Mute"}
        aria-pressed={!isMuted}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? "🔇" : "🔊"}
      </button>
    </div>
  );
};

export default VideoBackground;
