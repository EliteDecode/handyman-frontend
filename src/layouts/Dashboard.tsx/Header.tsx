import { Bell, Calendar, ChevronDown, Menu, User2, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/images/logo-no-background.png";
import { sidebarLinks } from "@/lib/utils";
import { useState } from "react";
import { motion } from "framer-motion";

const Header = ({ isOpen, setIsOpen }: any) => {
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
          className="absolute  right-3  w-[280px] p-4 bg-white z-10 rounded-xl"
          initial={{ y: "-250%" }}
          animate={{ y: toggleProfile ? "0%" : "-250%" }}
        >
          <p className="py-2 text-sm">handyman@contact.com</p>
          <button className="py-2 text-sm outline-none">Logout</button>
        </motion.div>
      </div>

      <div className="absolute top-16 lg:top-20 lg:right-24 right-5">
        {toggleNotification && (
          <div
            onClick={() => setToggleNotification(false)}
            className="fixed bg-black opacity-30 w-full h-full top-0 left-0 z-10"
          ></div>
        )}
        <motion.div
          className="absolute top-0 right-0 lg:right-14 w-[320px] lg:w-[585px] max-h-[700px] overflow-y-auto p-6 lg:p-8 bg-white z-10 rounded-xl"
          initial={{ y: "-250%" }}
          animate={{ y: toggleNotification ? "0%" : "-250%" }}
        >
          <div className="flex items-center justify-between gap-2 border-b pb-2">
            <div className="flex gap-4 lg:gap-6 items-center">
              <h2 className="font-merriweather font-bold text-base lg:text-2xl">
                Notifications
              </h2>
              <span className="rounded-full lg:w-8 w-6 lg:h-8 h-6 bg-[#0080800A] text-primary font-merriweather flex items-center justify-center text-xs lg:text-base">
                2
              </span>
            </div>
            <button className="outline-none ">
              <X
                className="w-4 lg:w-5"
                onClick={() => setToggleNotification(false)}
              />
            </button>
          </div>

          <div className="mt-6 lg:mt-8">
            <div className="flex gap-4 lg:gap-6 border-b px- lg:px-8 pb-2 mt-4 lg:mt-6">
              <div className="bg-[#0080800A] w-8 h-8 lg:w-10 lg:h-10 rounded-full text-primary flex items-center justify-center">
                <Calendar className="w-4 lg:-w-5" />
              </div>

              <div className="w-full">
                <div className="flex items-start justify-between w-full gap-2">
                  <h2 className="font-medium text-textHeader text-[13px] lg:text-base">
                    Upcoming Appointment Reminder
                  </h2>
                  <span className="w-1 h-1 lg:w-2 lg:h-2 bg-primary rounded-full"></span>
                </div>
                <div className="mt-2 flex items-end justify-between gap-2">
                  <p className="lg:w-[270px] w-[175px] lg:text-sm text-xs text-textBody">
                    Your appointment with Sola the Cleaner is scheduled for Dec
                    16th at 3:00 PM.
                  </p>
                  <span className="lg:text-xs text-[8px] text-nowrap">
                    30 min ago
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 lg:gap-6 border-b px- lg:px-8 pb-2 mt-4 lg:mt-6">
              <div className="bg-[#0080800A] w-8 h-8 lg:w-10 lg:h-10 rounded-full text-primary flex items-center justify-center">
                <Calendar className="w-4 lg:-w-5" />
              </div>

              <div className="w-full">
                <div className="flex items-start justify-between w-full gap-2">
                  <h2 className="font-medium text-textHeader text-[13px] lg:text-base">
                    Upcoming Appointment Reminder
                  </h2>
                  <span className="w-1 h-1 lg:w-2 lg:h-2 bg-primary rounded-full"></span>
                </div>
                <div className="mt-2 flex items-end justify-between gap-2">
                  <p className="lg:w-[270px] w-[175px] lg:text-sm text-xs text-textBody">
                    Your appointment with Sola the Cleaner is scheduled for Dec
                    16th at 3:00 PM.
                  </p>
                  <span className="lg:text-xs text-[8px] text-nowrap">
                    30 min ago
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-4 lg:gap-6 border-b px- lg:px-8 pb-2 mt-4 lg:mt-6">
              <div className="bg-[#0080800A] w-8 h-8 lg:w-10 lg:h-10 rounded-full text-primary flex items-center justify-center">
                <Calendar className="w-4 lg:-w-5" />
              </div>

              <div className="w-full">
                <div className="flex items-start justify-between w-full gap-2">
                  <h2 className="font-medium text-textHeader text-[13px] lg:text-base">
                    Upcoming Appointment Reminder
                  </h2>
                  <span className="w-1 h-1 lg:w-2 lg:h-2 bg-primary rounded-full"></span>
                </div>
                <div className="mt-2 flex items-end justify-between gap-2">
                  <p className="lg:w-[270px] w-[175px] lg:text-sm text-xs text-textBody">
                    Your appointment with Sola the Cleaner is scheduled for Dec
                    16th at 3:00 PM.
                  </p>
                  <span className="lg:text-xs text-[8px] text-nowrap">
                    30 min ago
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-4 lg:gap-6 border-b px- lg:px-8 pb-2 mt-4 lg:mt-6">
              <div className="bg-[#0080800A] w-8 h-8 lg:w-10 lg:h-10 rounded-full text-primary flex items-center justify-center">
                <Calendar className="w-4 lg:-w-5" />
              </div>

              <div className="w-full">
                <div className="flex items-start justify-between w-full gap-2">
                  <h2 className="font-medium text-textHeader text-[13px] lg:text-base">
                    Upcoming Appointment Reminder
                  </h2>
                  <span className="w-1 h-1 lg:w-2 lg:h-2 bg-primary rounded-full"></span>
                </div>
                <div className="mt-2 flex items-end justify-between gap-2">
                  <p className="lg:w-[270px] w-[175px] lg:text-sm text-xs text-textBody">
                    Your appointment with Sola the Cleaner is scheduled for Dec
                    16th at 3:00 PM.
                  </p>
                  <span className="lg:text-xs text-[8px] text-nowrap">
                    30 min ago
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Header;
