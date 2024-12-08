import React from "react";

interface ProgressBarProps {
  progress: number; // A number between 0 and 100
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="w-full max-w-[308px] h-2 bg-[#E9EEF5] rounded-[8px]">
      <div
        className="h-full duration-300 ease-in-out bg-custom-gradient-progress-bar transition-width rounded-[8px]"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
