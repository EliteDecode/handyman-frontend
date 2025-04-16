import ActiveBookings from "@/components/HandymanDashboard/Dashboard/ActiveBookings";
import CustomDateCalendar from "@/components/HandymanDashboard/Dashboard/CustomDateCalendar";
import EarningsChart from "@/components/HandymanDashboard/Dashboard/EarningsChart";
import InfoCards from "@/components/HandymanDashboard/Dashboard/InfoCards";
import PendingVerification from "@/components/HandymanDashboard/Dashboard/PendingVerification";
import React from "react";

const cardData = [
  {
    title: "Total Earnings",
    value: "200,000",
    currrency: false,
    color: "#008080",
  },
  {
    title: "Pending Requests",
    value: "200,000",
    currrency: false,
    color: "#E8B931",
  },
  {
    title: "Total Earnings",
    value: "200,000",
    currrency: true,
    color: "#34C759",
  },
  {
    title: "Available Balance",
    value: "200,000",
    currrency: true,
    color: "#B3261E",
  },
];

export default function Dashboard() {
  return (
    <div className="flex flex-col w-full gap-8 p-8 text-black">
      <PendingVerification />
      <div className="flex flex-col w-full gap-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {cardData.map((card, index) => (
            <InfoCards key={index} {...card} />
          ))}
        </div>

        <div className="flex flex-col items-start gap-6 lg:flex-row">
          <div className="w-full">
            <ActiveBookings />
          </div>

          <div>
            <CustomDateCalendar />
          </div>
        </div>

        <EarningsChart />
      </div>
    </div>
  );
}
