import { useEffect, useRef, useState } from "react";
import search from "@/assets/icons/search_icon.svg";
import filter from "@/assets/icons/filter.svg";
import check from "@/assets/icons/checkWithWhiteBg.svg";
import close from "@/assets/icons/cancelBlack.svg";
import TransactionHistoryTable from "@/components/HandymanDashboard/TransactionHistory/TransactionHistoryTable";
import dropDown from "@/assets/icons/dropDown.svg";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useSearchParams } from "react-router-dom";
import dayjs from "dayjs";

export default function TransactionHistory() {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(null);
  const statusList = ["Completed", "Processing", "Scheduled"];
  const [searchParams, setSearchParams] = useSearchParams();

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelection = (status: string) => {
    setSelectedStatus(status); // Update selected status
    setIsOpen(false); // Close the dropdown once a status is selected
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false); // Close dropdown when clicked outside
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isFilterModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isFilterModalOpen]);

  useEffect(() => {
    const statusFromURL = searchParams.get("status");
    const dateFromURL = searchParams.get("date");

    if (statusFromURL) setSelectedStatus(statusFromURL);
    if (dateFromURL) setSelectedDate(dayjs(dateFromURL));
  }, []);

  return (
    <div className="flex flex-col w-full gap-6 md:gap-16">
      {/* Search and Filter */}
      <div className="flex flex-row gap-4">
        {/* Search Input */}
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search for anything"
            className="md:h-14 h-12 w-full rounded-lg border border-[#008080] pl-14 pr-4 outline-none md:text-[20px] text-[14px] md:leading-[32px] leading-5 tracking-[2%] font-lato"
          />
          <img
            src={search}
            alt=""
            className="absolute transform -translate-y-1/2 left-4 top-1/2"
          />
        </div>

        {/* Filter Button */}
        <div
          onClick={() => setIsFilterModalOpen(true)}
          className="w-[102px] md:h-14 h-12 bg-[#ECECEC] rounded flex flex-row items-center justify-center gap-[10px] cursor-pointer"
        >
          <p className="md:text-[16px] text-[14px] md:leading-[100%] leading-5 tracking-[2%] font-lato text-[#3C3C3C]">
            Filter
          </p>
          <img src={filter} alt="" className="w-5 h-5" />
        </div>
      </div>

      {/* Table */}
      <div>
        <TransactionHistoryTable />
      </div>

      {/* Filter Modal */}
      {isFilterModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
          <div className="bg-white w-[90%] md:w-[370px] rounded-lg shadow-lg p-6 absolute md:right-4 md:top-64 pt-[39px] pb-[34px]">
            <div className="flex items-center justify-between border-b h-12 border-[#C9CDD3]">
              <h2 className="text-[24px] font-bold leading-[100%] text-[#191919] font-merriweather">
                Filter
              </h2>

              <button
                onClick={() => setIsFilterModalOpen(false)}
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
                      className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </div>

                  {/* Dropdown List */}
                  {isOpen && (
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
                onClick={() => {
                  setSearchParams({}); // Clear all query params
                  setSelectedStatus("");
                  setSelectedDate(null);
                  setIsFilterModalOpen(false);
                }}
                className="border-[#008080] border md:h-14 h-[30px] md:w-[90px] w-[60px] rounded-[8px] text-[#008080] text-[12px] md:text-[18px] leading-[14px] md:leading-[24px] font-semibold font-lato"
              >
                Clear
              </button>

              <button
                onClick={() => {
                  const params: Record<string, string> = {};

                  if (selectedStatus) {
                    params.status = selectedStatus;
                  }

                  if (selectedDate) {
                    params.date = selectedDate.format("YYYY-MM-DD"); // assuming Dayjs
                  }

                  setSearchParams(params);
                  setIsFilterModalOpen(false);
                }}
                className="bg-[#008080] md:h-14 h-[30px] md:w-[90px] w-[60px] rounded-[8px] text-white text-[12px] md:text-[18px] leading-[14px] md:leading-[24px] font-semibold font-lato"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
