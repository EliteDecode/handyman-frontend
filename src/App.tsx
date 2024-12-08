import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import LandingLayout from "./layouts/LandingLayout";

import {
  Home,
  About,
  Privacy,
  Services,
  HelpAndSupport,
  Contact,
  Terms,
} from "./routes";
import Login from "./pages/HandymanAuth/login/Login";
import AuthLayout from "./layouts/AuthLayout";
import RoleSelection from "./pages/HandymanAuth/roleSelection/RoleSelection";
import SignUp from "./pages/HandymanAuth/signUp/signUp";
import CompleteYourProfile from "./pages/HandymanAuth/completeYourProfile/CompleteYourProfile";

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
              path: "/contact",
              element: <Contact />,
            },
            {
              path: "/about",
              element: <About />,
            },
            {
              path: "/privacy",
              element: <Privacy />,
            },
            {
              path: "/services",
              element: <Services />,
            },
            {
              path: "/terms",
              element: <Terms />,
            },
            {
              path: "/HelpAndSupport",
              element: <HelpAndSupport />,
            },
          ],
        },

        {
          path: "/role-selection",
          element: <RoleSelection />,
        },

        {
          path: "/auth",
          element: <AuthLayout />,
          children: [
            {
              path: "handyman-signup",
              element: <SignUp />,
            },
            {
              path: "complete-your-profile",
              element: <CompleteYourProfile />,
            },
          ],
        },

        {
          path: "*",
          element: <Navigate to="/" />,
        },
      ])}
    />
  );
}
