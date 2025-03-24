import { Star } from "lucide-react";
import ImagePlaceHolder from "../../assets/images/placeholderImg.png";
import { motion } from "framer-motion";
import { useState } from "react";

const FeaturedCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <motion.div
      className="min-w-[270px] min-h-[322px] rounded-xl shadow-custom p-6"
      initial={{ backgroundColor: "#ffffff" }} // Default white background
      animate={{
        backgroundColor: isClicked
          ? "#008080"
          : isHovered
            ? "#0080800A"
            : "#ffffff", 
        boxShadow: "0px 4px 10px rgba(16, 24, 40, 0.08)",
      }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => setIsClicked((prev) => !prev)}
    >
      <div className="flex w-full justify-end">
        <span
          className={`${isClicked ? "bg-white text-primary" : isHovered ? "bg-primary text-white" : "bg-[#0080800A] text-primary"} transition-all duration-300 rounded-[40px] py-1 lg:px-4 px-2 font-semibold text-xs lg:text-base`}
        >
          Fearured
        </span>
      </div>
      <div className="mt-2 w-full flex flex-col items-center justify-center">
        <img
          src={ImagePlaceHolder}
          alt="image"
          className="rounded-full w-[100px] h-[100px] object-cover object-center "
        />
        <h2
          className={`font-semibold text-xl ${isClicked ? "text-white" : "text-textHeader"}  mt-4`}
        >
          Ifeanyi Nwafor
        </h2>
        <span
          className={`${isClicked ? "text-white" : "text-textBody"} tracking-2-percent mt-1 text-sm lg:text-base`}
        >
          Plumber
        </span>
        <div className="flex items-center mt-2">
          <Star className="w-4 h-4 text-transparent" fill="#FDDF3D" />
          <Star className="w-4 h-4 text-transparent" fill="#FDDF3D" />
          <Star className="w-4 h-4 text-transparent" fill="#FDDF3D" />
          <Star className="w-4 h-4 text-transparent" fill="#FDDF3D" />
          <Star className="w-4 h-4 text-transparent" fill="#D0D5DD" />
        </div>
        <p
          className={`tracking-2-percent mt-2 ${isClicked ? "text-white" : "text-textBody"} text-sm lg:text-base`}
        >
          <span>&#8358;5000</span> -{" "}
          <span>&#8358;8000</span>
        </p>

        <div className="flex items-center gap-2 mt-2 tracking-2-percent">
          <span className="w-2.5 h-2.5 rounded-full bg-[#34C759]" />
          <span className={`${isClicked ? "text-white" : "text-textBody"} text-xs lg:text-sm`}>
            Available
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedCard;
