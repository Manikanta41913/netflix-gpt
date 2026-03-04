import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { Netflix_logo, photo_URL } from "../utils/constants";

const Header = () => {
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  };

  const handleImageError = (e) => {
    // If image fails to load, use the default photo_URL
    e.target.src = photo_URL;
  };

  return (
    <div className="absolute top-0 left-0 w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img className="w-44" src={Netflix_logo} alt="Netflix_logo" />
      {user && (
        <div className="flex gap-2 items-center">
          <img
            className="rounded w-9 h-9"
            src={user.photoURL || photo_URL}
            alt="User"
            onError={handleImageError}
          />
          <button
            onClick={handleSignOut}
            className="bg-red-600 text-white font-bold px-2 py-1 rounded-md hover:bg-red-700"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
