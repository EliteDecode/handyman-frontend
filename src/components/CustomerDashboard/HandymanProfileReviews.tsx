import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../general/Modal";

const HandymanProfileReviews = ({ profileInfo }: any) => {
  const [rating, setRating] = useState<number | null>(0);
  const [newReview, setNewReview] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleSubmit = () => {
    if (newReview) {
      setShowModal(true);
      setNewReview("");
      setRating(0);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="">
        <h2 className="font-bold text-base lg:text-2xl font-merriweather text-textHeader">
          Give Your Review
        </h2>

        <div className="mt-4 lg:mt-6">
          <h2 className="text-base lg:text-xl text-textBody font-semibold">
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
          <div className="mt-2 lg:mt-4">
            <textarea
              placeholder="Write your review Here"
              className="p-4 text-sm text-textBody w-full h-[95px] lg:h-[140px] outline-none border border-[#D0D5DD] rounded-[6px] placeholder:text-[#98A2B3] resize-none"
              onChange={(e) => setNewReview(e.target.value)}
              value={newReview}
            />
          </div>
          <div className="flex justify-center items-center w-full mt-4 lg:mt-6">
            <button
              onClick={handleSubmit}
              className={`w-[185px] lg:w-[240px] py-4 px-6 rounded-lg text-sm lg:text-lg text-white font-semibold ${newReview ? "bg-primary" : "bg-[#D0D5DD]"}`}
            >
              Submit
            </button>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center gap-3 justify-between">
            <div className="lg:flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="tracking-2-percent text-sm lg:text-xl text-textHeader">
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
              <p className="text-sm lg:text-xl font-semibold text-textHeader mt-2 lg:mt-0">
                ({profileInfo?.reviews?.length || 0} Reviews Received)
              </p>
            </div>
            {profileInfo?.reviews?.length > 3 && (
              <Link
                to={`/dashboard/handyman-ratings/${profileInfo?.id}`}
                className="px-6 rounded-lg text-primary text-sm lg:text-lg font-semibold "
              >
                See All
              </Link>
            )}
          </div>
          <div className="mt-4 lg:mt-6">
            {profileInfo?.reviews?.slice(0, 3).map((review: any, i: number) => (
              <div className="my-2 lg:my-4" key={i}>
                <h2 className="font-medium text-base lg:text-xl tracking-2-percent text-textHeader">
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
                <p className="text-textBody text-sm lg:text-xl tracking-2-percent leading-8">
                  {review?.review}
                </p>
              </div>
            ))}
            {!profileInfo?.reviews?.length && (
              <p className="text-base lg:text-xl font-semibold text-center mt-10">
                No reviews yet
              </p>
            )}
          </div>
        </div>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)} maxWidth={618}>
          <div className="max-w-[465px] mx-auto">
            <p className="text-center text-base lg:text-2xl font-medium text-textHeader">
              Thank you for sharing your feedback! Your review has been
              successfully posted and will help us improve and serve you better.
            </p>
            <div className="flex items-center justify-center">
              <button
                onClick={() => setShowModal(false)}
                className="w-[220px] font-semibold bg-primary text-white text-sm lg:text-base lg:py-4 py-3 px-6 rounded-lg hover:bg-[#008080]/50 duration-300 mt-6 lg:mt-8"
              >
                Continue
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </motion.div>
  );
};

export default HandymanProfileReviews;
