import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { Award, Clock3, FileText, Heart, MapPin } from "lucide-react";
import { useState } from "react";

const HandymanProfileInfo = ({ profileInfo }: any) => {
  const [isfavourite, setIsfavourite] = useState(false);
  return (
    <div className="">
      <div className="flex justify-between gap-4">
        <div className="flex items-center gap-6">
          <h2 className="font-merriweather text-textHeader font-bold text-3xl">
            {profileInfo?.name}
          </h2>
          <div className="flex items-center gap-2 text-textBody">
            <MapPin />{" "}
            <span className="tracking-2-percent text-base">
              {profileInfo?.town}, {profileInfo?.state}
            </span>
          </div>
        </div>
        <button
          className="outline-none"
          onClick={() => setIsfavourite((prev) => !prev)}
        >
          <Heart
            className={`w-8 h-8 duration-700 transition-all`}
            fill={isfavourite ? "#008080" : "none"}
            color={isfavourite ? "none" : "#3C3C3C"}
          />
        </button>
      </div>
      <p className="text-primary text-xl font-semibold mt-2">
        {profileInfo?.skill}
      </p>
      <div className="mt-6 text-textBody">
        <span className="">
          &#8358;{profileInfo?.minPrice} - &#8358;
          {profileInfo?.maxPrice}{" "}
          {profileInfo?.priceDescription &&
            `(${profileInfo?.priceDescription})`}
        </span>
      </div>
      <div
        className={`mt-6 px-6 py-4 flex rounded-2xl ${profileInfo?.available ? "bg-[#0080800e]" : "bg-[#FF9500]/5"}  items-center gap-2 w-fit`}
      >
        <span
          className={`w-2.5 h-2.5 rounded-full ${profileInfo?.available ? "bg-[#34C759]" : "bg-[#FF9500]"} `}
        />
        <span className="text-textBody tracking-2-percent text-base">
          {profileInfo?.available ? "Currently Available" : "Busy"}
        </span>
      </div>
      <div className=" mt-6 flex items-center gap-2">
        <span className="text-textHeader font-medium">
          {profileInfo?.rating.toFixed(1)}
        </span>
        <Rating
          icon={<StarIcon style={{ color: "#FDDF3D", fontSize: "24px" }} />}
          emptyIcon={
            <StarIcon style={{ color: "#D0D5DD", fontSize: "24px" }} />
          }
          className="text-[#FDDF3D]"
          name="read-only"
          value={profileInfo?.rating}
          readOnly
          precision={0.1}
        />
      </div>
      <div className="w-full flex items-center justify-between gap-4 mt-6">
        <div className="flex items-center gap-2">
          <Clock3 className="text-[#98A2B3] w-10 h-10" />
          <div className="">
            <p className="text-xl font-semibold text-textHeader">
              {profileInfo?.yearsOfExperience} Years
            </p>
            <span className="text-[#98A2B3]">Experienced</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Award className="text-[#98A2B3] w-10 h-10" />
          <div className="">
            <p className="text-xl font-semibold text-textHeader">
              {profileInfo?.certificates} Certificates
            </p>
            <span className="text-[#98A2B3]">Achieved</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <FileText className="text-[#98A2B3] w-10 h-10" />
          <div className="">
            <p className="text-xl font-semibold text-textHeader">
              {profileInfo?.bookingsCompleted} Bookings
            </p>
            <span className="text-[#98A2B3]">Completed</span>
          </div>
        </div>
      </div>
      <button
        className={`${profileInfo?.available ? "bg-primary duration-200 hover:bg-[#008080]/50" : "bg-[#98A2B3]"} mt-10 w-full px-6 py-4 rounded-lg text-white text-lg font-semibold`}
      >
        Book Now
      </button>
    </div>
  );
};

export default HandymanProfileInfo;
