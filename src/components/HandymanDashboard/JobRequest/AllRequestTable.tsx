import aboutInfo from "@/assets/images/about-info.jpg";
import RequestRow from "./RequestRow";
import { IoAdd } from "react-icons/io5";
import { getPageNumbers } from "@/lib/utils";
import { useState } from "react";

export default function AllRequestTable() {
  const data = [
    {
      customer: "Amina Ikechukwu",
      location: "123 Palm Street, Lekki Phase 1, Lagos",
      dateTime: "11/05/2024 03:00PM",
      description:
        "Plumbing repair - The tap at my backyard is leaking and hard to switch off.",
      status: "Accepted",
      image: aboutInfo,
    },
    {
      customer: "John Doe",
      location: "7B Allen Avenue, Ikeja",
      dateTime: "13/05/2024 10:00AM",
      description:
        "Electrical work - Faulty sockets need fixing in the living room.",
      status: "Pending",
      image: aboutInfo,
    },
    {
      customer: "Sarah Okechukwu",
      location: "5 Admiralty Way, Lekki",
      dateTime: "14/05/2024 01:30PM",
      description: "Carpentry - Kitchen cabinet door is broken.",
      status: "Declined",
      image: aboutInfo,
    },
    {
      customer: "Ahmed Musa",
      location: "21 Banana Island Road, Ikoyi",
      dateTime: "15/05/2024 09:00AM",
      description: "AC repair - AC unit not cooling properly.",
      status: "Accepted",
      image: aboutInfo,
    },
    {
      customer: "Blessing Adebayo",
      location: "11 Opebi Link Road, Ikeja",
      dateTime: "15/05/2024 02:00PM",
      description: "Painting - Repaint the living room and hallway.",
      status: "Pending",
      image: aboutInfo,
    },
    {
      customer: "Chidi Nwosu",
      location: "3 Olowu Street, Yaba",
      dateTime: "16/05/2024 11:00AM",
      description: "Tiling - Replace broken bathroom tiles.",
      status: "Accepted",
      image: aboutInfo,
    },
    {
      customer: "Grace Johnson",
      location: "8A Awolowo Way, Ikoyi",
      dateTime: "16/05/2024 03:30PM",
      description: "Plumbing - Fix shower leakage in master bathroom.",
      status: "Declined",
      image: aboutInfo,
    },
    {
      customer: "Ibrahim Adamu",
      location: "17 Sanusi Fafunwa Street, VI",
      dateTime: "17/05/2024 01:00PM",
      description: "Electrical - Install new ceiling fans in 3 rooms.",
      status: "Accepted",
      image: aboutInfo,
    },
    {
      customer: "Janet Okoro",
      location: "22 Adeniran Ogunsanya, Surulere",
      dateTime: "17/05/2024 04:00PM",
      description: "Cleaning - Post-renovation home cleaning.",
      status: "Pending",
      image: aboutInfo,
    },
    {
      customer: "Emeka Obi",
      location: "10 Oba Akinjobi Street, GRA Ikeja",
      dateTime: "18/05/2024 09:30AM",
      description: "Generator repair - Generator not powering on.",
      status: "Accepted",
      image: aboutInfo,
    },
    {
      customer: "Tosin Olabode",
      location: "30A Adeola Odeku Street, VI",
      dateTime: "18/05/2024 12:00PM",
      description: "Furniture assembly - Assemble new office desk.",
      status: "Pending",
      image: aboutInfo,
    },
    {
      customer: "Ngozi Eze",
      location: "18 Bourdillon Road, Ikoyi",
      dateTime: "19/05/2024 10:30AM",
      description: "Window repair - Replace broken glass pane.",
      status: "Declined",
      image: aboutInfo,
    },
    {
      customer: "Daniel Ogun",
      location: "12 Herbert Macaulay Way, Sabo",
      dateTime: "19/05/2024 03:00PM",
      description: "Painting - Touch up exterior paintwork.",
      status: "Accepted",
      image: aboutInfo,
    },
    {
      customer: "Patience Ojo",
      location: "6B Oregun Road, Ikeja",
      dateTime: "20/05/2024 01:00PM",
      description: "AC maintenance - Clean and refill gas.",
      status: "Pending",
      image: aboutInfo,
    },
    {
      customer: "Femi Ogundele",
      location: "15 Alhaji Masha Road, Surulere",
      dateTime: "20/05/2024 04:30PM",
      description: "Lighting - Install chandelier in dining area.",
      status: "Accepted",
      image: aboutInfo,
    },
    {
      customer: "Yetunde Balogun",
      location: "2B Glover Road, Ikoyi",
      dateTime: "21/05/2024 10:00AM",
      description: "Door replacement - Replace main entrance door.",
      status: "Declined",
      image: aboutInfo,
    },
    {
      customer: "Sani Usman",
      location: "9A Mobolaji Bank Anthony, Ikeja",
      dateTime: "21/05/2024 02:00PM",
      description: "Water heater - Heater not turning on.",
      status: "Pending",
      image: aboutInfo,
    },
    {
      customer: "Ruth Nwachukwu",
      location: "16 Ozumba Mbadiwe, VI",
      dateTime: "22/05/2024 11:00AM",
      description: "General repairs - Fix broken drawers and switches.",
      status: "Accepted",
      image: aboutInfo,
    },
    {
      customer: "Segun Adebisi",
      location: "25 Isaac John Street, GRA Ikeja",
      dateTime: "22/05/2024 03:30PM",
      description: "Gate welding - Reinforce the front gate.",
      status: "Pending",
      image: aboutInfo,
    },
    {
      customer: "Chinyere Okafor",
      location: "4B Bishop Aboyade Cole, VI",
      dateTime: "23/05/2024 09:00AM",
      description: "Cleaning - Deep clean 4-bedroom duplex.",
      status: "Accepted",
      image: aboutInfo,
    },
  ];

  const itemsPerPage = 10;

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedCustomers = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="overflow-x-auto">
      <div className="sm:min-w-[1300px] w-full">
        {/* Table Header */}
        <div className="sm:flex hidden items-center justify-between h-[44px] bg-[#F9FAFB] border-b border-[#C9CDD3] text-[14px] leading-5 font-medium tracking-wide font-lato text-[#191919]">
          <p className="max-w-[213px] w-full px-6 py-3">CUSTOMER’S DETAILS</p>
          <p className="max-w-[210px] w-full pl-6 py-3">LOCATION</p>
          <p className="max-w-[157px] w-full pl-6 py-3">DATE & TIME</p>
          <p className="max-w-[239px] w-full pl-6 py-3">SERVICE DESCRIPTION</p>
          <p className="max-w-[147px] w-full text-center py-3">STATUS</p>
          <p className="max-w-[147px] w-full pl-6 py-3">DETAILS</p>
        </div>

        {/* Table Rows */}
        {paginatedCustomers.map((item, index) => (
          <RequestRow key={index} {...item} />
        ))}
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
