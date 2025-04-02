import { serviceProviders } from "@/lib/serviceData";
import { motion } from "framer-motion";
import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
const HandymanRating = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const profileInfo = serviceProviders.find((val) => val.id === Number(id));
  const reviews = profileInfo?.reviews;
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="p-6"
    >
      <div className="mx-auto max-w-[1200px] h-full -mt-6">
        <div className="w-full lg:hidden">
          <button
            onClick={() => navigate(-1)}
            className="outline-none flex items-center gap-2 mb-5 font-semibold text-textBody"
          >
            <ArrowLeft className="w-5 h-5" /> Back
          </button>
        </div>

        <div className="flex items-center gap-6 mt-5 lg:mt-0">
          <div className="flex items-center gap-2">
            <span className="tracking-2-percent text-xl text-textHeader">
              {profileInfo?.averageRating?.toFixed(1)}
            </span>
            <Rating
              icon={<StarIcon style={{ color: "#FDDF3D", fontSize: "24px" }} />}
              emptyIcon={
                <StarIcon style={{ color: "#D0D5DD", fontSize: "24px" }} />
              }
              className="text-[#FDDF3D]"
              name="read-only"
              value={profileInfo?.averageRating}
              readOnly
              precision={0.1}
            />
          </div>
          <p className="text-sm lg:text-xl font-semibold text-textHeader">
            ({profileInfo?.reviews?.length || 0} Reviews Received)
          </p>
        </div>

        <div className="mt-6">
          {reviews?.map((review, i) => (
            <div className="flex items-center gap-4 lg:gap-6 my-6" key={i}>
              <img
                src={review?.img}
                alt="image"
                className="rounded-full w-14 lg:w-[100px] h-14 lg:h-[100px]"
              />
              <div className="">
                <div className="flex items-center gap-2">
                  <h2 className="text-[15px] text-nowrap lg:text-xl tracking-2-percent font-medium text-textHeader">
                    {review?.name}
                  </h2>
                  {review?.isVerified && (
                    <p className="text-xs lg:text-base rounded-[40px] py-1 px-4 bg-[#0080800A] text-primary font-semibold">
                      Verified Customer
                    </p>
                  )}
                </div>
                <Rating
                  icon={
                    <StarIcon style={{ color: "#FDDF3D", fontSize: "24px" }} />
                  }
                  emptyIcon={
                    <StarIcon style={{ color: "#D0D5DD", fontSize: "24px" }} />
                  }
                  className="text-[#FDDF3D] mt-2"
                  name="read-only"
                  value={review?.rating}
                  readOnly
                  precision={0.1}
                />
                <p className="text-textBody mt-2 text-sm lg:text-base tracking-2-percent">
                  {review?.date}
                </p>
                <p className="mt-2 lg:mt-4 text-sm lg:text-xl tracking-2-percent text-textBody lg:font-medium lg:leading-8">
                  {review?.review}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default HandymanRating;
