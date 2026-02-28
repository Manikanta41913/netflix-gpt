import Header from "./Header";
import { useState } from "react";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/5eb03855-b753-4788-b9b3-0cc29e3d2891/web/IN-en-20260223-TRIFECTA-perspective_7bcba0fc-d5a5-42f6-b4ed-2ca56a458c61_large.jpg"
        alt="logo"
      />
      <form className="fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2  m-24 p-12 bg-black flex flex-col w-3/12 align-middle rounded-md bg-opacity-80">
        <h1 className="p-2 mt-6 font-bold text-3xl text-center text-white">
          {isSignInForm ? "Sign In" : "Sign UP"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 rounded-md"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 m-2 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 m-2 rounded-md"
        />
        <button className="p-2 m-2 bg-red-600 rounded-md cursor-pointer">
          Sign in
        </button>
        <button
          type="button"
          onClick={toggleForm}
          className="text-white m-2 p-2 cursor-pointer"
        >
          <p>
            {isSignInForm
              ? "New To Netflix? Sign UP Now"
              : "Already registered? Sign In Now"}
          </p>
        </button>
      </form>
    </div>
  );
};
export default Login;
