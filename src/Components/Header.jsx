import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  console.log("🎨 Header - Redux User:", user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful
        navigate("/");
      })
      .catch((error) => {
        // Handle error
        console.error("Sign out error:", error);
      });
  };

  return (
    <div className="absolute top-0 left-0 w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img
        className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-02-12/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix logo"
      />
      {user && (
        <div className="flex gap-2 items-center">
          <img className="rounded w-9 h-9" src={user.photoURL} alt="User" />
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
