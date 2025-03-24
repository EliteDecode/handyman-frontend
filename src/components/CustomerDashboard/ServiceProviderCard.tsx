import { motion } from "framer-motion";
import { Star } from "lucide-react";
import ImagePlaceHolder from "../../assets/images/placeholderImg.png";

const ServiceProviderCard = () => {
  return (
    <motion.div
      className="rounded-xl shadow-custom p-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="mt-2 w-full h-f flex flex-col items-center justify-center">
        <img
          src={ImagePlaceHolder}
          alt="image"
          className="rounded-full w-[54px] h-[54px] lg:w-[100px] lg:h-[100px] object-cover object-center "
        />
        <h2 className={`font-semibold text-base lg:text-xl text-textHeader mt-4`}>
          Ifeanyi Nwafor
        </h2>
        <p className={`text-textBody tracking-2-percent mt-1 text-sm lg:text-base`}>Plumber</p>
        <span className={`text-textBody tracking-2-percent mt-1 text-xs lg:text-sm`}>
          Benin City, Edo
        </span>
        <div className="flex items-center mt-2">
          <Star className="w-4 h-4 text-transparent" fill="#FDDF3D" />
          <Star className="w-4 h-4 text-transparent" fill="#FDDF3D" />
          <Star className="w-4 h-4 text-transparent" fill="#FDDF3D" />
          <Star className="w-4 h-4 text-transparent" fill="#FDDF3D" />
          <Star className="w-4 h-4 text-transparent" fill="#D0D5DD" />
        </div>
        <p className={`tracking-2-percent mt-2 text-textBody text-xs lg:text-base`}>
          <span className="">&#8358;5000</span> -{" "}
          <span className="">&#8358;8000</span>
        </p>

        <div className="flex items-center gap-2 mt-2 tracking-2-percent">
          <span className="w-2 lg:w-2.5 lg:h-2.5 h-2 rounded-full bg-[#34C759]" />
          <span className={`text-textBody text-xs lg:text-base`}>Available</span>
        </div>

        <button
          className={`bg-primary text-white lg:py-4 py-2 lg:px-6 px-4 font-semibold text-[10px] lg:text-base rounded-lg lg:mt-8 mt-6 duration-200 hover:bg-[#008080]/50 outline-none`}
        >
          Book Now
        </button>
      </div>
    </motion.div>
  );
};

export default ServiceProviderCard;
