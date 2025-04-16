import React, { useEffect, useState } from "react";
import OverViewCard from "../../components/HandymanDashboard/Payments/OverViewCard";
import EscrowFundsOverview from "../../components/HandymanDashboard/Payments/EscrowFundsOverview";
import PayoutPreferences from "../../components/HandymanDashboard/Payments/PayoutPreferences";
import WithdrawModal from "@/components/HandymanDashboard/Overview/WithdrawModal";

export default function Overview() {
  const cardData = [
    {
      amount: "₦200,000",
      name: "All Transactions",
      withdraw: false,
      disabledWithdraw: true,
    },
    {
      amount: "₦200,000",
      name: "Escrow Balance",
      withdraw: true,
      disabledWithdraw: true,
    },
    {
      amount: "₦200,000",
      name: "Available Balance",
      withdraw: true,
      disabledWithdraw: false,
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWithdrawClick = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "hidden";
    };
  }, [isModalOpen]);

  return (
    <div className="flex flex-col h-full gap-6 overflow-y-scroll">
      <div className="w-full h-full overflow-x-auto">
        <div className="flex justify-between gap-6 min-w-[600px] whitespace-nowrap h-full">
          {cardData.map((data, index) => (
            <OverViewCard
              key={index}
              amount={data.amount}
              name={data.name}
              withdraw={data.withdraw}
              disabledWithdraw={data.disabledWithdraw}
              onWithdraw={handleWithdrawClick}
            />
          ))}
        </div>
      </div>

      <EscrowFundsOverview />
      <PayoutPreferences />

      {isModalOpen && <WithdrawModal setIsModalOpen={setIsModalOpen} />}
    </div>
  );
}
