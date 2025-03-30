import { serviceProviders } from "@/lib/serviceData";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import HandymanProfileInfo from "@/components/CustomerDashboard/HandymanProfileInfo";
import { useState } from "react";
import { motion } from "framer-motion";
import HandymanProfilePortfolio from "@/components/CustomerDashboard/HandymanProfilePortfolio";
import HandymanProfileReviews from "@/components/CustomerDashboard/HandymanProfileReviews";
const HandymanProfile = () => {
  const [activeTab, setActiveTab] = useState<"portfolio" | "reviews">(
    "portfolio"
  );
  const navigate = useNavigate();
  const { id } = useParams();
  const profileInfo = serviceProviders.find((val) => val.id === Number(id));

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
        <div className="flex gap-6">
          <div className="w-5/12 h-fit p-6 rounded-xl shadow-custom flex flex-col items-center justify-center">
            <img
              src={profileInfo?.profileImg}
              alt="profile Image"
              className="w-[340px] h-[260px] object-center object-cover rounded-[18px]"
            />
            <p className="text-justify mt-8 tracking-2-percent text-textBody">
              {profileInfo?.bioData}
            </p>
          </div>
          <div className="w-7/12 px-6 py-12 rounded-xl shadow-custom">
            <HandymanProfileInfo profileInfo={profileInfo} />

            <div className="mt-10">
              <div className="py-4 flex items-center gap-6 ">
                <div className="py-1 px-4">
                  <button
                    onClick={() => setActiveTab("portfolio")}
                    className={`${activeTab === "portfolio" ? "border-b border-primary text-primary" : ""} py-2 outline-none text-xl tracking-2-percent transition-all duration-100`}
                  >
                    Portfolio
                  </button>
                </div>
                <div className="py-1 px-4">
                  <button
                    onClick={() => setActiveTab("reviews")}
                    className={`${activeTab === "reviews" ? "border-b border-primary text-primary" : ""} py-2 outline-none text-xl tracking-2-percent transition-all duration-100`}
                  >
                    Reviews & Ratings
                  </button>
                </div>
              </div>

              <div className="mt-8">
                {activeTab === "portfolio" ? (
                  <HandymanProfilePortfolio key="portfolio" profileInfo={profileInfo}/>
                ) : (
                  <HandymanProfileReviews key="reviews" />
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
