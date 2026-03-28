const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-red-600"></div>
        <p className="text-white mt-4 text-lg">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
