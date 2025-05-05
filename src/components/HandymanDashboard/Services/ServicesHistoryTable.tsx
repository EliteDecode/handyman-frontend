import { getPageNumbers } from "@/lib/utils";
import { useEffect, useState } from "react";
import { IoAdd } from "react-icons/io5";
import flag from "@/assets/icons/flag.svg";
import love from "@/assets/icons/love.svg";
import save from "@/assets/icons/save.svg";
import download from "@/assets/icons/download.svg";
import exportIcon from "@/assets/icons/export.svg";
import ServiceHistoryModal from "./ServiceHistoryModal";

interface Booking {
  service: string;
  dateTime: string;
  customer: string;
  location: string;
  amount: string;
  status: "Success" | "Pending" | "Failed";
}

export default function ServicesHistoryTable() {
  const dummyBookings: Booking[] = [
    {
      service: "Plumbing",
      dateTime: "2025-04-10 10:00 AM",
      customer: "John Doe",
      location: "Lagos",
      amount: "₦15,000",
      status: "Success",
    },
    {
      service: "Haircut",
      dateTime: "2025-04-11 01:30 PM",
      customer: "Jane Smith",
      location: "Abuja",
      amount: "₦5,000",
      status: "Pending",
    },
    {
      service: "Photography",
      dateTime: "2025-04-09 04:00 PM",
      customer: "Michael Johnson",
      location: "Ibadan",
      amount: "₦25,000",
      status: "Success",
    },
    {
      service: "Interior Design",
      dateTime: "2025-04-08 11:00 AM",
      customer: "Linda Okafor",
      location: "Port Harcourt",
      amount: "₦80,000",
      status: "Failed",
    },
    {
      service: "Tutoring",
      dateTime: "2025-04-07 02:00 PM",
      customer: "Daniel Ade",
      location: "Enugu",
      amount: "₦10,000",
      status: "Success",
    },
    {
      service: "Catering",
      dateTime: "2025-04-06 03:30 PM",
      customer: "Chinwe Obi",
      location: "Abeokuta",
      amount: "₦50,000",
      status: "Success",
    },
    {
      service: "Laundry",
      dateTime: "2025-04-12 09:00 AM",
      customer: "Femi Adebayo",
      location: "Ilorin",
      amount: "₦3,500",
      status: "Pending",
    },
    {
      service: "Graphic Design",
      dateTime: "2025-04-14 12:45 PM",
      customer: "Blessing Umeh",
      location: "Owerri",
      amount: "₦20,000",
      status: "Success",
    },
    {
      service: "Makeup",
      dateTime: "2025-04-15 01:15 PM",
      customer: "Toyin Lawal",
      location: "Jos",
      amount: "₦7,000",
      status: "Failed",
    },
    {
      service: "Tailoring",
      dateTime: "2025-04-13 05:00 PM",
      customer: "Ahmed Musa",
      location: "Kano",
      amount: "₦12,000",
      status: "Success",
    },
    {
      service: "Painting",
      dateTime: "2025-04-13 10:30 AM",
      customer: "Uche Nwankwo",
      location: "Calabar",
      amount: "₦35,000",
      status: "Pending",
    },
    {
      service: "Massage",
      dateTime: "2025-04-16 03:00 PM",
      customer: "Esther Adewale",
      location: "Benin City",
      amount: "₦18,000",
      status: "Success",
    },
    {
      service: "Car Wash",
      dateTime: "2025-04-16 11:00 AM",
      customer: "Yusuf Sule",
      location: "Akure",
      amount: "₦4,000",
      status: "Success",
    },
    {
      service: "Tech Support",
      dateTime: "2025-04-15 09:30 AM",
      customer: "Samuel Edet",
      location: "Uyo",
      amount: "₦22,000",
      status: "Pending",
    },
    {
      service: "Baking",
      dateTime: "2025-04-14 01:00 PM",
      customer: "Gloria Nwachukwu",
      location: "Warri",
      amount: "₦40,000",
      status: "Success",
    },
    {
      service: "Furniture Repair",
      dateTime: "2025-04-13 04:00 PM",
      customer: "Emeka Eze",
      location: "Onitsha",
      amount: "₦28,000",
      status: "Failed",
    },
    {
      service: "Nail Art",
      dateTime: "2025-04-12 11:30 AM",
      customer: "Zainab Bello",
      location: "Katsina",
      amount: "₦6,000",
      status: "Success",
    },
    {
      service: "Gardening",
      dateTime: "2025-04-11 02:00 PM",
      customer: "Chukwudi Okoro",
      location: "Makurdi",
      amount: "₦10,500",
      status: "Success",
    },
    {
      service: "Event Planning",
      dateTime: "2025-04-10 03:45 PM",
      customer: "Ijeoma Ani",
      location: "Lokoja",
      amount: "₦70,000",
      status: "Pending",
    },
    {
      service: "DJ Service",
      dateTime: "2025-04-09 06:00 PM",
      customer: "Tunde Balogun",
      location: "Minna",
      amount: "₦60,000",
      status: "Success",
    },
  ];

  const itemsPerPage = 5;

  const totalPages = Math.ceil(dummyBookings.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);

  const paginatedCustomers = dummyBookings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    if (openModalIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModalIndex]);

  return (
    <div className="flex flex-col w-full h-full gap-8">
      <div className="max-h-fit h-full shadow-[0px_4px_12px_0px_rgba(16,24,40,0.08)] py-8 px-6 rounded-lg flex flex-col gap-6">
        {/* Header */}
        <div className="h-14 border-b border-[#98A2B3] font-merriweather flex items-center justify-between">
          <h1 className="text-[16px] leading-6 md:text-[24px] md:leading-[100%] font-bold">
            Service History
          </h1>

          <div className="flex items-center gap-6">
            <button className="w-[107px] h-9 bg-[#D0D5DD] rounded-lg flex items-center justify-center gap-2 px-3">
              <img src={download} alt="download" />
              <p className="text-white text-[12px] leading-[14px] font-lato font-semibold">
                Download
              </p>
            </button>

            <button className="w-[107px] h-9 bg-[#D0D5DD] rounded-lg flex items-center justify-center gap-2 px-3">
              <img src={exportIcon} alt="download" />
              <p className="text-white text-[12px] leading-[14px] font-lato font-semibold">
                Export
              </p>
            </button>
          </div>
        </div>

        {paginatedCustomers.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-[1000px] w-full border-collapse overflow-hidden">
              {/* Table Head */}
              <thead>
                <tr className="bg-[#F9FAFB] h-[44px] text-[14px] font-medium tracking-wide font-lato text-[#191919]">
                  {[
                    "SERVICE",
                    "DATE & TIME",
                    "CUSTOMER NAME",
                    "LOCATION",
                    "AMOUNT",
                    "PAYMENT STATUS",
                    "ACTION",
                  ].map((header) => (
                    <th
                      key={header}
                      className="px-6 text-left border-b border-[#C9CDD3]"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {paginatedCustomers.map(
                  (
                    { customer, service, dateTime, location, amount, status },
                    index
                  ) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-100 h-[72px] text-[14px] leading-5 tracking-wide font-lato text-[#191919] relative"
                    >
                      <td
                        className="px-6 border-b border-[#C9CDD3] cursor-pointer"
                        onClick={() => setOpenModalIndex(index)}
                      >
                        {service}
                      </td>
                      <td className="px-6 border-b border-[#C9CDD3]">
                        {dateTime}
                      </td>
                      <td className="px-6 border-b border-[#C9CDD3]">
                        {customer}
                      </td>
                      <td className="px-6 border-b border-[#C9CDD3]">
                        {location}
                      </td>
                      <td className="px-6 border-b border-[#C9CDD3]">
                        {amount}
                      </td>
                      <td className="px-6 border-b border-[#C9CDD3]">
                        <div
                          className={`w-[84px] h-9 flex items-center justify-center rounded-md ${
                            status === "Success"
                              ? "bg-[#0080800A] text-[#008080] bg-opacity-[4%]"
                              : status === "Pending"
                                ? "bg-[#FF950033] bg-opacity-20 text-[#FF9500]"
                                : "bg-[#FFD8D6] text-[#FF3B30]"
                          }`}
                        >
                          {status}
                        </div>
                      </td>
                      <td className="px-6 border-b border-[#C9CDD3]">
                        <div className="flex items-center gap-[26px]">
                          <img
                            src={love}
                            alt="..."
                            className="cursor-pointer"
                          />

                          <img
                            src={save}
                            alt="..."
                            className="cursor-pointer"
                          />

                          <img
                            src={flag}
                            alt="..."
                            className="cursor-pointer"
                          />
                        </div>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="flex items-center justify-center w-full h-screen">
            <p className="sm:max-w-[459px] max-w-[194px] w-full text-center sm:text-[24px] text-[12px] sm:eading-[32px] leading-5 tracking-[2%] font-lato text-[#3C3C3C]">
              No upcoming payments at this time.
            </p>
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <div className="w-full h-[61px] border-t border-[#C9CDD3] flex items-center justify-between">
          {/* Previous Button */}
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className={`w-[98px] h-9 rounded-[8px] flex items-center justify-center gap-2 flex-row ${
              currentPage === 1
                ? "bg-[#D0D5DD] opacity-50 cursor-not-allowed"
                : "bg-[#008080] cursor-pointer "
            }`}
            disabled={currentPage === 1}
          >
            <IoAdd size={20} color="white" />
            <p className="text-[12px] leading-[14px] font-semibold font-lato text-[#FFFFFF]">
              Previous
            </p>
          </button>

          {/* Pagination Buttons */}
          <div className="flex items-center justify-center gap-2">
            {getPageNumbers(totalPages, currentPage).map((page, index) =>
              page === "..." ? (
                <span key={index} className="text-[#98A2B3] px-2">
                  ...
                </span>
              ) : (
                <button
                  key={index}
                  onClick={() => setCurrentPage(page as number)}
                  className={`w-[24px] h-[24px] rounded-[6px] text-[12px] leading-[20px] tracking-[2%] font-medium font-lato ${
                    currentPage === page
                      ? "bg-[#008080] text-white"
                      : "bg-white text-[#98A2B3]"
                  }`}
                >
                  {page}
                </button>
              )
            )}
          </div>

          {/* Next Button */}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            className={`w-[98px] h-9 rounded-[8px] flex items-center justify-center gap-2 flex-row ${
              currentPage === totalPages
                ? "bg-[#D0D5DD] opacity-50 cursor-not-allowed"
                : "bg-[#008080]  cursor-pointer"
            }`}
            disabled={currentPage === totalPages}
          >
            <IoAdd size={20} color="white" />
            <p className="text-[12px] leading-[14px] font-semibold font-lato text-[#FFFFFF]">
              Next
            </p>
          </button>
        </div>
      )}

      {openModalIndex !== null && (
        <ServiceHistoryModal
          isOpen={openModalIndex !== null}
          onClose={() => setOpenModalIndex(null)}
          booking={paginatedCustomers[openModalIndex]}
        />
      )}
    </div>
  );
}
