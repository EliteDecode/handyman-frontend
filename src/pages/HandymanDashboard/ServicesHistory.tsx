import ServicesHistoryTable from "@/components/HandymanDashboard/Services/ServicesHistoryTable";
import search from "@/assets/icons/search_icon.svg";
import filter from "@/assets/icons/filter.svg";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import StatusDropdownFilter from "@/components/HandymanDashboard/StatusDropdownFilter";

export default function ServicesHistory() {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState(null);
  const statusList = ["Completed", "Processing", "Scheduled"];
  const [searchParams, setSearchParams] = useSearchParams();

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
      <ServicesHistoryTable />

      <StatusDropdownFilter
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        statusList={statusList}
        setSearchParams={setSearchParams}
      />
    </div>
  );
}
