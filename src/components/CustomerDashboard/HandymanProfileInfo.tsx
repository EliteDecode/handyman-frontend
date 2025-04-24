import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { Award, Clock3, FileText, Heart, MapPin } from "lucide-react";
import { useLocation } from "react-router-dom";

const HandymanhandymanProfile = ({
  handymanProfile,
  isfavourite,
  setIsfavourite,
}: any) => {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");

  return (
    <div className="">
      <div className="flex justify-between gap-4">
        <div className="flex items-center gap-6 justify-between w-full lg:justify-normal">
          <h2 className="font-merriweather text-textHeader font-bold text-base lg:text-3xl ">
            {handymanProfile?.firstname} {handymanProfile?.lastname}
          </h2>
          <div className="flex items-center gap-2 text-textBody">
            <MapPin className="w-6 h-6" />{" "}
            <span className="tracking-2-percent text-xs lg:text-base">
              {handymanProfile?.lga}, {handymanProfile?.state}
            </span>
          </div>
        </div>
        <button
          className="outline-none hidden lg:block"
          onClick={() => setIsfavourite((prev: boolean) => !prev)}
        >
          <Heart
            className={`w-8 h-8 duration-700 transition-all`}
            fill={isfavourite ? "#008080" : "none"}
            color={isfavourite ? "none" : "#3C3C3C"}
          />
        </button>
      </div>
      <div className="flex mt-2 lg:mt-0 items-center justify-between gap-3">
        <p className="text-primary text-base lg:text-xl font-semibold mt-2">
          {handymanProfile?.skill || category}
        </p>
        <div className="lg:hidden flex items-center gap-2">
          <span className="text-textHeader font-medium text-xs">
            {handymanProfile?.rating?.toFixed(1)}
          </span>
          <Rating
            icon={<StarIcon style={{ color: "#FDDF3D", fontSize: "16px" }} />}
            emptyIcon={
              <StarIcon style={{ color: "#D0D5DD", fontSize: "16px" }} />
            }
            className="text-[#FDDF3D]"
            name="read-only"
            value={handymanProfile?.rating}
            readOnly
            precision={0.1}
          />
        </div>
      </div>
      <div className="mt-6 text-textBody">
        <span className="">
          {handymanProfile?.profile?.rate_per_hour} -
          {handymanProfile?.profile?.rate_per_job}
          {handymanProfile?.priceDescription &&
            `(${handymanProfile?.priceDescription})`}
        </span>
      </div>
      <div
        className={`mt-6 px-4 lg:px-6 py-2 lg:py-4 flex lg:rounded-2xl rounded-lg items-center gap-2 w-fit ${!handymanProfile?.available ? "bg-[#0080800e]" : "bg-[#FF9500]/5"} `}
      >
        <span
          className={`w-2.5 h-2.5 rounded-full ${!handymanProfile?.available ? "bg-[#34C759]" : "bg-[#FF9500]"} `}
        />
        <span className="text-textBody tracking-2-percent text-xs lg:text-base">
          {!handymanProfile?.available ? "Currently Available" : "Busy"}
        </span>
      </div>
      <div className="hidden mt-6 lg:flex items-center gap-2">
        <span className="text-textHeader font-medium">
          {handymanProfile?.rating?.toFixed(1)}
        </span>
        <Rating
          icon={<StarIcon style={{ color: "#FDDF3D", fontSize: "24px" }} />}
          emptyIcon={
            <StarIcon style={{ color: "#D0D5DD", fontSize: "24px" }} />
          }
          className="text-[#FDDF3D]"
          name="read-only"
          value={handymanProfile?.rating}
          readOnly
          precision={0.1}
        />
      </div>
      <div className="w-full lg:flex items-center justify-between gap-4 mt-6">
        <div className="flex items-center gap-2 my-2 lg:my-0">
          <Clock3 className="text-[#98A2B3] w-6 lg:w-10 h-6 lg:h-10" />
          <div className="">
            <p className="text-base lg:text-xl leading-[18px] lg:leading-6 font-semibold text-textHeader">
              {handymanProfile?.profile?.years_of_experience} Years
            </p>
            <span className="text-[#98A2B3] text-xs lg:text-base tracking-2-percent">
              Experienced
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 my-2 lg:my-0">
          <Award className="text-[#98A2B3] w-6 lg:w-10 h-6 lg:h-10" />
          <div className="">
            <p className="text-base lg:text-xl leading-[18px] lg:leading-6 font-semibold text-textHeader">
              {handymanProfile?.certificates || 0} Certificates
            </p>
            <span className="text-[#98A2B3] text-xs lg:text-base tracking-2-percent">
              Achieved
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 my-2 lg:my-0">
          <FileText className="text-[#98A2B3] w-6 lg:w-10 h-6 lg:h-10" />
          <div className="">
            <p className="text-base lg:text-xl leading-[18px] lg:leading-6 font-semibold text-textHeader">
              {handymanProfile?.bookingsCompleted || 0} Bookings
            </p>
            <span className="text-[#98A2B3] text-xs lg:text-base tracking-2-percent">
              Completed
            </span>
          </div>
        </div>
      </div>
      <div className="px-4 lg:px-0">
        <button
          className={`${handymanProfile?.available ? "bg-primary duration-200 hover:bg-[#008080]/50" : "bg-[#98A2B3]"} mt-6 lg:mt-10 w-full px-6 py-4 rounded-lg text-white text-base lg:text-lg font-semibold`}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default HandymanhandymanProfile;
