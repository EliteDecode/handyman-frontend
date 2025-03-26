export default function ActiveBookings() {
  const customers = [
    {
      name: "John Doe",
      jobId: "#JD1234",
      service: "Website Development",
      status: "Pending",
    },
    {
      name: "Jane Smith",
      jobId: "#JS5678",
      service: "Graphic Design",
      status: "Pending",
    },
    {
      name: "Mike Johnson",
      jobId: "#MJ9101",
      service: "SEO Optimization",
      status: "Ongoing",
    },
  ];

  return (
    <div className="max-h-fit h-full shadow-[0px_4px_12px_0px_rgba(16,24,40,0.08)] py-8 px-6 rounded-lg flex flex-col gap-6">
      {/* Header */}
      <div className="h-14 border-b border-[#98A2B3] text-[24px] font-merriweather font-bold">
        Active Bookings
      </div>

      {customers.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-[600px] w-full border-collapse">
            {/* Table Head */}
            <thead>
              <tr className="bg-[#F9FAFB] h-[44px] text-[14px] font-medium tracking-wide font-lato text-[#191919]">
                {["CUSTOMER", "JOB ID", "SERVICES", "STATUS"].map((header) => (
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
              {customers.map(({ name, jobId, service, status }, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-100 h-[72px] text-[14px] leading-5 tracking-wide font-lato text-[#191919]"
                >
                  <td className="px-6 border-b border-[#C9CDD3]">{name}</td>
                  <td className="px-6 border-b border-[#C9CDD3]">{jobId}</td>
                  <td className="px-6 border-b border-[#C9CDD3]">{service}</td>
                  <td className="px-6 border-b border-[#C9CDD3]">
                    <div
                      className={`w-[84px] h-9 flex items-center justify-center rounded-md ${
                        status === "Completed"
                          ? "bg-green-600 text-white"
                          : status === "Pending"
                            ? "bg-[#FF950033] bg-opacity-20 text-[#FF9500]"
                            : "bg-[#C9CDD326] bg-opacity-20 text-[#3C3C3C]"
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
        <div className="h-[300px] w-full flex items-center justify-center">
          <p className="sm:max-w-[459px] max-w-[194px] w-full text-center sm:text-[24px] text-[12px] sm:eading-[32px] leading-5 tracking-[2%] font-lato text-[#3C3C3C]">
            You don’t have any bookings yet. Once your profile is verified, you
            can start accepting jobs.
          </p>
        </div>
      )}
    </div>
  );
}
