// components/NotifyDelayModal.tsx
import React, { useEffect, useRef } from "react";
import notifyModalIcon from "@/assets/icons/notifyModalIcon.svg";

interface StartNavigationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const NotifyDelayModal: React.FC<StartNavigationModalProps> = ({
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
        <img
          src={notifyModalIcon}
          alt="notifyModalIcon"
          className="w-[52px] h-[52px] md:w-fit md:h-fit"
        />

        <h1 className="md:text-[24px] text-[18px] md:leading-[100%] leading-6 font-bold font-merriweather text-center">
          Your Customer Will be Notified of Your Delay
        </h1>

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

export default NotifyDelayModal;
