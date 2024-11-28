import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import LandingLayout from "./layouts/LandingLayout";
import { Home } from "./routes";
import HelpAndSupport from "./pages/general/HelpAndSupport/HelpAndSupport";

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
              path: "/HelpAndSupport",
              element: <HelpAndSupport />,
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
