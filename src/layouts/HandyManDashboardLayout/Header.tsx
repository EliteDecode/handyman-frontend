import { Bell, ChevronDown, Menu, User2, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/images/logo-no-background.png";
import { sidebarHandymanLinks } from "@/lib/utils";
import { useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import DashboardNotification from "@/components/CustomerDashboard/DashboardNotification";

const Header = ({ isOpen, setIsOpen }: any) => {
  const { user }: any = useSelector((state: RootState) => state.user);
  const [toggleProfile, setToggleProfile] = useState(false);
  const [toggleNotification, setToggleNotification] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prev: boolean) => !prev);
  };
  const location = useLocation();
  const title = sidebarHandymanLinks.find((val) =>
    location.pathname.startsWith(val.link)
  );

  return (
    <section className="flex justify-between items-center h-[80px] px-6 lg:px-8 shadow-custom relative">
      <div className="flex gap-6">
        <button className="outline-none lg:hidden" onClick={toggleDrawer}>
          {isOpen ? <X /> : <Menu />}
        </button>
        <div>
          <Link
            to="/dashboard"
            className="hidden text-2xl font-bold lg:block text-primary font-merriweather"
          >
            {title?.name}
          </Link>
          <Link
            to="/dashboard"
            className="block text-2xl font-bold lg:hidden text-primary font-merriweather"
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
          className="flex items-center gap-2 outline-none cursor-pointer "
        >
          <div className="flex items-center justify-center w-8 h-8 border-2 rounded-full lg:w-12 lg:h-12 border-primary">
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
            className="fixed top-0 left-0 z-10 w-full h-full bg-black opacity-30"
          ></div>
        )}
        <motion.div
          className="absolute  right-3  w-[280px] p-4 bg-white z-10 rounded-xl"
          initial={{ y: "-250%" }}
          animate={{ y: toggleProfile ? "0%" : "-250%" }}
        >
          <p className="py-2 text-sm">
            {user?.email ? user?.email : "handyman@contact.com"}
          </p>
          <button className="py-2 text-sm outline-none">Logout</button>
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
