import { serviceProviders } from "@/lib/serviceData";
import { ArrowLeft, Heart } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import HandymanProfileInfo from "@/components/CustomerDashboard/HandymanProfileInfo";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HandymanProfilePortfolio from "@/components/CustomerDashboard/HandymanProfilePortfolio";
import HandymanProfileReviews from "@/components/CustomerDashboard/HandymanProfileReviews";
import toast from "react-hot-toast";
const HandymanProfile = () => {
  const [activeTab, setActiveTab] = useState<"portfolio" | "reviews">(
    "portfolio"
  );
  const [isfavourite, setIsfavourite] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();
  const profileInfo = serviceProviders.find((val) => val.id === Number(id));
  useEffect(() => {
    if (isfavourite) toast.success("Added to Favorites");
  }, [isfavourite]);

  const handleFavourite = () => {
    setIsfavourite((prev) => !prev);

  };

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
        <div className="lg:flex gap-6">
          <div className="w-full lg:w-5/12 h-fit lg:p-6 lg:py-12 rounded-xl lg:shadow-custom flex flex-col items-center justify-center">
            <div className="relative w-full flex items-center justify-center">
              <img
                src={profileInfo?.profileImg}
                alt="profile Image"
                className="w-[200px] lg:w-[340px] h-[160px] lg:h-[260px] object-center object-cover rounded-[18px]"
              />
              <button
                className="outline-none absolute top-0 right-0 lg:hidden"
                onClick={handleFavourite}
              >
                <Heart
                  className={`w-6 h-6 duration-700 transition-all`}
                  fill={isfavourite ? "#008080" : "none"}
                  color={isfavourite ? "none" : "#3C3C3C"}
                />
              </button>
            </div>
            <p className="hidden lg:block text-justify mt-8 tracking-2-percent text-textBody text-sm lg:text-base">
              {profileInfo?.bioData}
            </p>
            <p className="lg:hidden text-justify mt-8 tracking-2-percent text-textBody text-sm lg:text-base">
              {isExpanded
                ? profileInfo?.bioData
                : `${profileInfo?.bioData?.substring(0, 180)}... `}
              <button
                className="outline-none text-primary"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? "" : "Read More"}
              </button>
            </p>
          </div>
          <div className="w-full lg:w-7/12 lg:px-6 py-6 lg:py-12 rounded-xl lg:shadow-custom">
            <HandymanProfileInfo
              profileInfo={profileInfo}
              isfavourite={isfavourite}
              setIsfavourite={setIsfavourite}
            />

            <div className="mt-6 lg:mt-10">
              <div className="lg:py-4 py-2 flex items-center gap-4 lg:gap-6 shadow-custom">
                <div className="py-1 px-4">
                  <button
                    onClick={() => setActiveTab("portfolio")}
                    className={`${activeTab === "portfolio" ? "border-b border-primary text-primary" : ""} font-medium py-2 outline-none text-lg lg:text-xl tracking-2-percent transition-all duration-100`}
                  >
                    Portfolio
                  </button>
                </div>
                <div className="py-1 px-4">
                  <button
                    onClick={() => setActiveTab("reviews")}
                    className={`${activeTab === "reviews" ? "border-b border-primary text-primary" : ""} font-medium py-2 outline-none text-lg lg:text-xl tracking-2-percent transition-all duration-100`}
                  >
                    Reviews & Ratings
                  </button>
                </div>
              </div>

              <div className="mt-8">
                {activeTab === "portfolio" ? (
                  <HandymanProfilePortfolio
                    key="portfolio"
                    profileInfo={profileInfo}
                  />
                ) : (
                  <HandymanProfileReviews
                    key="reviews"
                    profileInfo={profileInfo}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HandymanProfile;
