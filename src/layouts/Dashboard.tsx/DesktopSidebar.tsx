import { motion } from "framer-motion";
import Logo from "../../assets/images/logo-no-background.png";
import { sidebarLinks } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const DesktopSidebar = ({ setIsOpen }: any) => {
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
          {sidebarLinks.map((val, i) => {
            const Icon = val.icon;

            return (
              <div className="" key={i}>
                {
                  <li className="pb-0.5">
                    <Link
                      onClick={() => setIsOpen(false)}
                      to={val.link}
                      className={`${
                        location.pathname === val.link
                          ? "bg-primary font-semibold text-white hover:bg-primary hover:text-white"
                          : ""
                      } flex gap-3 items-center text-sm md:text-base h-[56px] px-6 duration-300 hover:bg-[#008080]/[7%] hover:text-primary rounded-lg`}
                    >
                      <Icon className="md:w-4 w-3.5" />
                      {val.name}
                    </Link>
                  </li>
                }
              </div>
            );
          })}
        </ul>
      </motion.div>
    </section>
  );
};

export default DesktopSidebar;
