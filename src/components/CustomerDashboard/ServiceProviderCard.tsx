import { motion } from "framer-motion";
import { Star } from "lucide-react";
import ImagePlaceHolder from "../../assets/images/placeholderImg.png";

const ServiceProviderCard = () => {
  return (
    <motion.div
      className="min-h-[390px] rounded-xl shadow-custom p-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="mt-2 w-full h-f flex flex-col items-center justify-center">
        <img
          src={ImagePlaceHolder}
          alt="image"
          className="rounded-full w-[100px] h-[100px] object-cover object-center "
        />
        <h2 className={`font-semibold text-xl text-textHeader mt-4`}>
          Ifeanyi Nwafor
        </h2>
        <p className={`text-textBody tracking-2-percent mt-1`}>Plumber</p>
        <span className={`text-textBody tracking-2-percent mt-1 text-sm`}>
          Benin City, Edo
        </span>
        <div className="flex items-center mt-2">
          <Star className="w-4 h-4 text-transparent" fill="#FDDF3D" />
          <Star className="w-4 h-4 text-transparent" fill="#FDDF3D" />
          <Star className="w-4 h-4 text-transparent" fill="#FDDF3D" />
          <Star className="w-4 h-4 text-transparent" fill="#FDDF3D" />
          <Star className="w-4 h-4 text-transparent" fill="#D0D5DD" />
        </div>
        <p className={`tracking-2-percent mt-2 text-textBody`}>
          <span className="">&#8358;5000</span> -{" "}
          <span className="">&#8358;8000</span>
        </p>

        <div className="flex items-center gap-2 mt-2 tracking-2-percent">
          <span className="w-2.5 h-2.5 rounded-full bg-[#34C759]" />
          <span className={`text-textBody`}>Available</span>
        </div>

        <button
          className={`bg-primary text-white py-4 px-6 rounded-lg mt-8 duration-200 hover:bg-[#008080]/50 outline-none`}
        >
          Book Now
        </button>
      </div>
    </motion.div>
  );
};

export default ServiceProviderCard;
