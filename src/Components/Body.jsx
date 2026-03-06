import Browse from "./Browse";
import Login from "./Login";
import Header from "./Header";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigate,
} from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

// Layout component - Header stays mounted
const Layout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        navigate("/browse");
      } else {
        console.log("🔥 No user logged in");
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Login />,
        },
        {
          path: "browse",
          element: <Browse />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
