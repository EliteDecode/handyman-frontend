import React from "react";

interface OverViewCardProps {
  amount: string;
  name: string;
  withdraw: boolean;
  disabledWithdraw: boolean;
  onWithdraw?: () => void;
}

const OverViewCard: React.FC<OverViewCardProps> = ({
  amount,
  name,
  withdraw,
  disabledWithdraw,
  onWithdraw,
}) => {
  return (
    <div className="w-full min-w-[148px] h-[188px] shadow-custom flex items-center justify-center flex-col gap-2 font-lato rounded-[12px]">
      <h1 className="text-[#191919] md:text-[24px] text-[16px] md:leading-[100%] leading-6 font-bold font-merriweather">
        {amount}
      </h1>
      <p className="md:text-[16px] text-[14px] md:leading-[100%] leading-5 tracking-2-percent text-[#3C3C3C]">
        {name}
      </p>
      <button
        disabled={disabledWithdraw}
        onClick={() => {
          if (!disabledWithdraw && onWithdraw) onWithdraw(); // only call if allowed
        }}
        className={`md:w-[128px] w-[86px] md:h-[56px] h-[30px] rounded-[8px] md:text-[18px] text-[12px] md:leading-6 leading-[14px] font-semibold text-[#FFFFFF] transition-opacity duration-300
    ${withdraw ? "opacity-100" : "opacity-0"}
    ${disabledWithdraw ? "bg-gray-400 cursor-not-allowed" : "bg-[#008080] cursor-pointer"}
  `}
      >
        Withdraw
      </button>
    </div>
  );
};

export default OverViewCard;
