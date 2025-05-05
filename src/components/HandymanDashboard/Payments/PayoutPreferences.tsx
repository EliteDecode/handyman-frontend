import { useRef, useState, useEffect } from "react";
import dropDown from "@/assets/icons/dropDown.svg";

export default function PayoutPreferences() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const daysList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelection = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col h-full max-h-full gap-6 px-6 py-8 rounded-lg shadow-md">
      {/* Header */}
      <div className="h-14 border-b border-[#98A2B3] text-[24px] font-merriweather font-bold">
        Customize your Payouts
      </div>

      <div className="w-full sm:w-1/2">
        <label className="block text-[#101928] sm:text-[16px] text-[14px] font-medium mb-2">
          Days
        </label>
        <div className="relative w-full" ref={dropdownRef}>
          {/* Select Box */}
          <div
            className="w-full border border-[#98A2B3] rounded-[6px] px-4 h-10 sm:h-14 flex justify-between items-center cursor-pointer"
            onClick={toggleDropdown}
          >
            <span className="text-gray-500 text-[14px]">
              {selectedDays.length > 0
                ? `${selectedDays.length} day(s) selected`
                : "Select your Working Days"}
            </span>
            <img
              src={dropDown}
              alt="dropdown"
              className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
            />
          </div>

          {/* Dropdown List */}
          {isOpen && (
            <div className="absolute top-full left-0 z-50 w-full min-w-[200px] bg-white border border-[#98A2B3] rounded-[6px] mt-1 shadow-md max-h-60 overflow-auto p-4">
              {daysList.map((day) => (
                <label
                  key={day}
                  className="flex items-center w-full gap-3 cursor-pointer h-9 hover:bg-gray-100"
                >
                  <input
                    type="checkbox"
                    className="accent-[#008080] w-5 h-5"
                    checked={selectedDays.includes(day)}
                    onChange={() => handleSelection(day)}
                  />
                  <span className="text-[16px] tracking-[2%] font-lato text-[#3C3C3C]">
                    {day}
                  </span>
                </label>
              ))}
            </div>
          )}

          <p className="text-[#008080] text-[14px] leading-5 font-lato cursor-pointer">
            Next payout in 3 days
          </p>
        </div>
      </div>
    </div>
  );
}
