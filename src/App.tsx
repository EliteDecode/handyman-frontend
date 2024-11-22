import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import LandingLayout from "./layouts/LandingLayout";
import { Home, About, Privacy } from "./routes";

// routes

export default function App() {
  return (
    <RouterProvider
      router={createBrowserRouter([
        //Landing Routes
        {
          path: "/",
          element: <Navigate to="/home" />,
        },
        {
          path: "/",
          element: <LandingLayout />,
          children: [
            {
              path: "/home",
              element: <Home />,
            },
            {
              path: "/about",
              element: <About />,
            },
            {
              path: "/privacy",
              element: <Privacy />,
            },
          ],
        },

        {
          path: "*",
          element: <Navigate to="/dashboard/home" />,
        },
      ])}
    />
  );
}
