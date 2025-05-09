import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./Header";
import MobileSidebar from "./MobileSideBar";
import DesktopSidebar from "./DesktopSidebar";
import { useState } from "react";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="lg:hidden">
        <MobileSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className="hidden lg:block">
        <DesktopSidebar setIsOpen={setIsOpen} />
      </div>
      <div className="flex w-full">
        <div className="overflow-hidden w-full lg:ml-[280px]">
          <div className={` min-h-[75vh] w-full  `}>
            <Header isOpen={isOpen} setIsOpen={setIsOpen} />

            <ScrollRestoration />
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
