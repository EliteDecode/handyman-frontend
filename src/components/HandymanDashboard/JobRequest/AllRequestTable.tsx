import aboutInfo from "@/assets/images/about-info.jpg";
import RequestRow from "./RequestRow";

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
      status: "Completed",
      image: aboutInfo,
    },
  ];

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
        {data.map((item, index) => (
          <RequestRow key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
