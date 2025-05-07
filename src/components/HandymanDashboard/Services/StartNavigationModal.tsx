// components/StartNavigationModal.tsx
import React, { useEffect, useRef } from "react";
import caution from "@/assets/icons/caution.svg";

interface StartNavigationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const StartNavigationModal: React.FC<StartNavigationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-6 bg-black/40 backdrop-blur-sm font-lato">
      <div
        className="bg-white rounded-lg shadow-lg p-6 w-full max-w-[471px] relative flex items-center justify-center flex-col gap-6"
        ref={modalRef}
      >
        <div className="flex items-center justify-center md:w-[72px] md:h-[72px] w-[52px] h-[52px] rounded-full bg-[#CB1A143D] bg-opacity-[24%]">
          <img
            src={caution}
            alt="caution"
            className="w-[18px] h-[18px] md:w-fit md:h-fit"
          />
        </div>

        <div className="flex flex-col items-center gap-4 text-[#000000]">
          <h1 className="md:text-[24px] text-[16px] md:leading-[100%] leading-[24px] font-bold font-merriweather text-center">
            Are You Sure You Are Ready To Start This Journey?
          </h1>
          <p className="md:text-[18px] text-[14px] md:leading-6 leading-5 tracking-2-percent">
            This will notify the customer,
          </p>
        </div>

        <div className="flex flex-col items-center w-full gap-4 md:mt-2 md:gap-6">
          <button
            className="w-full text-white rounded-[8px] bg-[#008080] md:h-14 h-[30px] md:text-[18px] text-[12px] md:leading-6 leading-[14px] font-semibold"
            onClick={onConfirm}
          >
            Confirm & Notify
          </button>

          <button
            className="w-full text-[#008080] rounded-[8px] border-[1.5px] border-[#008080] md:h-14 h-[30px] md:text-[18px] text-[12px] md:leading-6 leading-[14px] font-semibold"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartNavigationModal;
