const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute left-6 top-32 z-20 max-w-xl md:max-w-2xl p-6 md:p-8 bg-gradient-to-r from-black/80 via-black/30 to-transparent rounded-md">
      <h1 className="text-3xl md:text-5xl lg:text-6xl text-white font-extrabold leading-tight drop-shadow-lg py-10">
        {title}
      </h1>
      <p className="mt-4 text-sm md:text-lg text-gray-200/90 max-h-28 overflow-hidden">
        {overview}
      </p>
      <div className="mt-6 flex items-center gap-3">
        <button className="inline-flex items-center gap-3 bg-white text-black px-4 py-2 md:px-6 md:py-3 rounded-md text-base md:text-lg shadow-sm hover:scale-105 transition-transform">
          <span>▶️</span> Play
        </button>
        <button className="inline-flex items-center gap-2 bg-white/10 text-white px-3 py-2 rounded-md border border-white/20 hover:bg-white/20 transition">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
