import { getPageNumbers } from "@/lib/utils";
import { useState } from "react";
import { IoAdd } from "react-icons/io5";

export default function UpcomingPayoutsTable() {
  const customers = [
    {
      date: "2024-06-06",
      amount: "$500",
      status: "Pending",
    },

    {
      date: "2024-06-05",
      amount: "$300",
      status: "Pending",
    },
    {
      date: "2024-06-01",
      amount: "$250",
      status: "Failed",
    },
    {
      date: "2024-05-30",
      amount: "$400",
      status: "Success",
    },
    {
      date: "2024-05-28",
      amount: "$150",
      status: "Success",
    },
    {
      date: "2024-05-25",
      amount: "$200",
      status: "Pending",
    },
    {
      date: "2024-05-20",
      amount: "$350",

      status: "Success",
    },
    {
      date: "2024-05-18",
      amount: "$600",
      status: "Failed",
    },
    {
      date: "2024-05-15",
      amount: "$480",
      status: "Success",
    },
    {
      date: "2024-05-12",
      amount: "$275",
      status: "Pending",
    },
  ];
  const itemsPerPage = 5;

  const totalPages = Math.ceil(customers.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedCustomers = customers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex flex-col w-full h-full gap-8">
      <div className="max-h-fit h-full shadow-[0px_4px_12px_0px_rgba(16,24,40,0.08)] py-8 px-6 rounded-lg flex flex-col gap-6">
        {/* Header */}
        <div className="h-14 border-b border-[#98A2B3] text-[24px] font-merriweather font-bold">
          Upcoming Payouts
        </div>

        {paginatedCustomers.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-[600px] w-full border-collapse">
              {/* Table Head */}
              <thead>
                <tr className="bg-[#F9FAFB] h-[44px] text-[14px] font-medium tracking-wide font-lato text-[#191919]">
                  {["SCHEDULED DATE", "AMOUNT", "STATUS"].map((header) => (
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
                {paginatedCustomers.map(({ date, amount, status }, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-100 h-[72px] text-[14px] leading-5 tracking-wide font-lato text-[#191919]"
                  >
                    <td className="px-6 border-b border-[#C9CDD3]">{date}</td>
                    <td className="px-6 border-b border-[#C9CDD3]">{amount}</td>

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
                  </tr>
                ))}
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
    </div>
  );
}
