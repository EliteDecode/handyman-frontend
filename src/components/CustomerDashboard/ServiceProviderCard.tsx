import { motion } from "framer-motion";
import ImagePlaceHolder from "../../assets/images/placeholderImg.png";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
const ServiceProviderCard = ({ serviceData }: any) => {
  const checkImage = (url: string) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
    });
  };

  const verifyImages = async (imageUrls: string[]) => {
    const results = await Promise.all(
      imageUrls.map(async (url) => ({
        url,
        isValid: await checkImage(url),
      }))
    );

    console.log("Image URL Validation:", results);
  };

  // Example Usage
  const imageUrls = serviceData?.previousJobs;

  verifyImages(imageUrls);


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
          src={serviceData?.profileImg || ImagePlaceHolder}
          alt="image"
          className="rounded-full w-[54px] h-[54px] lg:w-[100px] lg:h-[100px] object-cover object-center "
        />
        <h2
          className={`font-semibold text-base lg:text-xl text-textHeader mt-4`}
        >
          {serviceData?.name}
        </h2>
        <p
          className={`text-textBody tracking-2-percent mt-1 text-sm lg:text-base`}
        >
          {serviceData?.skill}
        </p>
        <span
          className={`text-textBody tracking-2-percent mt-1 text-xs lg:text-sm`}
        >
          {serviceData?.town}, {serviceData?.state}
        </span>
        <Rating
          icon={<StarIcon style={{ color: "#FDDF3D", fontSize: "16px" }} />} // Selected stars
          emptyIcon={
            <StarIcon style={{ color: "#D0D5DD", fontSize: "16px" }} />
          }
          className="mt-2 text-[#FDDF3D]"
          name="read-only"
          value={serviceData?.rating}
          readOnly
          precision={0.1}
        />
        <p
          className={`tracking-2-percent mt-2 text-textBody text-xs lg:text-base`}
        >
          <span className="">&#8358;{serviceData?.minPrice}</span> -{" "}
          <span className="">&#8358;{serviceData?.maxPrice}</span>
        </p>

        <div className="flex items-center gap-2 mt-2 tracking-2-percent">
          <span
            className={`w-2 lg:w-2.5 lg:h-2.5 h-2 rounded-full ${serviceData?.available ? "bg-[#34C759]" : "bg-[#FF9500]"} `}
          />
          <span className={`text-textBody text-xs lg:text-base`}>
            {serviceData?.available ? "Available" : "Busy"}
          </span>
        </div>

        <button
          className={`${serviceData?.available ? " duration-200 hover:bg-[#008080]/50 bg-primary" : "bg-[#C9CDD3]"} cursor-pointer text-white lg:py-4 py-2 lg:px-6 px-4 font-semibold text-[10px] lg:text-base rounded-lg lg:mt-8 mt-6 outline-none`}
          disabled={!serviceData?.available}
        >
          Book Now
        </button>
      </div>
    </motion.div>
  );
};

export default ServiceProviderCard;
