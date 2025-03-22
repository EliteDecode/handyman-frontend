import { Bell, ChevronDown, Menu, User2, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/images/logo-no-background.png";
import { sidebarLinks } from "@/lib/utils";
import { useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import DashboardNotification from "@/components/CustomerDashboard/DashboardNotification";
import { PiSpinnerGap } from "react-icons/pi";
import useLogout from "@/hooks/useLogout";

const Header = ({ isOpen, setIsOpen }: any) => {
  const { logoutBtn, isLogoutLoading } = useLogout();

  const { user }: any = useSelector((state: RootState) => state.user);
  const [toggleProfile, setToggleProfile] = useState(false);
  const [toggleNotification, setToggleNotification] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prev: boolean) => !prev);
  };
  const location = useLocation();
  const title = sidebarLinks.find((val) => val.link === location.pathname);

  return (
    <section className="flex justify-between items-center h-[80px] px-6 lg:px-8 shadow-custom relative">
      <div className="flex gap-6">
        <button className="outline-none lg:hidden" onClick={toggleDrawer}>
          {isOpen ? <X /> : <Menu />}
        </button>
        <div>
          <Link
            to="/dashboard"
            className="lg:block hidden text-primary text-2xl font-merriweather font-bold"
          >
            {title?.name}
          </Link>
          <Link
            to="/dashboard"
            className="lg:hidden block text-primary text-2xl font-merriweather font-bold"
          >
            <img src={Logo} alt="logo" className="w-[120px] h-8" />
          </Link>
        </div>
      </div>
      <div className="flex gap-6">
        <button
          className="text-primary cursor-pointer bg-[#0080800A] w-12 h-12 flex items-center justify-center rounded-full outline-none"
          onClick={() => setToggleNotification((prev) => !prev)}
        >
          <Bell width={16.5} height={20} />
        </button>
        <button
          onClick={() => setToggleProfile((prev) => !prev)}
          className=" flex gap-2 items-center cursor-pointer outline-none"
        >
          <div className="rounded-full lg:w-12 lg:h-12 w-8 h-8 border-2 border-primary flex items-center justify-center">
            <User2 className="lg:w-8 lg:h-10" />
          </div>
          <ChevronDown
            className={`w-6 h-6 ${toggleProfile ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      <div className="absolute top-16 lg:top-20 right-4">
        {toggleProfile && (
          <div
            onClick={() => setToggleProfile(false)}
            className="fixed bg-black opacity-30 w-full h-full top-0 left-0 z-10"
          ></div>
        )}
        <motion.div
          className="absolute  right-3  w-[280px] py-4 px-2 bg-white z-10 rounded-xl"
          initial={{ y: "-250%" }}
          animate={{ y: toggleProfile ? "0%" : "-250%" }}
        >
          <p className="py-2 text-sm px-4">
            {user?.email ? user?.email : "handyman@contact.com"}
          </p>
          <button
            className="py-2 text-sm outline-none hover:bg-[#008080]/80 hover:text-white  w-full text-left px-4 rounded-md transition-all duration-200"
            onClick={() => logoutBtn()}
          >
            {isLogoutLoading ? (
              <span className="flex gap-2 items-center">
                {" "}
                Signing out...{" "}
                <PiSpinnerGap className="animate-spin stroke-2 text-lg" />{" "}
              </span>
            ) : (
              "Logout"
            )}
          </button>
        </motion.div>
      </div>

      <DashboardNotification
        toggleNotification={toggleNotification}
        setToggleNotification={setToggleNotification}
      />
    </section>
  );
};

export default Header;
