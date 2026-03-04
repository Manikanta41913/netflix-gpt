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
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

// Layout component - Header stays mounted
const Layout = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const currentPath = window.location.pathname;

    if (user && currentPath === "/") {
      navigate("/browse");
    } else if (!user && currentPath === "/browse") {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const Body = () => {
  const dispatch = useDispatch();

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

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
