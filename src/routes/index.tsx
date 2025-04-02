import { lazy } from "react";

// General routes -Contains routes for main public pages like Home, About and Contact
export const Home = lazy(() => import("@/pages/General/Home/Home"));
export const About = lazy(() => import("@/pages/General/About/About"));
export const Contact = lazy(() => import("@/pages/General/Contact/Contact"));
export const Privacy = lazy(() => import("@/pages/General/Privacy/Privacy"));
export const Terms = lazy(() => import("@/pages/General/TermsOfService/Terms"));
export const Services = lazy(() => import("@/pages/General/Services/Services"));
export const HelpAndSupport = lazy(
  () => import("@/pages/General/HelpAndSupport/HelpAndSupport")
);

// Auth routes - Contains routes for authentication pages like SignUp, Login and verify-email
export const SignUp = lazy(() => import("@/pages/CustomerAuth/SignUp/SignUp"));
export const VerifyEmail = lazy(
  () => import("@/pages/CustomerAuth/VerifyEmail/VerifyEmail")
);
export const EmailSuccess = lazy(
  () => import("@/pages/CustomerAuth/VerifySuccess/VerifySuccess")
);
export const Login = lazy(() => import("@/pages/CustomerAuth/Login/Login"));
export const ForgetPassword = lazy(
  () => import("@/pages/CustomerAuth/ForgetPassword/ForgetPassword")
);
export const ResetPassword = lazy(
  () => import("@/pages/CustomerAuth/ResetPassword/ResetPassword")
);

//Callbacks
export const GoogleCallback = lazy(
  () => import("../pages/CustomerAuth/callbacks/GoogleCallback")
);
export const FacebookCallback = lazy(
  () => import("../pages/CustomerAuth/callbacks/FacebookCallback")
);

//Customers Dashboard
export const Dashboard = lazy(
  () => import("@/pages/CustomerDashboard/Dashboard/Dashboard")
);
export const CompleteProfile = lazy(
  () => import("@/pages/CustomerDashboard/CompleteProfile/CompleteProfile")
);
export const ServicesListing = lazy(
  () => import("@/pages/CustomerDashboard/Services/ServiceListing")
);
export const ServicesProvider = lazy(
  () => import("@/pages/CustomerDashboard/Services/ServicesProvider")
);
export const HandymanProfile = lazy(
  () => import("@/pages/CustomerDashboard/HandymanProfile/HandymanProfile")
);
export const HandymanPortfolioImage = lazy(
  () => import("@/components/CustomerDashboard/HandymanPortfolioImage")
);
export const HandymanPortfolioCertification = lazy(
  () => import("@/components/CustomerDashboard/HandymanPortfolioCertification")
);
export const HandymanRatings = lazy(
  () => import("@/components/CustomerDashboard/HandymanRating")
);
