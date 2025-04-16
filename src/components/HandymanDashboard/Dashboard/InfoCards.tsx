import React from "react";
import calendarTick from "@/assets/icons/calendar-tick.svg";

interface InfoCardsProps {
  title: string;
  value: number | string;
  currrency?: boolean;
  color?: string;
}

const InfoCards: React.FC<InfoCardsProps> = ({
  title,
  value,
  currrency,
  color,
}) => {
  return (
    <div className="md:max-w-[260px] max-w-full w-full px-6 py-[34px] shadow-[0px_4px_12px_0px_rgba(16,24,40,0.08)] flex flex-row sm:gap-6 gap-3 items-center rounded-[12px]">
      {/* Apply background color dynamically */}
      <div
        className="md:w-[60px] w-8 md:h-[60px] h-8 rounded-lg flex items-center justify-center"
        style={{ backgroundColor: color || "#ccc" }} // Default color if not provided
      >
        <img
          src={calendarTick}
          alt={title}
          className="md:w-6 md:h-6 w-[13.99px] h-[14.76px]"
        />
      </div>

      <div>
        <h1 className="sm:text-[24px] text-[16px] sm:leading-[100%] leading-6 font-bold font-merriweather text-[#191919]">
          {currrency && <span>₦</span>}
          {value}
        </h1>
        <p className="text-[#3C3C3C] sm:text-[16px] text-[14px] sm:eading-[100%] leading-5 tracking-[2%] font-lato">
          {title}
        </p>
      </div>
    </div>
  );
};

export default InfoCards;
