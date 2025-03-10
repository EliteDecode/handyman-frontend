import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./Header";
import MobileSidebar from "./MobileSidebar";
import DesktopSidebar from "./DesktopSidebar";
import { useState } from "react";
import useDashboard from "@/hooks/dashboardHook/useDashboard";
import UpdateProfile from "@/components/CustomerDashboard/UpdateProfile";

const index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, forceUpdateProfileStatus, isProfileUpdated }: any =
    useDashboard();

  return (
    <>
      <div className="lg:hidden">
        <MobileSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className="hidden lg:block">
        <DesktopSidebar setIsOpen={setIsOpen} />
      </div>
      <div className="w-full flex">
        <div className="overflow-hidden w-full lg:ml-[280px]">
          <div className={` min-h-[75vh] w-full  `}>
            <Header isOpen={isOpen} setIsOpen={setIsOpen} />

            {isProfileUpdated !== true && (
              <UpdateProfile
                isProfileUpdated={isProfileUpdated}
                forceUpdateProfileStatus={forceUpdateProfileStatus}
              />
            )}
            <ScrollRestoration />
            <Outlet context={user} />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
