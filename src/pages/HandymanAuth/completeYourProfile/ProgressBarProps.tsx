import React from "react";

interface ProgressBarProps {
  progress: number; // A number between 0 and 100
  step: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, step }) => {
  return (
    <div className="flex items-center w-full gap-2 mb-6">
      <p className="sm:text-[16px] text-[12px]  sm:leading-[18px] leading-[14px] font-medium sm:font-normal font-lato text-[#000000]">
        {step}/3
      </p>
      <div className="w-full max-w-[308px] h-2 bg-[#E9EEF5] rounded-[8px]">
        <div
          className="h-full duration-300 ease-in-out bg-custom-gradient-progress-bar transition-width rounded-[8px]"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
