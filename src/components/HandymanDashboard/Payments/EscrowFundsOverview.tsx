import React from "react";

export default function EscrowFundsOverview() {
  const customers = [
    {
      jobId: "#WD1234",
      name: "Alice Brown",
      service: "Website Redesign",
      location: "New York, USA",
      amount: "₦500,000",
    },
    {
      jobId: "#GD5678",
      name: "David Wilson",
      service: "Logo & Branding",
      location: "London, UK",
      amount: "₦250,000",
    },
    {
      jobId: "#SEO9101",
      name: "Sophia Martinez",
      service: "SEO Consultation",
      location: "Toronto, Canada",
      amount: "₦150,000",
    },
  ];

  return (
    <div className="max-h-fit h-full shadow-[0px_4px_12px_0px_rgba(16,24,40,0.08)] py-8 px-6 rounded-lg flex flex-col gap-6">
      {/* Header */}
      <div className="h-14 border-b border-[#98A2B3] text-[24px] font-merriweather font-bold">
        Funds Held in Escrow
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-[600px] w-full border-collapse">
          {/* Table Head */}
          <thead>
            <tr className="bg-[#F9FAFB] h-[44px] text-[14px] font-medium tracking-wide font-lato text-[#191919]">
              {["JOB ID", "CUSTOMER", "SERVICE", "LOCATION", "AMOUNT"].map(
                (header) => (
                  <th
                    key={header}
                    className="px-6 text-left border-b border-[#C9CDD3]"
                  >
                    {header}
                  </th>
                )
              )}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {customers.map(
              ({ jobId, name, service, location, amount }, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-100 h-[72px] text-[14px] leading-5 tracking-wide font-lato text-[#191919]"
                >
                  <td className="px-6 border-b border-[#C9CDD3]">{jobId}</td>
                  <td className="px-6 border-b border-[#C9CDD3]">{name}</td>
                  <td className="px-6 border-b border-[#C9CDD3]">{service}</td>
                  <td className="px-6 border-b border-[#C9CDD3]">{location}</td>
                  <td className="px-6 border-b border-[#C9CDD3]">{amount}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
