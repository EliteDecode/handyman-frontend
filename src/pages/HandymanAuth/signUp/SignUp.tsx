import inbox from "@/assets/icons/inbox.svg";
import dropDown from "@/assets/icons/dropDown.svg";
import lock from "@/assets/icons/lock.svg";
import hidePassword from "@/assets/icons/hidePassword.svg";
import { useState } from "react";
import SignUpSuccessful from "../modals/SignUpSucessful";

const statesAndLGAs = {
  Lagos: ["Ikeja", "Ikorodu", "Epe", "Badagry"],
  Abuja: ["Gwagwalada", "Kuje", "Bwari", "Abaji"],
  Kano: ["Dala", "Gwale", "Fagge", "Tarauni"],
  // Add other states and LGAs here
};

const SignUp = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [selectedState, setSelectedState] = useState<string>("");
  const [lgas, setLGAs] = useState<string[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const state = event.target.value;
    setSelectedState(state);
    setLGAs(statesAndLGAs[state] || []);
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    handleOpenModal();
  };

  return (
    <div className="px-6">
      <div className="max-w-[996px] w-full border-[#D0D5DD] border mx-auto sm:mt-[120px] sm:mb-[115px] my-8 shadow-custom2 rounded-xl sm:p-8 p-6">
        <div className="flex flex-col gap-4">
          <h1 className="text-[#008080] text-[16px] sm:text-[40px] leading-6 sm:leading-[50.28px] font-merriweather font-bold">
            Create an account
          </h1>
          <p className="text-[#3C3C3C] text-[12px] sm:text-[18px] sm:leading-[30px] leading-5">
            Already have an account?{" "}
            <span className="text-[#008080]">Sign in</span>
          </p>
        </div>

        <form className="flex flex-col gap-4 mt-6" onSubmit={handleSubmit}>
          <div className="flex flex-col w-full gap-4 sm:gap-6 sm:flex-row">
            <div className="flex flex-col w-full gap-1 font-lato">
              <label className="sm:text-[16px] text-[14px] sm:leading-6 leading-[16.8px] font-medium text-[#101928]">
                First name
              </label>
              <input
                className="sm:max-w-[453px] sm:h-14 h-9 w-full border-[#98A2B3] border rounded-[6px] sm:px-4 px-3 sm:placeholder:text-[14px] placeholder:text-[12px] sm:placeholder:leading-[16.8px] placeholder:leading-5 sm:text-[14px] text-[12px] sm:leading-[16.8px] leading-5 focus:outline-none focus:border-2 focus:border-[#008080]"
                type="text"
                placeholder="Enter your first name"
              />
            </div>

            <div className="flex flex-col w-full gap-1 font-lato">
              <label className="sm:text-[16px] text-[14px] sm:leading-6 leading-[16.8px] font-medium text-[#101928]">
                Last name
              </label>
              <input
                className="sm:max-w-[453px] sm:h-14 h-9 w-full border-[#98A2B3] border rounded-[6px] sm:px-4 px-3 sm:placeholder:text-[14px] placeholder:text-[12px] sm:placeholder:leading-[16.8px] placeholder:leading-5 sm:text-[14px] text-[12px] sm:leading-[16.8px] leading-5 focus:outline-none focus:border-2 focus:border-[#008080]"
                type="text"
                placeholder="Enter your surname"
              />
            </div>
          </div>

          <div className="flex flex-col w-full gap-4 sm:gap-6 sm:flex-row">
            <div className="flex flex-col w-full gap-1 font-lato">
              <label className="sm:text-[16px] text-[14px] sm:leading-6 leading-[16.8px] font-medium text-[#101928]">
                Email
              </label>

              <div className="relative w-full sm:max-w-[453px]">
                <input
                  className="sm:h-14 h-9 w-full border-[#98A2B3] border rounded-[6px] sm:pl-9 pl-9 pr-4 sm:placeholder:text-[14px] placeholder:text-[12px] sm:placeholder:leading-[16.8px] placeholder:leading-5 sm:text-[14px] text-[12px] sm:leading-[16.8px] leading-5 focus:outline-none focus:border-2 focus:border-[#008080]"
                  type="text"
                  placeholder="handyman@example.com"
                />
                <div className="absolute inset-y-0 flex items-center pointer-events-none left-3 sm:top-1">
                  <img src={inbox} />
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full gap-1 font-lato">
              <label className="sm:text-[16px] text-[14px] sm:leading-6 leading-[16.8px] font-medium text-[#101928]">
                Gender
              </label>
              <div className="relative w-full sm:max-w-[453px]">
                <select className="sm:h-14 h-9 w-full border-[#98A2B3] border rounded-[6px] sm:px-4 px-3 sm:placeholder:text-[14px] placeholder:text-[12px] sm:placeholder:leading-[16.8px] placeholder:leading-5 sm:text-[14px] text-[12px] sm:leading-[16.8px] leading-5 focus:outline-none focus:border-2 focus:border-[#008080] appearance-none bg-white">
                  <option className="text-[#98A2B3]" value="" disabled selected>
                    Select your option
                  </option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
                <div className="absolute inset-y-0 flex items-center pointer-events-none right-3">
                  <img src={dropDown} />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full gap-4 sm:gap-6 sm:flex-row">
            <div className="flex flex-col w-full gap-1 font-lato">
              <label className="sm:text-[16px] text-[14px] sm:leading-6 leading-[16.8px] font-medium text-[#101928]">
                Phone number
              </label>
              <input
                className="sm:max-w-[453px] sm:h-14 h-9 w-full border-[#98A2B3] border rounded-[6px] sm:px-4 px-3 sm:placeholder:text-[14px] placeholder:text-[12px] sm:placeholder:leading-[16.8px] placeholder:leading-5 sm:text-[14px] text-[12px] sm:leading-[16.8px] leading-5 focus:outline-none focus:border-2 focus:border-[#008080]"
                type="number"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="flex flex-col w-full gap-1 font-lato">
              <label className="sm:text-[16px] text-[14px] sm:leading-6 leading-[16.8px] font-medium text-[#101928]">
                State
              </label>
              <div className="relative w-full sm:max-w-[453px]">
                <select
                  className="sm:h-14 h-9 w-full border-[#98A2B3] border rounded-[6px] sm:px-4 px-3 sm:placeholder:text-[14px] placeholder:text-[12px] sm:placeholder:leading-[16.8px] placeholder:leading-5 sm:text-[14px] text-[12px] sm:leading-[16.8px] leading-5 focus:outline-none focus:border-2 focus:border-[#008080] appearance-none bg-white"
                  value={selectedState}
                  onChange={handleStateChange}
                >
                  <option className="text-[#98A2B3]" value="" disabled selected>
                    Select your option
                  </option>
                  {Object.keys(statesAndLGAs).map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 flex items-center pointer-events-none right-3">
                  <img src={dropDown} />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full gap-4 sm:gap-6 sm:flex-row">
            <div className="flex flex-col w-full gap-1 font-lato">
              <label className="sm:text-[16px] text-[14px] sm:leading-6 leading-[16.8px] font-medium text-[#101928]">
                Local Government
              </label>
              <div className="relative w-full sm:max-w-[453px]">
                <select
                  disabled={!selectedState}
                  className="sm:h-14 h-9 w-full border-[#98A2B3] border rounded-[6px] sm:px-4 px-3 sm:placeholder:text-[14px] placeholder:text-[12px] sm:placeholder:leading-[16.8px] placeholder:leading-5 sm:text-[14px] text-[12px] sm:leading-[16.8px] leading-5 focus:outline-none focus:border-2 focus:border-[#008080] appearance-none bg-white"
                >
                  <option className="text-[#98A2B3]" value="" disabled selected>
                    {selectedState ? "Select your LGA" : "Select a state first"}
                  </option>
                  {lgas.map((lga) => (
                    <option key={lga} value={lga}>
                      {lga}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 flex items-center pointer-events-none right-3">
                  <img src={dropDown} />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full gap-4 sm:gap-6 sm:flex-row">
            <div className="flex flex-col w-full gap-1 font-lato">
              <label className="sm:text-[16px] text-[14px] sm:leading-6 leading-[16.8px] font-medium text-[#101928]">
                Password
              </label>
              <div className="relative w-full sm:max-w-[453px]">
                <input
                  className="sm:max-w-[453px] sm:h-14 h-9 w-full border-[#98A2B3] border rounded-[6px] pl-9 pr-3 sm:placeholder:text-[14px] placeholder:text-[12px] sm:placeholder:leading-[16.8px] placeholder:leading-5 sm:text-[14px] text-[12px] sm:leading-[16.8px] leading-5 focus:outline-none focus:border-2 focus:border-[#008080]"
                  placeholder="Choose a password"
                  type={showPassword ? "text" : "password"}
                />
                <div
                  className="absolute inset-y-0 flex items-center cursor-pointer right-3"
                  onClick={handleShowPassword}
                >
                  <img src={hidePassword} />
                </div>
                <div className="absolute inset-y-0 flex items-center pointer-events-none left-3">
                  <img src={lock} />
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full gap-1 font-lato">
              <label className="sm:text-[16px] text-[14px] sm:leading-6 leading-[16.8px] font-medium text-[#101928]">
                Confirm password
              </label>
              <div className="relative w-full sm:max-w-[453px]">
                <input
                  className="sm:max-w-[453px] sm:h-14 h-9 w-full border-[#98A2B3] border rounded-[6px] pl-9 pr-3 sm:placeholder:text-[14px] placeholder:text-[12px] sm:placeholder:leading-[16.8px] placeholder:leading-5 sm:text-[14px] text-[12px] sm:leading-[16.8px] leading-5 focus:outline-none focus:border-2 focus:border-[#008080]"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm password"
                />
                <div
                  className="absolute inset-y-0 flex items-center cursor-pointer right-3"
                  onClick={handleShowConfirmPassword}
                >
                  <img src={hidePassword} />
                </div>
                <div className="absolute inset-y-0 flex items-center pointer-events-none left-3">
                  <img src={lock} />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 ">
            <input
              type="checkbox"
              className="accent-[#008080] w-[18px] h-[18px]"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />

            <p className="max-w-[400px] w-full sm:text-[16px] text-[12px] sm:leading-6 leading-5 font-lato font-medium">
              I agree to the Handyman’s{" "}
              <span className="text-[#008080]">
                terms & conditions, community guidelines
              </span>{" "}
              and <span className="text-[#008080]"> privacy policy</span>
            </p>
          </div>

          <div className="flex items-center justify-center mt-2">
            <button
              type="submit"
              className="max-w-[384px] w-full h-14 bg-[#008080] rounded-[8px] text-[#FFFFFF] font-semibold text-[18px] leading-6 font-lato"
              disabled={!isChecked}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
      <SignUpSuccessful isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default SignUp;
