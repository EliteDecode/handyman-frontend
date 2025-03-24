import toolImg from "@/assets/images/tools.png";
import plugImg from "@/assets/icons/Electrical.svg";
import tapImg from "@/assets/icons/FullToolStorageBox.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const DashboardServices = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="mt-6 p-6 shadow-custom rounded-lg"
    >
      <h1 className="lg:font-medium lg:text-xl lg:tracking-2-percent text-center lg:text-left font-merriweather lg:font-lato font-bold text-textHeader">
        Available Services
      </h1>
      <p className="mt-2 tracking-2-percent text-center lg:text-left text-sm lg:text-base">
        Choose from a variety of expert services tailored to your needs.
      </p>

      <div className="mt-6 grid md:grid-cols-2 xl:grid-cols-3 gap-6 w-full place-items-center">
        <motion.div
          initial={{ backgroundColor: "#0080800A", boxShadow: "none" }} // No shadow initially
          whileHover={{
            backgroundColor: ["#0080800A", "#008080", "#0080800A"], // Color transitions
            boxShadow: [
              "none", // No shadow at the start
              "0px 2px 4px rgba(16, 24, 40, 0.08)", // Light shadow when flashing
              "0px 4px 10px rgba(16, 24, 40, 0.08)", // Final shadow when settled
            ],
            transition: { duration: 0.4, times: [0, 0.2, 1] }, // Controls animation timing
          }}
          className=" flex flex-col items-center justify-center w-ful rounded-lg w-[250px] md:min-w-[330px] py-4 "
        >
          <div className="w-[220px] flex flex-col items-center justify-center">
            <img src={toolImg} alt="" className="w-12" />
            <h2 className="text-center mt-4 tracking-2-percent font-medium lg:font-bold lg:text-2xl text-base text-[#3C3C3C]">
              Repairs
            </h2>
            <p className="text-center lg:mt-6 mt-4 text-[#3C3C3C] tracking-2-percent text-sm lg:text-base">
              Skilled professionals available for home and office repairs.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ backgroundColor: "#0080800A", boxShadow: "none" }} // No shadow initially
          whileHover={{
            backgroundColor: ["#0080800A", "#008080", "#0080800A"], // Color transitions
            boxShadow: [
              "none", // No shadow at the start
              "0px 2px 4px rgba(16, 24, 40, 0.08)", // Light shadow when flashing
              "0px 4px 10px rgba(16, 24, 40, 0.08)", // Final shadow when settled
            ],
            transition: { duration: 0.4, times: [0, 0.2, 1] }, // Controls animation timing
          }}
          className=" flex flex-col items-center justify-center w-ful rounded-lg w-[250px] md:min-w-[330px] py-4 "
        >
          <div className="w-[220px] flex flex-col items-center justify-center">
            <img src={tapImg} alt="" className="w-12" />
            <h2 className="text-center mt-4 tracking-2-percent font-medium lg:font-bold lg:text-2xl text-base text-[#3C3C3C]">
              Carpentry
            </h2>
            <p className="text-center lg:mt-6 mt-4 text-[#3C3C3C] tracking-2-percent text-sm lg:text-base">
              Experts for custom furniture, repairs, and installations.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ backgroundColor: "#0080800A", boxShadow: "none" }} // No shadow initially
          whileHover={{
            backgroundColor: ["#0080800A", "#008080", "#0080800A"], // Color transitions
            boxShadow: [
              "none", // No shadow at the start
              "0px 2px 4px rgba(16, 24, 40, 0.08)", // Light shadow when flashing
              "0px 4px 10px rgba(16, 24, 40, 0.08)", // Final shadow when settled
            ],
            transition: { duration: 0.4, times: [0, 0.2, 1] }, // Controls animation timing
          }}
          className=" flex flex-col items-center justify-center w-ful rounded-lg w-[250px] md:min-w-[330px] py-4 "
        >
          <div className="w-[220px] flex flex-col items-center justify-center">
            <img src={plugImg} alt="" className="w-12" />
            <h2 className="text-center mt-4 tracking-2-percent font-medium lg:font-bold lg:text-2xl text-base text-[#3C3C3C]">
              Electrical
            </h2>
            <p className="text-center lg:mt-6 mt-4 text-[#3C3C3C] tracking-2-percent text-sm lg:text-base">
              Experienced electricians for safe, efficient service.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="w-full flex items-center justify-center mb-5">
        <Link
          to="/dashboard/services"
          className="h-14 px-6 flex items-center justify-center duration-200 hover:bg-[#008080]/50 bg-primary text-white rounded-lg mt-8 outline-none text-xs lg:text-base"
        >
          See all Services
        </Link>
      </div>
    </motion.div>
  );
};

export default DashboardServices;
