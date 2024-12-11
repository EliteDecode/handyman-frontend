import { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

import ProgressBar from "./ProgressBarProps";
import profile from "@/assets/icons/profile.svg";
import edit from "@/assets/icons/editIcon.svg";
import dropDown from "@/assets/icons/dropDown.svg";
import backIcon from "@/assets/icons/backIcon.svg";

const CompleteYourProfile = () => {
  const [profileImage, setProfileImage] = useState<string | null>(profile);
  const [fileInput, setFileInput] = useState<File | null>(null);

  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB (in bytes)

  const navigate = useNavigate();

  // Reusable Input Component
  const TextInput = ({
    label,
    placeholder,
    readOnly = false,
    type = "text",
    disabled = false,
  }: any) => (
    <div className="flex flex-col gap-1 font-lato">
      <label className="text-[14px] sm:text-[16px] leading-[16.8px] sm:leading-6 font-medium text-[#101928]">
        {label}
      </label>
      <input
        className="h-9 sm:h-14 w-full border-[#98A2B3] border rounded-[6px] px-3 sm:px-4 placeholder:text-[12px] sm:placeholder:text-[14px] placeholder:leading-5 sm:placeholder:leading-[16.8px] text-[12px] sm:text-[14px] leading-5 sm:leading-[16.8px] focus:outline-none focus:border-2 focus:border-[#008080]"
        type={type}
        placeholder={placeholder}
        readOnly={readOnly}
        disabled={disabled}
      />
    </div>
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      // Check if the file size exceeds the maximum limit
      if (file.size > MAX_FILE_SIZE) {
        alert("File size exceeds the 5MB limit. Please choose a smaller file.");
        return; // Do not proceed if file size is too large
      }

      // If file size is valid, proceed with the upload
      setFileInput(file);
      setProfileImage(URL.createObjectURL(file)); // Display image immediately
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex items-center justify-center w-full lg:px-[120px] md:px-10 px-6 h-full">
      <div className="mx-auto max-w-[1201px] sm:pt-20 pt-8 pb-[59px]  flex flex-col items-start w-full h-full text-start bg-white rounded-lg shadow-lg">
        <div>
          <h1 className="sm:mb-[14px] mb-2 sm:text-[40px] text-[16px] sm:leading-[50.28px] leading-6 font-bold font-merriweather text-[#191919]">
            Set up your profile
          </h1>
          <p className="mb-6 text-[#191919] sm:text-[24px] text-[12px] sm:leading-8 leading-5 sm:font-medium  font-lato">
            Tell us a bit about yourself to help clients find the right handyman
            for their needs. Provide your profession, experience, and location
            to match you with jobs nearby.
          </p>

          <ProgressBar progress={33.3} step={1} />
        </div>

        <form className="w-full h-full">
          <section className="flex items-center gap-6">
            <div className="sm:w-[180px] sm:h-[180px] w-[120px] h-[120px]">
              <img
                src={profileImage || "default-image-path.jpg"} // Show uploaded image or default image
                alt="profile"
                className={`object-cover w-full h-full ${profileImage === profile ? "" : "border-2 border-[#008080]"}  rounded-full`}
              />
            </div>

            <div className="flex flex-col items-start gap-2 sm:gap-4">
              <p className="text-[14px] leading-5 sm:text-[18px] sm:leading-6 font-medium">
                Add Profile Photo
              </p>

              {/* File input */}
              <div className="relative">
                <input
                  type="file"
                  id="file-input"
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                <label htmlFor="file-input" className="cursor-pointer">
                  <div className="flex flex-row sm:gap-[10px] gap-[9.333px] items-center">
                    <img
                      src={edit}
                      alt="edit"
                      className="w-[13.33px] h-[13.33px] sm:h-5 sm:w-5"
                    />
                    <p className="text-[12px] sm:text-[16px] leading-5">Edit</p>
                  </div>
                </label>
              </div>
            </div>
          </section>

          <section className="flex flex-col w-full gap-1 mt-4 sm:mt-6">
            <label className="text-[16px] leading-6 font-medium font-lato text-[#191919]">
              About me
            </label>
            <textarea
              className="w-full h-20 px-[14px] py-[10px] resize-none rounded-[8px] border border-[#C9CDD3] text-[16px] leading-[18px] font-lato placeholder:text-[#98A2B3] focus:outline-none focus:ring focus:ring-[#008080]"
              placeholder="Enter a description..."
            ></textarea>
          </section>

          <section className="flex flex-col w-full h-full gap-4 mt-4 sm:gap-6 sm:mt-6 lg:flex-row ">
            <div className="flex flex-col w-full h-full gap-1 lg:w-1/2">
              <label className="text-[16px] leading-6 font-medium font-lato text-[#191919]">
                Service description
              </label>
              <textarea
                className="w-full h-[128px] px-[14px] py-[10px] resize-none rounded-[8px] border border-[#C9CDD3] text-[16px] leading-[18px] font-lato placeholder:text-[#98A2B3] focus:outline-none focus:ring focus:ring-[#008080]"
                placeholder="Enter a description..."
              ></textarea>
            </div>

            <div className="flex flex-col w-full h-full gap-4 lg:w-1/2">
              <div className="flex flex-col h-full gap-3">
                <h1 className="sm:text-[24px] text-[16px] leading-6 sm:leading-8 font-medium font-merriweather text-[#191919]">
                  Select service category
                </h1>
                <p className="sm:text-[16px] text-[12px] sm:leading-[18px] leading-5 font-lato text-[#3C3C3C]">
                  Select multiple if applicable
                </p>
              </div>

              <div className="grid h-full grid-cols-2  xl:grid-cols-3 gap-x-6 sm:gap-y-4 gap-y-[18px]">
                <div className="flex items-center gap-[11px]">
                  <input
                    type="checkbox"
                    className="accent-[#008080] w-[18px] h-[18px]"
                  />
                  <label className="whitespace-nowrap sm:text-[16px] text-[12px] sm:leading-6 leading-5  text-[#3C3C3C]">
                    Electrical work
                  </label>
                </div>

                <div className="flex items-center gap-[11px]">
                  <input
                    type="checkbox"
                    className="accent-[#008080] w-[18px] h-[18px]"
                  />
                  <label className="whitespace-nowrap sm:text-[16px] text-[12px] sm:leading-6 leading-5  text-[#3C3C3C]">
                    Carpentry
                  </label>
                </div>

                <div className="flex items-center gap-[11px]">
                  <input
                    type="checkbox"
                    className="accent-[#008080] w-[18px] h-[18px]"
                  />
                  <label className="whitespace-nowrap sm:text-[16px] text-[12px] sm:leading-6 leading-5  text-[#3C3C3C]">
                    Home repairs
                  </label>
                </div>

                <div className="flex items-center gap-[11px]">
                  <input
                    type="checkbox"
                    className="accent-[#008080] w-[18px] h-[18px]"
                  />
                  <label className="whitespace-nowrap sm:text-[16px] text-[12px] sm:leading-6 leading-5  text-[#3C3C3C]">
                    Plumbing
                  </label>
                </div>

                <div className="flex items-center gap-[11px]">
                  <input
                    type="checkbox"
                    className="accent-[#008080] w-[18px] h-[18px]"
                  />
                  <label className="whitespace-nowrap sm:text-[16px] text-[12px] sm:leading-6 leading-5  text-[#3C3C3C]">
                    Appliance repairs
                  </label>
                </div>
              </div>
            </div>
          </section>

          <section className="flex flex-col w-full gap-6 mt-6 sm:gap-4 sm:mt-8">
            <div className="text-[#191919] font-lato flex sm:gap-3 gap-2 flex-col">
              <h1 className="sm:text-[24px] text-[16px] leading-6 sm:leading-8 font-medium">
                Personal information
              </h1>
              <p className="sm:text-[16px] text-[12px] sm:leading-5 leading-5">
                Provide correct information
              </p>
            </div>

            <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
              {/* Bank Name */}
              <div className="flex flex-col w-full gap-1 font-lato">
                <label className="sm:text-[16px] text-[14px] sm:leading-6 leading-[16.8px] font-medium text-[#101928]">
                  Bank Name
                </label>
                <div className="relative w-full">
                  <select className="sm:h-14 h-9 w-full border-[#98A2B3] border rounded-[6px] sm:px-4 px-3 sm:placeholder:text-[14px] placeholder:text-[12px] sm:placeholder:leading-[16.8px] placeholder:leading-5 sm:text-[14px] text-[12px] sm:leading-[16.8px] leading-5 focus:outline-none focus:border-2 focus:border-[#008080] appearance-none bg-white">
                    <option
                      className="text-[#98A2B3]"
                      value=""
                      disabled
                      selected
                    >
                      Select your bank
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                  <div className="absolute inset-y-0 flex items-center pointer-events-none right-3">
                    <img src={dropDown} alt="dropdown" />
                  </div>
                </div>
              </div>

              <TextInput
                label="Account Number"
                placeholder="Enter account number"
              />
              <TextInput label="Account Name" readOnly={true} disabled={true} />
              <TextInput
                label="Guarantor’s Name"
                placeholder="Enter guarantor's name"
              />
              <TextInput
                label="Guarantor’s Phone Number"
                placeholder="Enter phone number"
              />
              <TextInput
                label="Guarantor’s Relationship"
                placeholder="Enter relationship"
              />
            </div>
          </section>

          <section className="flex flex-col w-full gap-6 mt-6 sm:gap-4 sm:mt-8">
            <div className="text-[#191919] font-lato flex sm:gap-3 gap-2 flex-col">
              <h1 className="sm:text-[24px] text-[16px] leading-6 sm:leading-8 font-medium">
                Set availability
              </h1>
              <p className="sm:text-[16px] text-[12px] sm:leading-5 leading-5">
                set up your work hours and specify your weekly availability
              </p>
            </div>

            <div className="flex flex-col items-start w-full sm:gap-[25px]  sm:flex-row sm:items-center gap-4">
              <div className="w-full sm:w-1/2">
                <label className="block text-[#101928] sm:text-[16px] text-[14px] sm:leading-6 leading-[16.8px] font-medium mb-2">
                  Days
                </label>
                <div className="relative w-full">
                  <select className="h-9 sm:h-14 w-full border-[#98A2B3] border rounded-[6px] px-4 placeholder:text-[14px] sm:text-[14px] text-[12px] sm:leading-[16.8px] leading-5 focus:outline-none focus:border-2 focus:border-[#008080] appearance-none bg-white">
                    <option className="text-[#98A2B3]" value="" disabled>
                      Select your bank
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                  <div className="absolute inset-y-0 flex items-center pointer-events-none right-3">
                    <img src={dropDown} alt="dropdown" />
                  </div>
                </div>
              </div>

              <div className="flex flex-row w-full sm:w-1/2 gap-[25px]">
                <div className="w-full sm:w-1/2">
                  <label className="block text-[#101928] sm:text-[16px] text-[14px] sm:leading-6 leading-[16.8px] font-medium mb-2">
                    From
                  </label>

                  <input
                    type="time"
                    className="h-9 sm:h-14 w-full border-[#98A2B3] border rounded-[6px] pl-4 pr-3 placeholder:text-[14px] sm:text-[14px] text-[12px] sm:leading-[16.8px] leading-5 focus:outline-none focus:border-2 focus:border-[#008080]"
                  />
                </div>

                <div className="w-full sm:w-1/2">
                  <label className="block text-[#101928] sm:text-[16px] text-[14px] sm:leading-6 leading-[16.8px] font-medium mb-2">
                    To
                  </label>

                  <input
                    type="time"
                    className="h-9 sm:h-14 w-full border-[#98A2B3] border rounded-[6px] pl-4 pr-3 placeholder:text-[14px] sm:text-[14px] text-[12px] sm:leading-[16.8px] leading-5 focus:outline-none focus:border-2 focus:border-[#008080]"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="flex flex-col w-full gap-4 mt-6 sm:gap-4 sm:mt-8">
            <div className="text-[#191919] font-lato flex sm:gap-3 gap-2 flex-col">
              <h1 className="sm:text-[24px] text-[16px] leading-6 sm:leading-8 font-medium">
                Pricing/rates
              </h1>
              <p className="sm:text-[16px] text-[12px] sm:leading-5 leading-5">
                Set your service rates
              </p>
            </div>

            <div className="flex gap-[25px] sm:gap-6 sm:w-1/2 w-full items-center flex-row">
              <div className="flex flex-col w-full gap-1 font-lato">
                <label className="sm:text-[16px] text-[14px] sm:leading-6 leading-[16.8px] font-medium text-[#101928]">
                  Rate per hour
                </label>
                <div className="relative w-full sm:max-w-[282px]">
                  <input className="sm:max-w-[282px] sm:h-14 h-9 w-full border-[#98A2B3] border rounded-[6px] pl-9 pr-3 sm:placeholder:text-[14px] placeholder:text-[12px] sm:placeholder:leading-[16.8px] placeholder:leading-5 sm:text-[14px] text-[12px] sm:leading-[16.8px] leading-5 focus:outline-none focus:border-2 focus:border-[#008080]" />
                  <p className="absolute inset-y-0 flex items-center cursor-pointer right-3 text-[#667185] text-[14px] leading-[20.3px]">
                    ₦
                  </p>
                </div>
              </div>

              <div className="flex flex-col w-full gap-1 font-lato">
                <label className="sm:text-[16px] text-[14px] sm:leading-6 leading-[16.8px] font-medium text-[#101928]">
                  Rate per job
                </label>
                <div className="relative w-full sm:max-w-[282px]">
                  <input className="sm:max-w-[282px] sm:h-14 h-9 w-full border-[#98A2B3] border rounded-[6px] pl-9 pr-3 sm:placeholder:text-[14px] placeholder:text-[12px] sm:placeholder:leading-[16.8px] placeholder:leading-5 sm:text-[14px] text-[12px] sm:leading-[16.8px] leading-5 focus:outline-none focus:border-2 focus:border-[#008080]" />
                  <p className="absolute inset-y-0 flex items-center cursor-pointer right-3 text-[#667185] text-[14px] leading-[20.3px]">
                    ₦
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* buttons */}
          <div className="flex flex-col gap-8 mt-6 sm:gap-14 sm:mt-8">
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="w-[194px] h-14 bg-[#008080] rounded-[8px] text-[#FFFFFF] font-semibold text-[16px] leading-6 font-lato"
              >
                Save and Continue
              </button>
            </div>

            <div className="flex items-center justify-between cursor-pointer">
              <div
                className="flex items-center sm:gap-[10px] gap-2"
                onClick={() => navigate(-1)}
              >
                <img src={backIcon} alt="back" />
                <p className="text-[18px] leading-[30px] font-medium font-lato text-[#3C3C3C]">
                  Back
                </p>
              </div>

              <Link to="/auth/verification-and-Identification">
                <button className="sm:w-[82px] w-[62px] sm:h-14 h-9 bg-[#008080] rounded-[8px] text-[#FFFFFF] font-semibold sm:text-[16px] sm:leading-6 text-[14px] leading-5 font-lato">
                  Skip
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompleteYourProfile;
