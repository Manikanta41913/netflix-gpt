import Browse from "./Browse";
import Login from "./Login";
import Header from "./Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Login />
        </>
      ),
    },
    {
      path: "/browse",
      element: (
        <>
          <Header />
          <Browse />
        </>
      ),
    },
  ]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        console.log("🔥 Firebase User Data:", {
          uid,
          email,
          displayName,
          photoURL,
        });
        dispatch(addUser({ uid, email, displayName, photoURL }));
      } else {
        console.log("🔥 No user logged in");
        dispatch(removeUser());
      }
    });

    // Cleanup function - unsubscribe when component unmounts
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
