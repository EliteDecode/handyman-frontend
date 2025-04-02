import { motion } from "framer-motion";
import pdfIcon from "@/assets/icons/pdfIcon.svg";
import { Link } from "react-router-dom";
const HandymanProfilePortfolio = ({ profileInfo }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="">
        <h2 className="font-bold text-base lg:text-2xl font-merriweather text-textHeader">
          Previous Jobs
        </h2>
        <Link
          to={`/dashboard/handyman-portfolio-images/${profileInfo?.id}`}
          className="grid grid-cols-[repeat(auto-fit,minmax(125px,2fr))] sm:grid-cols-[repeat(auto-fit,minmax(196px,1fr))] gap-6 mt-6"
        >
          {profileInfo?.previousJobs.map((previousJob: string, i: any) => (
            <img
              key={i}
              src={previousJob}
              alt="Job Image"
              className="w-full h-[125px] lg:h-[196px] object-cover object-center"
            />
          ))}
        </Link>
      </div>

      {profileInfo?.certificaitons && (
        <div className="mt-6">
          <h2 className="font-bold text-base lg:text-2xl font-merriweather text-textHeader">
            Certification
          </h2>
          <div className="mt-6">
            {profileInfo?.certificaitons?.map(
              (certification: any, i: number) => (
                <Link
                  to={`/dashboard/handyman-portfolio-certs/${profileInfo?.id}?certName=${certification?.name}`}
                  key={i}
                  className="w-full lg:py-3 py-2 px-4 border border-[#C9CDD3] rounded-2xl mt-4 flex items-center gap-2"
                >
                  <img src={pdfIcon} alt="" className="w-10 h-10" />
                  <span className="text-textBody font-medium text-sm lg:text-lg tracking-2-percent">
                    {certification?.name}
                  </span>
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default HandymanProfilePortfolio;
