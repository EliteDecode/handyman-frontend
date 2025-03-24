import DashboardCard from "@/components/CustomerDashboard/DashboardCard";
import DashboardInfoCard from "@/components/CustomerDashboard/DashboardInfoCard";
import DashboardServices from "@/components/CustomerDashboard/DashboardServices";
import DashboardTeleconsultant from "@/components/CustomerDashboard/DashboardTeleconsultant";

const dashboardCardInfo = [
  {
    bg: "#008080",
    amount: 12,
    title: "All Bookings",
  },
  {
    bg: "#E8B931",
    amount: 12,
    title: "Ongoing",
  },
  {
    bg: "#34C759",
    amount: 12,
    title: "Completed",
  },
  {
    bg: "#B3261E",
    amount: 12,
    title: "Cancelled",
  },
];

const Dashboard = () => {
  return (
    <section className="lg:p-8 p-6 w-full">
      <DashboardInfoCard />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(175px,2fr))] sm:grid-cols-[repeat(auto-fit,minmax(255px,1fr))] gap-6 mt-6 ">
        {dashboardCardInfo.map((val, i) => (
          <DashboardCard
            key={i}
            bg={val.bg}
            amount={val.amount}
            title={val.title}
          />
        ))}
      </div>

      <DashboardTeleconsultant />

      <DashboardServices />
    </section>
  );
};

export default Dashboard;
