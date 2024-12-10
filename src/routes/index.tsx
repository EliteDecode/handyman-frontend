import { lazy } from "react";

// General routes - Contains routes for main public pages like Home, About and Contact
export const Home = lazy(() => import("@/pages/general/Home/Home"));
export const About = lazy(() => import("@/pages/general/About/About"));
export const Contact = lazy(() => import("@/pages/general/Contact/Contact"));
export const Privacy = lazy(() => import("@/pages/general/Privacy/Privacy"));
export const Terms = lazy(() => import("@/pages/general/TermsOfService/Terms"));
export const Services = lazy(() => import("@/pages/general/Services/Services"));
export const HelpAndSupport = lazy(
  () => import("@/pages/general/HelpAndSupport/HelpAndSupport")
);

// Auth routes - Contains routes for authentication pages like SignUp, Login and verify-email
export const SignUp = lazy(() => import("@/pages/CustomerAuth/SignUp/SignUp"));
export const VerifyEmail = lazy(() => import("@/pages/CustomerAuth/VerifyEmail/VerifyEmail"));
export const EmailSuccess = lazy(() => import("@/pages/CustomerAuth/VerifySuccess/VerifySuccess"));
export const CompleteProfile = lazy(() => import("@/pages/CustomerAuth/CompleteProfile/CompleteProfile"));
export const Login = lazy(() => import("@/pages/CustomerAuth/Login/Login"));
export const ForgetPassword = lazy(() => import("@/pages/CustomerAuth/ForgetPassword/ForgetPassword"));
export const ResetPassword = lazy(() => import("@/pages/CustomerAuth/ResetPassword/ResetPassword"));