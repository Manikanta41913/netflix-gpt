import { IMG_CDN, photo_URL } from "../utils/constants";

const MovieCard = ({ poster_path }) => {
  const src = poster_path ? IMG_CDN + poster_path : photo_URL;

  return (
    <div className="w-40 flex-shrink-0 transition-transform hover:scale-105 cursor-pointer">
      <img alt="movie" className="rounded-md w-full h-auto" src={src} />
    </div>
  );
};

export default MovieCard;
