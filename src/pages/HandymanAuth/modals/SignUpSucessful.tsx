import React, { useEffect } from "react";
import image from "@/assets/images/image 127.png";
import { useNavigate } from "react-router-dom";

// Define Props Interface
interface SignUpSuccessfulProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignUpSuccessful: React.FC<SignUpSuccessfulProps> = ({
  isOpen,
  onClose,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      // Disable scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling
      document.body.style.overflow = "";
    }

    // Cleanup function to reset on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-[29px]">
      <div className="text-center bg-white rounded-lg shadow-lg sm:py-14 py-8 w-[527px] sm:px-[34px] px-[28.5px]">
        <div className="flex flex-col items-center sm:gap-[26px] gap-6">
          <img src={image} alt="" />
          <h2 className="sm:text-[32px] text-[16px] sm:leading-[48px] leading-6 text-[#1D1D1D] font-merriweather font-bold">
            Great!
          </h2>
          <p className="sm:text-[24px] text-[12px] sm:leading-8 leading-5 text-[#3C3C3C]">
            Your account has been created, Let’s get you started!
          </p>
        </div>

        <button
          className="max-w-[227px] w-full h-14 bg-[#008080] rounded-[8px] text-[#FFFFFF] font-semibold text-[16px] leading-6 font-lato sm:mt-[59px] mt-8"
          onClick={() => navigate("/auth/complete-your-profile")}
        >
          Welcome to HandyMan
        </button>
      </div>
    </div>
  );
};

export default SignUpSuccessful;
