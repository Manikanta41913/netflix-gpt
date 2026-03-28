import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector, useDispatch } from "react-redux";
import {
  Netflix_logo,
  photo_URL,
  SUPPORTED_LANGUAGES,
} from "../utils/constants";
import { toggleGPTsearchView, changeLanguage } from "../utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGPTsearch = useSelector((store) => store.gpt.showGPTsearch);

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  };

  const handleGPTSearchToggle = () => {
    dispatch(toggleGPTsearchView());
  };

  const handleImageError = (e) => {
    e.target.src = photo_URL;
  };

  return (
    <div className="absolute top-0 left-0 w-full px-8 py-2 bg-gradient-to-b from-black z-50 flex justify-between items-center">
      <img className="w-44" src={Netflix_logo} alt="Netflix_logo" />
      {user && (
        <div className="flex gap-2 items-center">
          {showGPTsearch && (
            <select
              onChange={handleLanguageChange}
              className="p-2 bg-gray-800 text-white rounded-md border border-gray-600 hover:bg-gray-700 transition-colors cursor-pointer"
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGPTSearchToggle}
            className="p-2 m-2 bg-purple-800 text-white rounded-md hover:bg-purple-900 transition-colors"
          >
            {showGPTsearch ? "Home" : "GPT Search"}
          </button>
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
