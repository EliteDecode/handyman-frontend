import { Calendar } from "lucide-react";
import {motion} from "framer-motion"

const DashboardCard = ({ bg, amount, title }:dashboardCard) => {
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="lg:min-h-[130px] min-h-[90px] p-6 rounded-lg shadow-custom"
    >
      <div className="flex items-center gap-4 lg:gap-2.5">
        <div
          className={`lg:w-[60px] w-8 lg:h-[60px] h-8 lg:rounded-lg rounded-md flex items-center justify-center text-white `}
          style={{ backgroundColor: bg }}
        >
          <Calendar className="lg:w-8 w-4 lg:h-7 h-4" />
        </div>
        <div className="">
          <h2 className="font-merriweather lg:text-3xl text-base text-textHeader font-bold">
            {amount}
          </h2>
          <p className="lg:text-lg leading-8 text-sm tracking-2-percen">
            {title}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardCard;
