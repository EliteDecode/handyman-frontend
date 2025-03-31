import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
const HandymanProfileReviews = ({ profileInfo }: any) => {
  const [rating, setRating] = useState<number | null>();
  const [newReview, setNewReview] = useState<string>("");
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="">
        <h2 className="font-bold text-2xl font-merriweather text-textHeader">
          Give Your Review
        </h2>

        <div className="mt-6">
          <h2 className="text-xl text-textBody font-semibold">
            Rate {profileInfo?.name}
          </h2>

          <div className="mt-2">
            <Rating
              icon={<StarIcon style={{ color: "#FDDF3D", fontSize: "24px" }} />}
              emptyIcon={
                <StarIcon style={{ color: "#D0D5DD", fontSize: "24px" }} />
              }
              className="text-[#FDDF3D]"
              name="read-only"
              value={rating}
              onChange={(_, newValue) => {
                setRating(newValue);
              }}
              precision={0.1}
            />
          </div>
          <div className="mt-4">
            <textarea
              placeholder="Write your review Here"
              className="p-4 text-sm text-textBody w-full h-[140px] outline-none border border-[#D0D5DD] rounded-[6px] placeholder:text-[#98A2B3] resize-none"
              onChange={(e) => setNewReview(e.target.value)}
              value={newReview}
            />
          </div>
          <div className="flex justify-center items-center w-full mt-6">
            <button
              className={`w-[240px] h-14 py-4 px-6 rounded-lg text-lg text-white font-semibold ${newReview ? "bg-primary" : "bg-[#D0D5DD]"}`}
            >
              Submit
            </button>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center gap-3 justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="tracking-2-percent text-xl text-textHeader">
                  {profileInfo?.averageRating?.toFixed(1)}
                </span>
                <Rating
                  icon={
                    <StarIcon style={{ color: "#FDDF3D", fontSize: "24px" }} />
                  }
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
              <p className="text-xl font-semibold text-textHeader">
                ({profileInfo?.reviews?.length || 0} Reviews Received)
              </p>
            </div>
            {profileInfo?.reviews?.length > 3 && (
              <Link
                to={`/dashboard/handyman-ratings/${profileInfo?.id}`}
                className="px-6 rounded-lg text-primary text-lg font-semibold "
              >
                See All
              </Link>
            )}
          </div>
          <div className="mt-6">
            {profileInfo?.reviews?.slice(0, 3).map((review: any, i: number) => (
              <div className="my-4" key={i}>
                <h2 className="font-medium text-xl tracking-2-percent text-textHeader">
                  {review?.name}
                </h2>
                <Rating
                  icon={
                    <StarIcon style={{ color: "#FDDF3D", fontSize: "16px" }} />
                  }
                  emptyIcon={
                    <StarIcon style={{ color: "#D0D5DD", fontSize: "16px" }} />
                  }
                  className="text-[#FDDF3D] mt-2"
                  name="read-only"
                  value={review?.rating}
                  readOnly
                  precision={0.1}
                />
                <p className="text-textBody text-xl tracking-2-percent leading-8">
                  {review?.review}
                </p>
              </div>
            ))}
            {!profileInfo?.reviews?.length && (
              <p className="text-base lg:text-xl font-semibold text-center mt-10">No reviews yet</p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HandymanProfileReviews;
