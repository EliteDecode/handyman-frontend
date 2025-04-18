import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import locationIcon from "@/assets/icons/fluent_open-24-filled.svg";
import DropDown from "@/assets/icons/greenDropDownWithCircle.svg";
import map from "@/assets/images/map.png";

type RequestRowProps = {
  customer: string;
  location: string;
  dateTime: string;
  description: string;
  status: string;
  image: string;
};

export default function RequestRow({
  customer,
  location,
  dateTime,
  description,
  status,
  image,
}: RequestRowProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <div
        className={`sm:flex hidden items-center ${
          isOpen ? "justify-end" : "justify-between"
        } min-h-[72px] h-full flex-wrap border-b border-[#C9CDD3] text-[14px] leading-5 font-medium tracking-wide font-lato text-[#191919] transition-all duration-300`}
      >
        <div
          className={`items-center gap-3 h-[72px] px-6 max-w-[213px] w-full ${
            isOpen ? "hidden" : "flex"
          }`}
        >
          <img
            src={image}
            alt={customer}
            className="w-[40px] h-[40px] rounded-full"
          />
          <span>{customer}</span>
        </div>

        <div
          className={`px-6 items-center gap-[14px] max-w-[210px] w-full ${
            isOpen ? "hidden" : "flex"
          }`}
        >
          <p>{location}</p>
          <img src={locationIcon} alt="location icon" className="w-4 h-4" />
        </div>

        <div
          className={`px-6 max-w-[157px] w-full ${isOpen ? "hidden" : "block"}`}
        >
          <p>{dateTime}</p>
        </div>

        <div
          className={`px-6 max-w-[239px] w-full ${isOpen ? "hidden" : "block"}`}
        >
          <p>{description}</p>
        </div>

        <div
          className={`text-center max-w-[147px] w-full ${
            isOpen ? "hidden" : "block"
          }`}
        >
          <p className="h-9 w-[92px] bg-[#0080800A] flex items-center justify-center rounded-[8px] text-[#008080]">
            {status}
          </p>
        </div>

        <div
          className="px-6 flex items-center gap-3 max-w-[147px] w-full cursor-pointer"
          onClick={handleToggleDropdown}
        >
          <p className="text-[#008080]">{isOpen ? "Close" : "View"}</p>
          <motion.img
            src={DropDown}
            alt="dropdown"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <div
        className={`sm:hidden flex flex-col ${
          isOpen ? "justify-end" : "justify-between"
        } min-h-[72px] p-4 h-full gap-4 flex-wrap border-b border-[#C9CDD3] text-[14px] leading-5 font-medium tracking-wide font-lato text-[#191919] transition-all duration-300`}
      >
        {/* Customer Info */}
        <div
          className={`items-center gap-3 max-w-[213px] w-full ${
            isOpen ? "hidden" : "flex"
          }`}
        >
          <img
            src={image}
            alt={customer}
            className="w-[40px] h-[40px] rounded-full"
          />
          <span>{customer}</span>
        </div>

        {/* Location & Date */}
        <div
          className={`flex flex-row justify-between w-full gap-2 ${
            isOpen ? "hidden" : "flex"
          }`}
        >
          <div className="flex gap-2 max-w-[163px] w-full flex-col">
            <h1 className="text-[#98A2B3] text-[12px] leading-5 tracking-2-percent">
              LOCATION
            </h1>
            <div className="flex items-center w-full gap-4">
              <p className="text-[14px] leading-5 text-[#3C3C3C] tracking-2-percent">
                {location}
              </p>
              <img src={locationIcon} alt="location icon" className="w-4 h-4" />
            </div>
          </div>

          <div className="flex gap-2 max-w-[163px] w-full flex-col">
            <h1 className="text-[#98A2B3] text-[12px] leading-5 tracking-2-percent">
              DATE & TIME
            </h1>
            <div className="flex">
              <p className="text-[14px] leading-5 text-[#3C3C3C] tracking-2-percent">
                {dateTime}
              </p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div
          className={`flex flex-col w-full gap-2 ${isOpen ? "hidden" : "flex"}`}
        >
          <h1 className="text-[#98A2B3] text-[12px] leading-5 tracking-2-percent">
            SERVICE DESCRIPTION
          </h1>
          <div className="flex">
            <p className="text-[14px] leading-5 text-[#3C3C3C] tracking-2-percent">
              {description}
            </p>
          </div>
        </div>

        {/* Status and View/Close toggle */}
        <div className="flex flex-row items-start justify-between w-full gap-2">
          <div
            className={`flex gap-2 max-w-[163px] w-full flex-col ${
              isOpen ? "hidden" : "flex"
            }`}
          >
            <h1 className="text-[#98A2B3] text-[12px] leading-5 tracking-2-percent">
              STATUS
            </h1>
            <div className="text-center max-w-[147px] w-full">
              <p className="h-9 w-[92px] bg-[#0080800A] flex items-center justify-center rounded-[8px] text-[#008080]">
                {status}
              </p>
            </div>
          </div>

          {/* Always visible */}
          <div
            className={`flex items-center justify-end gap-3  ${
              isOpen ? "" : "max-w-[147px]"
            } w-full cursor-pointer`}
            onClick={handleToggleDropdown}
          >
            <p className="text-[#008080]">{isOpen ? "Close" : "View"}</p>
            <motion.img
              src={DropDown}
              alt="dropdown"
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>

      {/* Animate dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="bg-[#F9FAFB] border-b border-[#C9CDD3] rounded shadow-md text-sm w-full pt-[14px] pb-4 px-[12px] pl-[18px] z-10 flex sm:flex-row flex-col justify-between gap-5 font-lato"
          >
            <div className="flex flex-col gap-4 max-w-[424px] w-full">
              <div className="text-[#191919] w-full">
                <div className="flex items-center justify-between gap-3 px-6 py-4">
                  <div className={`items-center gap-3 w-full flex`}>
                    <img
                      src={image}
                      alt={customer}
                      className="w-[40px] h-[40px] rounded-full"
                    />
                    <span>{customer}</span>
                  </div>

                  <img
                    src={locationIcon}
                    alt="location icon"
                    className="w-4 h-4"
                  />
                </div>

                <div className="flex items-center justify-between gap-3 px-6 py-4 text-[12px] leading-5 text-[#98A2B3]">
                  <p>
                    AMOUNT:
                    <br />
                    <span className="leading-[14px] font-semibold text-[#191919]">
                      {" "}
                      ₦ 52,000
                    </span>
                  </p>

                  <p>
                    SPECIAL REQUEST:
                    <br />
                    <span className="leading-[14px] font-semibold text-[#191919]">
                      {" "}
                      Nil
                    </span>
                  </p>
                </div>

                <p className="pl-6 py-[7.5px] text-[12px] leading-5 text-[#98A2B3] max-w-[356px] w-full">
                  SERVICE DESCRIPTION: <br />{" "}
                  <span className="leading-[14px] font-semibold text-[#191919]">
                    {" "}
                    Plumbing repair - The tap at my backyard is leaking and
                    finding it difficult to it switch off.
                  </span>
                </p>

                <p className="pl-6 py-[7.5px] text-[12px] leading-5 text-[#98A2B3] max-w-[356px] w-full">
                  NOTES:
                  <br />{" "}
                  <span className="leading-[14px] font-semibold text-[#191919]">
                    {" "}
                    Come with your ID Cards or Call me as soon as you are at the
                    estate gate.
                  </span>
                </p>
              </div>

              <div className="bg-[#0080800A] bg-opacity-[4%] rounded-lg px-6 py-4 flex flex-row justify-between">
                <div className="flex flex-row items-center gap-[19px]">
                  <img src={locationIcon} alt="location icon" />

                  <p className="text-[12px] leading-5 text-[#98A2B3]">
                    OUR POLICY
                    <br />{" "}
                    <span className="leading-[14px] font-semibold text-[#191919]">
                      {" "}
                      View our policy for both customer’s and handyman.
                    </span>
                  </p>
                </div>

                <img src={locationIcon} alt="location icon" />
              </div>
            </div>

            <div>
              <div className="relative w-full h-full">
                <img
                  src={map}
                  alt="map"
                  className="object-cover w-full h-full"
                />

                <div className="md:absolute bottom-6 inset-x-6 md:h-[92px] h-fit flex md:flex-row flex-col gap-[10px] items-center justify-between bg-[#FFFFFF] rounded-md md:px-4 w-auto md:py-0 py-4">
                  <div className="flex items-center justify-between w-full md:max-w-[464px] max-w-full gap-4">
                    {/* <InfoItem
                    label="DATE & TIME"
                    value="Wed, 21st November, 2024 : 03:00PM"
                  />
                  <InfoItem label="DISTANCE" value="3 km" />
                  <InfoItem label="TIME" value="12 mins" /> */}
                  </div>

                  <div className="flex items-center max-w-[343px] w-full gap-4">
                    <button
                      className="w-full sm:max-w-[178px] bg-[#008080] md:h-14 h-[30px] rounded-md text-white md:text-[18px] text-[12px] md:leading-6 leading-[14px] font-semibold"
                      // onClick={handleStartNavigation}
                    >
                      Start Navigation
                    </button>

                    <button
                      className="w-full sm:max-w-[149px] border-[1.5px] border-[#008080] md:h-14  h-[30px] rounded-md  md:text-[18px] text-[12px] md:leading-6 leading-[14px] text-[#008080] font-semibold"
                      // onClick={handleNotifyDelay}
                    >
                      Notify Delay
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
