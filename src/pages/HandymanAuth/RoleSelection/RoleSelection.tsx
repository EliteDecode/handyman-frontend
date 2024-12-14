import React, { useState, FormEvent } from "react";
import userImage from "@/assets/images/Frame 1597882487.png";
import handymanImage from "@/assets/images/Frame 1597882487 (1).png";
import { useNavigate } from "react-router-dom";

type Role = "user" | "handyman";

const RoleSelection = () => {
  const [selectedRole, setSelectedRole] = useState<"user" | "handyman" | null>(
    "user"
  );
  const navigate = useNavigate();

  const handleSelect = (role: "user" | "handyman"): void => {
    setSelectedRole(role);
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    if (selectedRole === "user") {
      navigate("/auth/user-signup");
    } else if (selectedRole === "handyman") {
      navigate("/auth/handyman-signup");
    } else {
      alert("Please select a role to continue.");
    }
  };

  const getCardClasses = (role: Role) =>
    `flex flex-col items-center justify-center text-center max-w-[370px] w-full sm:gap-8 gap-2 cursor-pointer ${
      selectedRole === role
        ? "bg-[#008080] bg-opacity-10 ring-4 ring-[#008080] rounded-lg"
        : ""
    }`;

  return (
    <div className="flex flex-col items-center justify-center max-w-[791px] w-full mx-auto sm:mt-[120px] sm:mb-[150px] mt-8 mb-7 px-6">
      <div className="flex flex-col items-center gap-2 text-center sm:gap-6">
        <h1 className="sm:text-[40px] text-[16px] sm:leading-[50.28px] leading-6 font-bold text-[#191919] sm:px-24 font-merriweather">
          How would you like to use{" "}
          <span className="text-[#008080]">Handyman</span>
        </h1>
        <p className="sm:text-[24px] text-[12px] leading-[32px] font-medium font-lato text-[#3C3C3C]">
          Select an option on how to use handyman
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center sm:mt-20 mt-4 sm:gap-[54px] gap-[52px]"
      >
        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
          {/* User Option */}
          <div
            onClick={() => handleSelect("user")}
            className={getCardClasses("user")}
            aria-pressed={selectedRole === "user"}
          >
            <div className="px-12 py-6 shadow-custom1 rounded-3xl">
              <img src={userImage} alt="User" />
            </div>
            <p className="sm:text-[24px] text-[12px] leading-4 sm:leading-8 text-[#3C3C3C] font-medium font-lato max-w-[244px]  w-full  sm:max-w-[370px] px-0">
              Connect with skilled handymen for any home improvement need.
            </p>
          </div>

          {/* Handyman Option */}
          <div
            onClick={() => handleSelect("handyman")}
            className={getCardClasses("handyman")}
            aria-pressed={selectedRole === "handyman"}
          >
            <div className="px-12 py-6 shadow-custom1 rounded-3xl">
              <img src={handymanImage} alt="Handyman" />
            </div>
            <p className="sm:text-[24px] text-[12px] leading-4 sm:leading-8 text-[#3C3C3C] font-medium font-lato px-10">
              Connect with customers seeking your expertise.
            </p>
          </div>
        </div>

        <button
          type="submit"
          className="max-w-[384px] w-full h-14 bg-[#008080] rounded-[8px] text-[#FFFFFF] font-semibold text-[18px] leading-6 font-lato"
          disabled={!selectedRole}
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default RoleSelection;
