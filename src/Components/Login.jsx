import checkValidateData from "../utils/Validate";
import { useState, useRef } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import { back_ground } from "../utils/constants";
import { photo_URL } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const toggleForm = (e) => {
    e.preventDefault();
    setIsSignInForm(!isSignInForm);
  };

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleSignInForm = (e) => {
    e.preventDefault();

    const message = checkValidateData(
      email.current.value,
      password.current.value,
      !isSignInForm ? name.current.value : null,
    );

    setErrorMessage(message);

    if (message) {
      return;
    }

    if (!isSignInForm) {
      // Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: photo_URL,
          })
            .then(() => {
              console.log("✅ Profile updated successfully");

              // Get fresh user data from Firebase auth
              const updatedUser = auth.currentUser;
              console.log("👤 Fresh user from Firebase:", {
                uid: updatedUser.uid,
                email: updatedUser.email,
                displayName: updatedUser.displayName,
                photoURL: updatedUser.photoURL,
              });
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
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
        .then(() => {
          // Signed in successfully - Body.jsx will handle Redux via onAuthStateChanged
        })
        .catch((error) => {
          setErrorMessage(error.code + ": " + error.message);
        });
    }
  };

  return (
    <div className="relative h-screen">
      <img
        className="absolute w-full h-full object-cover"
        src={back_ground}
        alt="background"
      />
      <form className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 p-12 bg-black flex flex-col w-3/12 rounded-md bg-opacity-80">
        <h1 className="p-2 mt-6 font-bold text-3xl text-center text-white">
          {isSignInForm ? "Sign In" : "Sign UP"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 rounded-md"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 m-2 rounded-md"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 m-2 rounded-md"
        />

        <p className="text-red-700 font-bold ml-2">{errorMessage}</p>

        <button
          onClick={handleSignInForm}
          className="p-2 m-2 bg-red-600 rounded-md cursor-pointer text-white"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
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
