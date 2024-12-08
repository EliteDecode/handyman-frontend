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
  SignUp,
  VerifyEmail,
  EmailSuccess,
  CompleteProfile,
  Login
} from "./routes";

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
          path: "/sign-up",
          element: <SignUp />,
        },
        {
          path: "/verify-email",
          element: <VerifyEmail />,
        },
        {
          path: "/email-success",
          element: <EmailSuccess />,
        },
        {
          path: "/complete-profile",
          element: <CompleteProfile />,
        },
        {
          path: "/login",
          element: <Login />,
        },

        {
          path: "*",
          element: <Navigate to="/" />,
        },
      ])}
    />
  );
}
