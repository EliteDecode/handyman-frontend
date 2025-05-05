import { useEffect, useRef } from "react";
import serviceImg3 from "@/assets/images/serviceImg3.jpg";
import exportIcon from "@/assets/icons/export.svg";

interface Booking {
  service: string;
  dateTime: string;
  customer: string;
  location: string;
  amount: string;
  status: "Success" | "Pending" | "Failed";
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  booking: Booking | null;
}

export default function ServiceHistoryModal({
  isOpen,
  onClose,
  booking,
}: Props) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !booking) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-[814px]"
        ref={modalRef}
      >
        <div className="md:h-[54px] h-[40px] border-b border-[#98A2B3] md:text-[24px] text-[16px] leading-[100%] text-[#191919] font-merriweather font-bold">
          Telecommunication Details
        </div>

        <p className="py-6 md:text-[16px] text-[14px] font-merriweather font-bold md:leading-6 leading-[16px] text-[#191919]">
          Service Type : Plumbing Consultation
        </p>

        <div className="space-y-4">
          <div className="flex items-center md:gap-[120px] gap-2 font-lato justify-between md:justify-normal">
            <ul className="space-y-4 md:text-[16px] text-[14px] md:leading-[18px] leading-[100%] text-[#191919] font-semibold">
              <li>Customer’s Name : </li>
              <li>Appointment Time & Date : </li>
              <li>Job Status : </li>
              <li>Work Time : </li>
            </ul>
            <div>
              <ul className="space-y-4 md:text-[16px] text-[14px] md:leading-[18px] leading-[100%] text-[#3C3C3C] font-medium">
                <li>{booking.customer || "Amira Ikechukwu"}</li>
                <li>{booking.dateTime || "10/05/2024 03:00PM"}</li>
                <li>{booking.service || "Completed"}</li>
                <li>{"1 hour, 30 mins"}</li>
              </ul>
            </div>
          </div>

          <div className="space-y-1 md:space-y-4">
            <p className="md:text-[16px] text-[14px] md:eading-[18px] leading-[100%] text-[#191919] font-semibold">
              Multimedia Files:
            </p>

            <div className="flex flex-row items-center gap-4 overflow-x-auto">
              {[1, 2, 3].map((_, i) => (
                <div key={i}>
                  <div className="w-[198px] h-[171px] bg-[#0080800A] rounded-md px-[10px]">
                    <img
                      src={serviceImg3}
                      alt={`Service image ${i + 1}`}
                      className="w-full h-full rounded-md"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="md:text-[16px] text-[14px] md:leading-[18px] leading-[100%] text-[#191919] font-medium">
              Add a personal note to telecommunication record{" "}
              <span className="text-[#98A2B3]">(Optional)</span>
            </label>

            <textarea
              className="border border-[#C9CDD3] h-[128px] resize-none py-[10px] px-[14px] outline-none md:text-[16px] text-[12px] md:leading-[100%] leading-5 tracking-2-percent text-[#3C3C3C] font-medium font-lato rounded-md"
              placeholder="Enter a description..."
            ></textarea>
          </div>
        </div>

        <div className="flex items-center justify-center mt-6 md:mt-12">
          <button className="md:w-[178px] w-full md:h-[45px] h-9 bg-[#008080] rounded-lg flex items-center justify-center gap-2 px-3">
            <p className="text-white md:text-[18px] text-[12px] md:leading-6 leading-[14px] font-lato font-semibold">
              Export Record
            </p>
            <img src={exportIcon} alt="download" />
          </button>
        </div>
      </div>
    </div>
  );
}
