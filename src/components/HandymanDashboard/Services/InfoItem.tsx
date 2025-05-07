// InfoItem.tsx
import React from "react";

// Define the types for the props
interface InfoItemProps {
  label: string;
  value: string;
}

// The reusable InfoItem component with type-safe props
const InfoItem: React.FC<InfoItemProps> = ({ label, value }) => (
  <h1 className="text-[14px] leading-5 tracking-2-percent text-[#98A2B3] md:px-3">
    {label}: <br />
    <span className="text-[12px] leading-[14px] font-semibold text-[#3C3C3C]">
      {value}
    </span>
  </h1>
);

export default InfoItem;
