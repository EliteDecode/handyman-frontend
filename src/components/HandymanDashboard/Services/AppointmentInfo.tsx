import React from "react";

interface AppointmentInfoProps {
  label: string;
  value: string;
}

const AppointmentInfo: React.FC<AppointmentInfoProps> = ({ label, value }) => {
  return (
    <div className="flex flex-col md:gap-1 gap-2 py-2 px-[10px] w-fit">
      <p className="md:text-[16px] text-[14px] md:leading-[100%] leading-5 tracking-2-percent text-[#3C3C3C]">
        {label}
      </p>
      <h1 className="md:text-[18px] text-[14px] leading-[24px] font-semibold text-[#191919]">
        {value}
      </h1>
    </div>
  );
};

export default AppointmentInfo;
