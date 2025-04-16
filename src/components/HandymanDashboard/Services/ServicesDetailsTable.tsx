import { getPageNumbers } from "@/lib/utils";
import { useState } from "react";
import { IoAdd } from "react-icons/io5";
import threeVerticalDots from "@/assets/icons/threeVerticalDots.svg";
import { Popover } from "@mui/material";
import { Link } from "react-router-dom";

export default function ServicesDetailsTable() {
  const dummyTableData = [
    {
      customerName: "John Doe",
      service: "AC Repair",
      dateTime: "2024-06-10 10:30 AM",
      location: "Ikeja, Lagos",
      jobStatus: "Completed",
      action: "View",
    },
    {
      customerName: "Jane Smith",
      service: "Washing Machine Fix",
      dateTime: "2024-06-11 2:00 PM",
      location: "Lekki, Lagos",
      jobStatus: "In Progress",
      action: "Edit",
    },
    {
      customerName: "Michael Johnson",
      service: "TV Mounting",
      dateTime: "2024-06-12 9:00 AM",
      location: "Yaba, Lagos",
      jobStatus: "Pending",
      action: "View",
    },
    {
      customerName: "Sarah Williams",
      service: "Electrical Wiring",
      dateTime: "2024-06-13 4:45 PM",
      location: "Victoria Island",
      jobStatus: "Completed",
      action: "View",
    },
    {
      customerName: "David Brown",
      service: "Generator Servicing",
      dateTime: "2024-06-14 11:00 AM",
      location: "Surulere, Lagos",
      jobStatus: "Cancelled",
      action: "Edit",
    },
    {
      customerName: "Emily Davis",
      service: "Inverter Installation",
      dateTime: "2024-06-15 3:30 PM",
      location: "Ogba, Lagos",
      jobStatus: "In Progress",
      action: "Edit",
    },
    {
      customerName: "Daniel Miller",
      service: "Home Painting",
      dateTime: "2024-06-16 8:30 AM",
      location: "Ajah, Lagos",
      jobStatus: "Completed",
      action: "View",
    },
    {
      customerName: "Olivia Wilson",
      service: "Plumbing",
      dateTime: "2024-06-17 10:00 AM",
      location: "Magodo, Lagos",
      jobStatus: "Pending",
      action: "View",
    },
    {
      customerName: "James Anderson",
      service: "Roof Repair",
      dateTime: "2024-06-18 1:15 PM",
      location: "Iyana Ipaja",
      jobStatus: "In Progress",
      action: "Edit",
    },
    {
      customerName: "Sophia Taylor",
      service: "Security Camera Setup",
      dateTime: "2024-06-19 12:00 PM",
      location: "Ikeja GRA",
      jobStatus: "Completed",
      action: "View",
    },
    {
      customerName: "Benjamin Thomas",
      service: "Door Lock Fix",
      dateTime: "2024-06-20 9:45 AM",
      location: "Maryland, Lagos",
      jobStatus: "Pending",
      action: "Edit",
    },
    {
      customerName: "Chloe Martinez",
      service: "Window Replacement",
      dateTime: "2024-06-21 2:30 PM",
      location: "Ojodu Berger",
      jobStatus: "In Progress",
      action: "View",
    },
    {
      customerName: "Samuel Jackson",
      service: "Toilet Unclogging",
      dateTime: "2024-06-22 5:00 PM",
      location: "Ikoyi, Lagos",
      jobStatus: "Completed",
      action: "View",
    },
    {
      customerName: "Grace Harris",
      service: "Floor Tiling",
      dateTime: "2024-06-23 7:30 AM",
      location: "Ajao Estate",
      jobStatus: "Cancelled",
      action: "Edit",
    },
    {
      customerName: "Elijah Lewis",
      service: "Interior Design",
      dateTime: "2024-06-24 3:00 PM",
      location: "Festac Town",
      jobStatus: "Completed",
      action: "View",
    },
    {
      customerName: "Isabella Walker",
      service: "Ceiling Fan Installation",
      dateTime: "2024-06-25 10:30 AM",
      location: "Ilupeju, Lagos",
      jobStatus: "In Progress",
      action: "View",
    },
    {
      customerName: "Logan Young",
      service: "Kitchen Cabinet Fix",
      dateTime: "2024-06-26 12:15 PM",
      location: "Ojota, Lagos",
      jobStatus: "Pending",
      action: "Edit",
    },
    {
      customerName: "Zoe Hall",
      service: "Water Heater Repair",
      dateTime: "2024-06-27 1:45 PM",
      location: "Shomolu, Lagos",
      jobStatus: "Completed",
      action: "View",
    },
    {
      customerName: "Henry Allen",
      service: "Garage Door Setup",
      dateTime: "2024-06-28 4:20 PM",
      location: "Agege, Lagos",
      jobStatus: "In Progress",
      action: "Edit",
    },
    {
      customerName: "Mia Scott",
      service: "Wall Cracks Repair",
      dateTime: "2024-06-29 11:10 AM",
      location: "Bariga, Lagos",
      jobStatus: "Pending",
      action: "View",
    },
  ];

  const itemsPerPage = 5;

  const totalPages = Math.ceil(dummyTableData.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const paginatedCustomers = dummyTableData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex flex-col w-full h-full gap-8">
      <div className="max-h-fit h-full shadow-[0px_4px_12px_0px_rgba(16,24,40,0.08)] py-8 px-6 rounded-lg flex flex-col gap-6">
        {/* Header */}
        <div className="h-14 border-b border-[#98A2B3] text-[24px] font-merriweather font-bold">
          Service Details
        </div>

        {paginatedCustomers.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-[600px] w-full border-collapse overflow-hidden">
              {/* Table Head */}
              <thead>
                <tr className="bg-[#F9FAFB] h-[44px] text-[14px] font-medium tracking-wide font-lato text-[#191919]">
                  {[
                    "CUSTOMER NAME",
                    "SERVICE",
                    "DATE & TIME",
                    "LOCATION",
                    "JOB STATUS",
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
                    {
                      customerName,
                      service,
                      dateTime,
                      location,
                      jobStatus,
                      action,
                    },
                    index
                  ) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-100 h-[72px] text-[14px] leading-5 tracking-wide font-lato text-[#191919] relative"
                    >
                      <td className="px-6 border-b border-[#C9CDD3]">
                        <Link to={`/handyman/services/${index}`}>
                          {customerName}
                        </Link>
                      </td>
                      <td className="px-6 border-b border-[#C9CDD3]">
                        {service}
                      </td>
                      <td className="px-6 border-b border-[#C9CDD3]">
                        {dateTime}
                      </td>
                      <td className="px-6 border-b border-[#C9CDD3]">
                        {location}
                      </td>
                      <td className="px-6 border-b border-[#C9CDD3]">
                        <div
                          className={`w-[84px] h-9 flex items-center justify-center rounded-md ${
                            jobStatus === "Completed"
                              ? "bg-[#0080800A] text-[#008080] bg-opacity-[4%]"
                              : jobStatus === "Pending"
                                ? "bg-[#FF950033] bg-opacity-20 text-[#FF9500]"
                                : "bg-[#3C3C3C33] text-[#3C3C3C]"
                          }`}
                        >
                          {jobStatus}
                        </div>
                      </td>
                      <td className="px-6 border-b border-[#C9CDD3] ">
                        <img
                          src={threeVerticalDots}
                          alt="..."
                          className="cursor-pointer"
                          onClick={(e) => {
                            setOpenModalIndex((prev) =>
                              prev === index ? null : index
                            );
                            setAnchorEl(e.currentTarget);
                          }}
                        />

                        <Popover
                          open={openModalIndex === index}
                          anchorEl={openModalIndex === index ? anchorEl : null}
                          onClose={() => setOpenModalIndex(null)}
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                          }}
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                          }}
                          PaperProps={{
                            sx: {
                              width: 240,
                              borderRadius: 2,
                              p: 1,
                            },
                          }}
                        >
                          <button className="w-full px-4 text-sm text-[#101928] text-left h-9 hover:bg-gray-100">
                            Arrived
                          </button>
                          <button className="w-full px-4 text-sm text-[#101928] text-left h-9 hover:bg-gray-100">
                            In Progress
                          </button>
                          <button className="w-full px-4 text-sm text-[#101928] text-left h-9 hover:bg-gray-100">
                            Completed
                          </button>
                        </Popover>
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
    </div>
  );
}
