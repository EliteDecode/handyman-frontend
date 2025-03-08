import { Bell, ChevronDown, Menu, User2, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/images/logo-no-background.png";
import { sidebarLinks } from "@/lib/utils";
import { useState } from "react";
import {motion} from "framer-motion"

const Header = ({ isOpen, setIsOpen }: any) => {
  const [toggleProfile, setToggleProfile] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prev: boolean) => !prev);
  };
  const location = useLocation();
  const title = sidebarLinks.find((val) => val.link === location.pathname);

  return (
    <section className="flex justify-between items-center h-[80px] px-6 lg:px-8 shadow-custom">
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
        <div className="text-primary cursor-pointer bg-[#0080800A] w-12 h-12 flex items-center justify-center rounded-full">
          <Bell width={16.5} height={20} />
        </div>
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

      <div className="absolute top-20 right-4">
        {toggleProfile && (
          <div
            onClick={() => setToggleProfile(false)}
            className="fixed bg-black opacity-30 w-full h-full top-0 left-0"
          ></div>
        )}
        <motion.div
          className="fixed top-16 lg:top-20 right-3  w-[280px] p-4 bg-white z-10 rounded-xl"
          initial={{ y: "-250%" }}
          animate={{ y: toggleProfile ? "0%" : "-250%" }}
        >
          <p className="py-2 text-sm">handyman@contact.com</p>
          <button className="py-2 text-sm outline-none">Logout</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Header;
