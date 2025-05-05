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
} from "./routes";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import DashboardLayout from "./layouts/Dashboard.tsx/index.tsx";
import HandymanDashboardLayout from "./layouts/HandyManDashboardLayout/Index.tsx";
import AuthLayout from "./layouts/AuthLayout";
import RoleSelection from "./pages/HandymanAuth/RoleSelection/RoleSelection";
import HMSignUp from "./pages/HandymanAuth/signUp/SignUp";
import CompleteYourProfile from "./pages/HandymanAuth/completeYourProfile/CompleteYourProfile";
import VerificationAndIdentification from "./pages/HandymanAuth/verificationAndIdentification/VerificationAndIdentification";
import Portfolio from "./pages/HandymanAuth/portfolio/Portfolio";
import HandymanDashboard from "./pages/HandymanDashboard/Dashboard.tsx";
import TransactionHistory from "./pages/HandymanDashboard/TransactionHistory.tsx";
import Overview from "./pages/HandymanDashboard/Overview.tsx";
import UpcomingPayouts from "./pages/HandymanDashboard/UpcomingPayouts.tsx";
import OverviewLayout from "./layouts/HandyManDashboardLayout/OverviewLayout.tsx";
import ServicesLayout from "./layouts/HandyManDashboardLayout/ServicesLayout.tsx";
import ServicesDetails from "./pages/HandymanDashboard/ServicesDetails.tsx";
import ServicesHistory from "./pages/HandymanDashboard/ServicesHistory.tsx";
import PortfolioSettings from "./pages/HandymanDashboard/Portfolio.tsx";
import ServiceDetailPage from "./pages/HandymanDashboard/ServiceDetailPage.tsx";
import JobRequestLayout from "./layouts/HandyManDashboardLayout/JobRequestLayout.tsx";
import Allrequests from "./pages/HandymanDashboard/Allrequests.tsx";
import SettingLayout from "./layouts/HandyManDashboardLayout/SettingLayout.tsx";
import ProfileLayout from "./layouts/HandyManDashboardLayout/ProfileLayout.tsx";
import PersonalInformation from "./pages/HandymanDashboard/PersonalInformation.tsx";
import Profile from "./pages/HandymanDashboard/Profile.tsx";
import Availability from "./pages/HandymanDashboard/Availability.tsx";
import Certification from "./pages/HandymanDashboard/Certification.tsx";
import SettingsServices from "./pages/HandymanDashboard/Services.tsx";
import Security from "./pages/HandymanDashboard/Security.tsx";
import Notification from "./pages/HandymanDashboard/Notification.tsx";
import AcceptRequestTable from "./components/HandymanDashboard/JobRequest/AcceptRequestTable.tsx";
import DeclinedRequestTable from "./components/HandymanDashboard/JobRequest/DeclinedRequestTable.tsx";
import CompletedRequestTable from "./components/HandymanDashboard/JobRequest/CompletedRequestTable.tsx";
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
              path: "handyman-profile/:id",
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
          ],
        },

        // handyman dashboard routes
        {
          path: "handyman/",
          element: <HandymanDashboardLayout />,

          children: [
            {
              path: "dashboard",
              element: <HandymanDashboard />,
            },
            {
              path: "job-requests",
              element: <JobRequestLayout />,

              children: [
                {
                  path: "all-requests",
                  element: <Allrequests />,
                },
                {
                  path: "accepted-requests",
                  element: <AcceptRequestTable />,
                },
                {
                  path: "declined-requests",
                  element: <DeclinedRequestTable />,
                },
                {
                  path: "completed-requests",
                  element: <CompletedRequestTable />,
                },
              ],
            },
            {
              path: "payments",
              element: <OverviewLayout />,

              children: [
                {
                  path: "overview",
                  element: <Overview />,
                },
                {
                  path: "transaction-history",
                  element: <TransactionHistory />,
                },
                {
                  path: "upcoming-payouts",
                  element: <UpcomingPayouts />,
                },
              ],
            },

            {
              path: "services",
              element: <ServicesLayout />,
              children: [
                {
                  path: "service-details",
                  element: <ServicesDetails />,
                },
                {
                  path: "service-history",
                  element: <ServicesHistory />,
                },
              ],
            },

            {
              path: "settings",
              element: <SettingLayout />,
              children: [
                {
                  path: "profile",
                  element: <ProfileLayout />,
                  children: [
                    {
                      path: "personal-information",
                      element: <PersonalInformation />,
                    },
                    {
                      path: "certification",
                      element: <Certification />,
                    },
                    {
                      path: "services",
                      element: <SettingsServices />,
                    },
                    {
                      path: "portfolio",
                      element: <PortfolioSettings />,
                    },
                  ],
                },
                {
                  path: "profile",
                  element: <Profile />,
                },
                {
                  path: "availability",
                  element: <Availability />,
                },
                {
                  path: "security",
                  element: <Security />,
                },
                {
                  path: "notification",
                  element: <Notification />,
                },
              ],
            },

            {
              path: "/handyman/services/:id",
              element: <ServiceDetailPage />,
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
