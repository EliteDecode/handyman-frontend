import { useState } from "react";

import ProgressBar from "./ProgressBarProps";
import profile from "@/assets/icons/profile.svg";
import edit from "@/assets/icons/editIcon.svg";

const CompleteYourProfile = () => {
  const [profileImage, setProfileImage] = useState<string | null>(profile);
  const [fileInput, setFileInput] = useState<File | null>(null);

  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB (in bytes)

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

  return (
    <div className="flex items-center justify-center w-full">
      <div className="mx-auto max-w-[1201px] pt-20 pb-[59px] px-[120px] flex flex-col items-start w-full text-start bg-white p-8 rounded-lg shadow-lg">
        <div>
          <h1 className="mb-[14px] text-[40px] leading-[50.28px] font-bold font-merriweather text-[#191919]">
            Set up your profile
          </h1>
          <p className="mb-6 text-[#191919] text-[24px] leading-8 font-medium font-lato">
            Tell us a bit about yourself to help clients find the right handyman
            for their needs. Provide your profession, experience, and location
            to match you with jobs nearby.
          </p>
          <div className="flex items-center w-full gap-2 mb-6">
            <p className="text-[16px] leading-[18px] font-lato text-[#000000]">
              1/3
            </p>
            <ProgressBar progress={33.3} />
          </div>
        </div>

        <form className="w-full">
          <div className="flex items-center gap-6">
            <div className="w-[180px] h-[180px]">
              <img
                src={profileImage || "default-image-path.jpg"} // Show uploaded image or default image
                alt="profile"
                className={`object-cover w-full h-full ${profileImage === profile ? "" : "border-2 border-[#008080]"}  rounded-full`}
              />
            </div>

            <div className="flex flex-col items-start gap-4">
              <p className="text-lg">Add Profile Photo</p>

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
                  <div className="flex flex-row gap-[10px]">
                    <img src={edit} alt="edit" />
                    <p>Edit</p>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full gap-1 mt-6">
            <label className="text-[16px] leading-6 font-medium font-lato text-[#191919]">
              About me
            </label>
            <textarea
              className="w-full h-20 px-[14px] py-[10px] resize-none rounded-[8px] border border-[#C9CDD3] text-[16px] leading-[18px] font-lato placeholder:text-[#98A2B3] focus:outline-none focus:ring focus:ring-[#008080]"
              placeholder="Enter a description..."
            ></textarea>
          </div>

          <div className="flex flex-row items-center w-full gap-6 h-[156px] mt-6">
            <div className="flex flex-col w-1/2 h-full gap-1">
              <label className="text-[16px] leading-6 font-medium font-lato text-[#191919]">
                Service description
              </label>
              <textarea
                className="w-full h-full px-[14px] py-[10px] resize-none rounded-[8px] border border-[#C9CDD3] text-[16px] leading-[18px] font-lato placeholder:text-[#98A2B3] focus:outline-none focus:ring focus:ring-[#008080]"
                placeholder="Enter a description..."
              ></textarea>
            </div>

            <div className="flex flex-col w-1/2 h-full gap-4">
              <div className="flex flex-col gap-3">
                <h1 className="text-[24px] leading-8 font-medium font-lato text-[#191919]">
                  Select service category
                </h1>
                <p className="text-[16px] leading-[18px] font-lato text-[#191919]">
                  Select multiple if applicable
                </p>
              </div>

              <div className="flex flex-row flex-wrap items-center gap-x-6 gap-y-4">
                <div className="flex flex-row items-center gap-2">
                  <input
                    type="checkbox"
                    className="accent-[#008080] w-[18px] h-[18px]"
                  />
                  <label>Electrical work</label>
                </div>

                <div className="flex flex-row items-center gap-2">
                  <input
                    type="checkbox"
                    className="accent-[#008080] w-[18px] h-[18px]"
                  />
                  <label>Carpentry</label>
                </div>

                <div className="flex flex-row items-center gap-2">
                  <input
                    type="checkbox"
                    className="accent-[#008080] w-[18px] h-[18px]"
                  />
                  <label>Home repairs</label>
                </div>

                <div className="flex flex-row items-center gap-2">
                  <input
                    type="checkbox"
                    className="accent-[#008080] w-[18px] h-[18px]"
                  />
                  <label>Appliance repairs</label>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompleteYourProfile;
