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
  Dashboard,
  ServicesProvider,
  ServicesListing,
  HandymanProfile,
  HandymanPortfolioImage,
  HandymanPortfolioCertification,
  HandymanRatings,
  BookingAvailabilty,

} from "./routes";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import DashboardLayout from "./layouts/Dashboard.tsx/index.tsx";
import AuthLayout from "./layouts/AuthLayout";
import RoleSelection from "./pages/HandymanAuth/RoleSelection/RoleSelection";
import HMSignUp from "./pages/HandymanAuth/signUp/SignUp";
import CompleteYourProfile from "./pages/HandymanAuth/completeYourProfile/CompleteYourProfile";
import VerificationAndIdentification from "./pages/HandymanAuth/verificationAndIdentification/VerificationAndIdentification";
import Portfolio from "./pages/HandymanAuth/portfolio/Portfolio";
import DashboardSubLayout from "./layouts/Dashboard.tsx/DashboardSubLayout.tsx";

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
          element: token ? <Navigate to="/dashboard" /> : <AuthLayout />,
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
        // Dashboard routes
        {
          path: "dashboard",
          element: token ? <DashboardLayout /> : <Navigate to="/auth/login" />,
          children: [
            {
              path: "",
              element: <Dashboard />,
            },
            {
              path: "complete-profile",
              element: <CompleteProfile />,
            },
            {
              path: "bookings",
              element: <h2>Bookings</h2>,
            },
            {
              path: "payments-invoices",
              element: <h2>Payment & Invoices</h2>,
            },
            {
              path: "settings",
              element: <h2>Settings</h2>,
            },
          ],
        },
        {
          path: "dashboard",
          element: token ? (
            <DashboardSubLayout />
          ) : (
            <Navigate to="/auth/login" />
          ),
          children: [
            {
              path: "services-listing",
              element: <ServicesListing />,
            },
            {
              path: "services-provider",
              element: <ServicesProvider />,
            },
            {
              path: "handyman-profile",
              element: <HandymanProfile />,
            },
            {
              path: "handyman-portfolio-images/:id",
              element: <HandymanPortfolioImage />,
            },
            {
              path: "handyman-portfolio-certs/:id",
              element: <HandymanPortfolioCertification />,
            },
            {
              path: "handyman-ratings/:id",
              element: <HandymanRatings />,
            },
            {
              path: "booking-availability",
              element: <BookingAvailabilty />,
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
