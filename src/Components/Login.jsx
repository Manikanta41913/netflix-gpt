import Header from "./Header";
import checkValidateData from "../utils/Validate";
import { useState, useRef } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // State to toggle between Sign In and Sign Up forms
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);

  // State to store and display validation error messages
  const [errorMessage, setErrorMessage] = useState(null);

  // Toggle between Sign In and Sign Up mode
  const toggleForm = (e) => {
    e.preventDefault();
    setIsSignInForm(!isSignInForm);
  };

  // useRef to access input values without causing re-renders on every keystroke
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null); // Only used in Sign Up mode

  // Handle form submission for both Sign In and Sign Up
  const handleSignInForm = (e) => {
    e.preventDefault(); // Prevent page refresh on form submit

    // FIX: Pass name only on Sign Up, null on Sign In
    // !isSignInForm means "NOT Sign In" = "Sign Up"
    const message = checkValidateData(
      email.current.value,
      password.current.value,
      !isSignInForm ? name.current.value : null, // Pass name only on Sign Up
    );

    setErrorMessage(message);
    console.log("Validation result:", message);
    console.log("Email:", email.current.value);
    console.log("Password:", password.current.value);

    if (message) {
      return;
    }

    // Sign Up or Sign In logic
    if (!isSignInForm) {
      // Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up successfully
          const user = userCredential.user;
          console.log("User signed up:", user);
          navigate("/Browser");
        })
        .catch((error) => {
          setErrorMessage(error.code + ": " + error.message);
        });
    } else {
      // Sign In logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in successfully
          const user = userCredential.user;
          console.log("User signed in:", user);
          navigate("/");
        })
        .catch((error) => {
          setErrorMessage(error.code + ": " + error.message);
        });
    }
  };

  return (
    <div>
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/5eb03855-b753-4788-b9b3-0cc29e3d2891/web/IN-en-20260223-TRIFECTA-perspective_7bcba0fc-d5a5-42f6-b4ed-2ca56a458c61_large.jpg"
        alt="logo"
      />
      <form className="fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2  m-24 p-12 bg-black flex flex-col w-3/12 align-middle rounded-md bg-opacity-80">
        {/* Dynamic heading based on form mode */}
        <h1 className="p-2 mt-6 font-bold text-3xl text-center text-white">
          {isSignInForm ? "Sign In" : "Sign UP"}
        </h1>

        {/* Name input - ONLY shown on Sign Up page (!isSignInForm means "not Sign In" = "Sign Up") */}
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 rounded-md"
          />
        )}

        {/* Email input - shown on both Sign In and Sign Up */}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 m-2 rounded-md"
        />

        {/* Password input - shown on both Sign In and Sign Up */}
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 m-2 rounded-md"
        />

        {/* Display validation error message */}
        <p className="text-red-700 font-bold ml-2">{errorMessage}</p>

        {/* Submit button - text changes based on form mode */}
        <button
          onClick={handleSignInForm}
          className="p-2 m-2 bg-red-600 rounded-md cursor-pointer"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        {/* Toggle button to switch between Sign In and Sign Up */}
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
