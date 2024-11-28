import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const LandingLayout = () => {
  return (
    <div className="w-full mx-auto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LandingLayout;
