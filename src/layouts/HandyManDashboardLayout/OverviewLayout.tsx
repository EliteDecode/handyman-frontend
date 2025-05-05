import { useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

export default function OverviewLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  // Redirect to /handyman/payments/overview if the user enters /handyman/payments
  useEffect(() => {
    if (location.pathname === "/handyman/payments") {
      navigate("/handyman/payments/overview", { replace: true });
    }
  }, [location.pathname, navigate]);

  return (
    <div className="w-full p-4 text-black">
      <div className="w-full overflow-x-auto">
        <div className="flex items-center gap-[18px] md:mb-14 mb-6 min-w-[200px] w-full whitespace-nowrap">
          {[
            { to: "/handyman/payments/overview", label: "Overview" },
            {
              to: "/handyman/payments/transaction-history",
              label: "Transaction History",
            },
            {
              to: "/handyman/payments/upcoming-payouts",
              label: "Upcoming Payouts",
            },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`w-fit h-[40px] px-4 flex items-center justify-center rounded-[8px] md:text-[20px] text-[14px] md:leading-[24px] leading-[100%] font-lato font-semibold transition-all duration-300
              ${
                location.pathname.startsWith(to)
                  ? "bg-[#008080] text-white"
                  : "bg-gray-200 text-[#008080] hover:bg-[#008080]/20"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
}
