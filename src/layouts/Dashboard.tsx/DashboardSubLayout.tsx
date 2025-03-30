import { Outlet, ScrollRestoration } from "react-router-dom";
import { useState } from "react";
import MobileSidebar from "./MobileSidebar";
import SubHeader from "./SubHeader";
import useDashboard from "@/hooks/dashboardHook/useDashboard";

const DashboardSubLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {} = useDashboard()

  return (
    <>
      <div className="lg:hidden">
        <MobileSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <SubHeader isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="w-full lg:my-8 my-6 overflow-hidden">
        <ScrollRestoration />
        <Outlet />
      </div>
    </>
  );
};

export default DashboardSubLayout;
