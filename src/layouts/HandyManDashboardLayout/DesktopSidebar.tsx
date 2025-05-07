import { motion } from "framer-motion";
import Logo from "../../assets/images/logo-no-background.png";
import dropDown from "@/assets/icons/dropDown.svg";
import { sidebarHandymanLinks } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const SideBar = ({ setIsOpen }: any) => {
  const location = useLocation();

  return (
    <section className="fixed">
      <motion.div
        className="w-[280px] px-4 py-6"
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
      >
        <Link to="/dashboard" className="w-fit">
          <img src={Logo} alt="" className="w-[223px] " />
        </Link>

        <ul className="mt-[60px]">
          {sidebarHandymanLinks.map((val, i) => {
            const Icon = val.icon;
            // const isActive = location.pathname.startsWith(val.link);

            const isActive =
              val.sublinks && val.sublinks.length > 0
                ? location.pathname === val.link
                : location.pathname.startsWith(val.link);

            // But still show sublinks if any of them are active
            const isSubLinkActive = val.sublinks?.some((sub) =>
              location.pathname.startsWith(sub.link)
            );

            return (
              <div key={i}>
                <li className="pb-0.5">
                  <Link
                    onClick={() => setIsOpen(false)}
                    to={val.link}
                    className={`${
                      isActive
                        ? "bg-primary font-semibold text-white hover:bg-primary hover:text-white"
                        : ""
                    } flex gap-3 items-center justify-between text-sm md:text-base h-[56px] px-6 duration-300 hover:bg-[#008080]/[7%] hover:text-primary rounded-lg`}
                  >
                    <div className="flex gap-3 items-center">
                      <Icon className="md:w-4 w-3.5" />
                      {val.name}
                    </div>

                    {val.sublinks && (
                      <img
                        src={dropDown}
                        alt="dropDown"
                        className={`md:w-4 w-3.5 transition-transform duration-300 ${
                          isActive || isSubLinkActive ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>
                </li>

                {/* Show sublinks only if Settings is active */}
                {val.sublinks && (isActive || isSubLinkActive) && (
                  <ul className="space-y-[1px]">
                    {val.sublinks.map((sublink, subIndex) => {
                      const isSubActive = location.pathname.startsWith(
                        sublink.link
                      );

                      return (
                        <li key={subIndex}>
                          <Link
                            onClick={() => setIsOpen(false)}
                            to={sublink.link}
                            className={`${
                              isSubActive
                                ? "text-[#FFFFFF] bg-primary "
                                : "text-gray-600"
                            } flex items-center gap-2 text-[16px] leading-[100%] text-[#3C3C3C] tracking-2-percent h-[67px] w-full hover:bg-[#008080]/[7%] hover:text-primary transition-colors duration-200 pl-12 rounded`}
                          >
                            {sublink.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </ul>
      </motion.div>
    </section>
  );
};

export default SideBar;
