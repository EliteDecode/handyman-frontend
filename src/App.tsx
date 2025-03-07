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
  Login,
  ForgetPassword,
  ResetPassword,
  FacebookCallback,
  GoogleCallback,
} from "./routes";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import DashboardLayout from "./layouts/Dashboard.tsx";
import AuthLayout from "./layouts/AuthLayout";
import RoleSelection from "./pages/HandymanAuth/RoleSelection/RoleSelection";
import HMSignUp from "./pages/HandymanAuth/signUp/SignUp";
import CompleteYourProfile from "./pages/HandymanAuth/completeYourProfile/CompleteYourProfile";
import VerificationAndIdentification from "./pages/HandymanAuth/verificationAndIdentification/VerificationAndIdentification";
import Portfolio from "./pages/HandymanAuth/portfolio/Portfolio";

// routes

export default function App() {
  const { token } = useSelector((state: RootState) => state.customerAuth);
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
        // Auth routes
        {
          path: "auth",
          element: token ? <Navigate to="/home" /> : <AuthLayout />,
          children: [
            {
              path: "user-signup",
              element: <SignUp />,
            },
            {
              path: "verify-email",
              element: <VerifyEmail />,
            },
            {
              path: "email-success",
              element: <EmailSuccess />,
            },
            {
              path: "login",
              element: <Login />,
            },
            {
              path: "forget-password",
              element: <ForgetPassword />,
            },
            {
              path: "reset-password",
              element: <ResetPassword />,
            },
            {
              path: "google/callback",
              element: <GoogleCallback />,
            },
            {
              path: "facebook/callback",
              element: <FacebookCallback />,
            },
          ],
        },

        {
          path: "dashboard",
          element: token ? <DashboardLayout /> : <Navigate to="/auth/login" />,
          children: [
            {
              path: "complete-profile",
              element: <CompleteProfile />,
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
              element: <HMSignUp />,
            },
            {
              path: "complete-your-profile",
              element: <CompleteYourProfile />,
            },
            {
              path: "verification-and-Identification",
              element: <VerificationAndIdentification />,
            },
            {
              path: "portfolio",
              element: <Portfolio />,
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
