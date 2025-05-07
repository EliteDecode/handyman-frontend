import React, { useEffect, useRef, useState } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";

import check from "@/assets/icons/checkWithWhiteBg.svg";
import close from "@/assets/icons/cancelBlack.svg";
import dropDown from "@/assets/icons/dropDown.svg";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  selectedStatus: string;
  setSelectedStatus: (status: string) => void;
  selectedDate: Dayjs | null;
  setSelectedDate: (date: Dayjs | null) => void;
  statusList: string[];
  setSearchParams: (params: Record<string, string>) => void;
};

const StatusDropdownFilter: React.FC<Props> = ({
  isOpen,
  onClose,
  selectedStatus,
  setSelectedStatus,
  selectedDate,
  setSelectedDate,
  statusList,
  setSearchParams,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleSelection = (status: string) => {
    setSelectedStatus(status);
    setIsDropdownOpen(false);
  };

  const handleClear = () => {
    setSearchParams({});
    setSelectedStatus("");
    setSelectedDate(null);
    onClose();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false); // Close dropdown when clicked outside
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleApply = () => {
    const params: Record<string, string> = {};

    if (selectedStatus) params.status = selectedStatus;
    if (selectedDate) params.date = selectedDate.format("YYYY-MM-DD");

    setSearchParams(params);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div className="bg-white w-[90%] md:w-[370px] rounded-lg shadow-lg p-6 absolute md:right-4 md:top-64 pt-[39px] pb-[34px]">
        <div className="flex items-center justify-between border-b h-12 border-[#C9CDD3]">
          <h2 className="text-[24px] font-bold leading-[100%] text-[#191919] font-merriweather">
            Filter
          </h2>

          <button
            onClick={onClose}
            className="text-xl font-bold text-gray-500 hover:text-black"
          >
            <img src={close} alt="" />
          </button>
        </div>

        <div className="flex flex-col w-full gap-6 mt-4">
          <div>
            <label className="block text-[#101928] sm:text-[16px] text-[14px] font-medium mb-2">
              Status Date
            </label>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={selectedDate}
                onChange={(newValue) => setSelectedDate(newValue)}
                className="w-full"
              />
            </LocalizationProvider>
          </div>

          <div>
            <label className="block text-[#101928] sm:text-[16px] text-[14px] font-medium">
              Status
            </label>
            <div className="relative w-full" ref={dropdownRef}>
              {/* Select Box */}
              <div
                className="w-full border border-[#98A2B3] rounded-[6px] px-4 h-10 sm:h-14 flex justify-between items-center cursor-pointer"
                onClick={toggleDropdown}
              >
                <span className="text-gray-500 text-[14px]">
                  {selectedStatus.length > 0
                    ? selectedStatus
                    : "Select a Status"}
                </span>
                <img
                  src={dropDown}
                  alt="dropdown"
                  className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                />
              </div>

              {/* Dropdown List */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 z-50 w-full min-w-[200px] bg-white border border-[#98A2B3] rounded-[6px] mt-1 shadow-md max-h-60 overflow-auto py-4">
                  {statusList.map((status) => (
                    <label
                      key={status}
                      className={`flex items-center justify-between w-full gap-3 cursor-pointer h-9 hover:bg-[#008080] hover:text-[#FFFFFF] ${selectedStatus == status ? "bg-[#008080] text-[#FFFFFF]" : "text-[#101928]"}  px-4`}
                      onClick={() => handleSelection(status)}
                    >
                      <span className="text-[14px] leading-[20px] tracking-[2%] font-lato ">
                        {status}
                      </span>

                      {selectedStatus == status && <img src={check} />}
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Apply Filter Button */}
        <div className="flex items-center justify-between gap-4 mt-12">
          <button
            onClick={handleClear}
            className="border-[#008080] border md:h-14 h-[30px] md:w-[90px] w-[60px] rounded-[8px] text-[#008080] text-[12px] md:text-[18px] leading-[14px] md:leading-[24px] font-semibold font-lato"
          >
            Clear
          </button>

          <button
            onClick={handleApply}
            className="bg-[#008080] md:h-14 h-[30px] md:w-[90px] w-[60px] rounded-[8px] text-white text-[12px] md:text-[18px] leading-[14px] md:leading-[24px] font-semibold font-lato"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatusDropdownFilter;
