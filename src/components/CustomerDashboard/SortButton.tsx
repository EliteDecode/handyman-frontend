import { motion } from "framer-motion";
import { useState } from "react";
const SortButton = ({ children, setToggleItem, setSelectedFilter, value }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.button
      initial={{ backgroundColor: "#ffffff" }} // Default white background
      animate={{
        backgroundColor: isHovered ? "#0080800A" : "#ffffff",
      }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => {
        setToggleItem(false), setSelectedFilter(value);
      }}
      className="outline-none py-2 px-4 text-[#101928] text-sm tracking-2-percent w-full text-left"
    >
      {children}
    </motion.button>
  );
};

export default SortButton;
