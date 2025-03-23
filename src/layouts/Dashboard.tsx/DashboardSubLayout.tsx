import { Outlet } from "react-router-dom";
import { useState } from "react";
import MobileSidebar from "./MobileSidebar";
import SubHeader from "./SubHeader";

const DashboardSubLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="lg:hidden">
        <MobileSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <SubHeader isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="lg:my-8 my-6 ">
        <Outlet />
      </div>
    </>
  );
};

export default DashboardSubLayout;
