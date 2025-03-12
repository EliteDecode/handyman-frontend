import { useEffect, useRef, useState } from "react";

import { useNavigate } from "react-router-dom";

import dropDown from "@/assets/icons/dropDown.svg";
import edit from "@/assets/icons/editIcon.svg";
import cancel from "@/assets/icons/cancel.svg";
import profile from "@/assets/icons/profile.svg";
import { handyManCYPSchema } from "@/lib/schema";
import axios from "axios";
import { useFormik } from "formik";
import BankSelector from "./BankSelector";
import ProgressBar from "./ProgressBarProps";
import toast from "react-hot-toast";

const banksInNigeria = [
  { name: "Access Bank", code: "044" },
  { name: "Citibank", code: "023" },
  { name: "Diamond Bank", code: "063" },
  { name: "Ecobank Nigeria", code: "050" },
  { name: "Fidelity Bank Nigeria", code: "070" },
  { name: "First Bank of Nigeria", code: "011" },
  { name: "First City Monument Bank", code: "214" },
  { name: "Guaranty Trust Bank", code: "058" },
  { name: "Heritage Bank Plc", code: "030" },
  { name: "Keystone Bank Limited", code: "082" },
  { name: "Kuda Bank", code: "50211" },
  { name: "Moniepoint MFB", code: "50515" },
  { name: "Opay", code: "999991" },
  { name: "Palmpay", code: "999992" },
  { name: "Polaris Bank", code: "076" },
  { name: "Providus Bank", code: "101" },
  { name: "Stanbic IBTC Bank", code: "221" },
  { name: "Standard Chartered Bank", code: "068" },
  { name: "Sterling Bank", code: "232" },
  { name: "Suntrust Bank Nigeria", code: "100" },
  { name: "Union Bank of Nigeria", code: "032" },
  { name: "United Bank for Africa", code: "033" },
  { name: "Unity Bank Plc", code: "215" },
  { name: "Wema Bank", code: "035" },
  { name: "Zenith Bank", code: "057" },
];

const daysList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const CompleteYourProfile = () => {
  const [loadingAccountName, setLoadingAccountName] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Dropdown state
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB (in bytes)

  const navigate = useNavigate();

  const formik = useFormik<CompleteYourProfileFormValues>({
    initialValues: {
      profileImage: null,
      aboutMe: "",
      serviceDescription: "",
      selectedCategories: [],
      bankName: "",
      bankCode: "",
      accountNumber: "",
      accountName: "",
      guarantorsName: "",
      guarantorsPhoneNumber: "",
      guarantorsRelationship: "",
      YOE: "",
      days: [],
      startTime: "",
      endTime: "",
      priceRange: "",
    },
    validationSchema: handyManCYPSchema,
    onSubmit: (values) => {
      console.log(values);
      navigate("/auth/verification-and-Identification");
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      // Check if the file size exceeds the maximum limit
      if (file.size > MAX_FILE_SIZE) {
        alert("File size exceeds the 5MB limit. Please choose a smaller file.");
        return; // Do not proceed if file size is too large
      }

      // If file size is valid, proceed with the upload

      formik.setFieldValue("profileImage", file);
    }
  };

  // Function to toggle selection
  const handleSelection = (day: string) => {
    const selectedDays = formik.values.days.includes(day)
      ? formik.values.days.filter((d) => d !== day) // Remove if already selected
      : [...formik.values.days, day]; // Add new day

    formik.setFieldValue("days", selectedDays);
  };

  // Function to remove a selected day
  const removeDay = (day: string) => {
    formik.setFieldValue(
      "days",
      formik.values.days.filter((d) => d !== day)
    );
  };

  const resolveAccountDetails = async () => {
    const { accountNumber, bankCode } = formik.values;

    if (!accountNumber || !bankCode) {
      toast.error("Please enter account number and bank code.");
      return;
    }

    setLoadingAccountName(true);

    try {
      const response = await axios.get(
        `https://api.paystack.co/bank/resolve?account_number=${accountNumber}&bank_code=${bankCode}`,
        {
          headers: {
            Authorization: `Bearer sk_test_0b939b05baed1f9f688c7f074450b4c062baac54`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("API Response:", response.data); // Debugging

      // Ensure response data exists before accessing properties
      if (response.data?.data?.account_name) {
        formik.setFieldValue("accountName", response.data.data.account_name);
        formik.setFieldError("accountName", ""); // Clear previous errors
      } else {
        console.error("No account found with these details.");
        toast.error("No account found with these details.");
        formik.setFieldValue("accountName", ""); // Clear input
      }
    } catch (err: unknown) {
      console.error("Error caught:", err); // Debugging

      if (axios.isAxiosError(err)) {
        const errorMessage =
          err.response?.data?.message ||
          err.response?.data ||
          err.message ||
          "Unexpected error. Try again.";

        // toast.error(errorMessage);
        console.error("Axios Error:", errorMessage);

        if (err.message === "Network Error") {
          toast.error("Network issue. Try again.");
        } else if (err.response?.status === 422) {
          toast.error("Invalid account details.");
        } else if (err.response?.status === 401) {
          toast.error("Unauthorized request. Check API key.");
        }
      } else {
        toast.error("Unexpected error. Try again.");
        console.error("Unexpected error:", err);
      }

      formik.setFieldValue("accountName", ""); // Clear account name on error
    } finally {
      setLoadingAccountName(false);
    }
  };

  // Trigger the resolve function when accountNumber or bank changes
  useEffect(() => {
    formik.setFieldValue("accountName", "");
    if (formik.values.accountNumber.length === 10 && formik.values.bankCode) {
      formik.setFieldValue("accountName", "");
      resolveAccountDetails(); // Resolve account details when conditions are met
    }
  }, [formik.values.accountNumber, formik.values.bankCode]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Scroll to the first error after form submission
  useEffect(() => {
    if (formik.errors && Object.keys(formik.errors).length > 0) {
      const firstError = Object.keys(formik.errors)[0];
      const firstErrorElement = document.getElementById(firstError);

      if (firstErrorElement) {
        // Scroll smoothly to the first error element
        firstErrorElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  }, [formik.errors]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
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

        <form className="w-full h-full" onSubmit={formik.handleSubmit}>
          <section className="flex items-center gap-6">
            <div className="sm:w-[180px] sm:h-[180px] w-[120px] h-[120px]">
              <img
                src={
                  formik.values.profileImage
                    ? URL.createObjectURL(formik.values.profileImage)
                    : profile // Default profile image
                }
                alt="profile"
                className={`object-cover w-full h-full rounded-full 
                  ${formik.values.profileImage ? "border-2 border-[#008080]" : ""} 
                  ${formik.touched.profileImage && formik.errors.profileImage ? "border-2 border-red-500" : ""}`}
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
              <div className="text-xs text-[#B3261E] min-h-4">
                {formik.touched.profileImage && formik.errors.profileImage}
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
              name="aboutMe"
              id="aboutMe"
              value={formik.values.aboutMe}
              onChange={formik.handleChange}
            ></textarea>

            <div className="text-xs text-[#B3261E] min-h-4">
              {formik.touched.aboutMe && formik.errors.aboutMe}
            </div>
          </section>

          <section className="flex flex-col w-full h-full gap-4 mt-4 sm:gap-6 sm:mt-6 lg:flex-row ">
            <div className="flex flex-col w-full h-full gap-1 lg:w-1/2">
              <label className="text-[16px] leading-6 font-medium font-lato text-[#191919]">
                Service description
              </label>
              <textarea
                className="w-full h-[128px] px-[14px] py-[10px] resize-none rounded-[8px] border border-[#C9CDD3] text-[16px] leading-[18px] font-lato placeholder:text-[#98A2B3] focus:outline-none focus:ring focus:ring-[#008080]"
                placeholder="Enter a description..."
                name="serviceDescription"
                id="serviceDescription"
                value={formik.values.serviceDescription}
                onChange={formik.handleChange}
              ></textarea>
              {
                <div className="text-xs text-[#B3261E] min-h-4">
                  {formik.touched.serviceDescription &&
                    formik.errors.serviceDescription}
                </div>
              }
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

              <div className="grid h-full grid-cols-2 xl:grid-cols-3 gap-x-6 sm:gap-y-4 gap-y-[18px]">
                {[
                  "Electrical work",
                  "Carpentry",
                  "Home repairs",
                  "Plumbing",
                  "Appliance repairs",
                ].map((category) => (
                  <div className="flex items-center gap-[11px]" key={category}>
                    <input
                      type="checkbox"
                      className="accent-[#008080] w-[18px] h-[18px]"
                      name="selectedCategories"
                      id="selectedCategories"
                      value={category}
                      checked={formik.values.selectedCategories.includes(
                        category
                      )}
                      onChange={(e) => {
                        const { checked, value } = e.target;
                        if (checked) {
                          formik.setFieldValue("selectedCategories", [
                            ...formik.values.selectedCategories,
                            value,
                          ]);
                        } else {
                          formik.setFieldValue(
                            "selectedCategories",
                            formik.values.selectedCategories.filter(
                              (cat) => cat !== value
                            )
                          );
                        }
                      }}
                    />
                    <label className="whitespace-nowrap sm:text-[16px] text-[12px] sm:leading-6 leading-5 text-[#3C3C3C]">
                      {category}
                    </label>
                  </div>
                ))}
              </div>

              <div className="text-xs text-[#B3261E] min-h-4">
                {formik.touched.selectedCategories &&
                  formik.errors.selectedCategories}
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
                <BankSelector
                  formik={formik} // Pass formik to the BankSelector
                  banksInNigeria={banksInNigeria} // Pass the bank data
                  dropDown={dropDown} // Path to your dropdown icon
                />

                <div className="text-xs text-[#B3261E] min-h-4">
                  {formik.touched.bankName && formik.errors.bankName}
                </div>
              </div>

              <div className="flex flex-col gap-1 font-lato">
                <label className="text-[14px] sm:text-[16px] leading-[16.8px] sm:leading-6 font-medium text-[#101928]">
                  Account Number
                </label>
                <input
                  className={`h-9 sm:h-14 w-full border-[#98A2B3] border rounded-[6px] px-3 sm:px-4 placeholder:text-[12px] sm:placeholder:text-[14px] placeholder:leading-5 sm:placeholder:leading-[16.8px] text-[12px] sm:text-[14px] leading-5 sm:leading-[16.8px] focus:outline-none focus:border-2 focus:border-[#008080] ${formik.touched.accountNumber && formik.errors.accountNumber ? "border-red-500" : ""}`}
                  // type={type}
                  name="accountNumber"
                  id="accountNumber"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={formik.values.accountNumber}
                  onChange={(e) => {
                    // Remove non-numeric characters
                    const sanitizedValue = e.target.value.replace(/\D/g, "");
                    // Clear accountName when phoneNumber changes
                    formik.setFieldValue("accountName", "");
                    // Update phoneNumber with sanitized input
                    formik.setFieldValue("accountNumber", sanitizedValue);
                  }}
                  onBlur={formik.handleBlur}
                  placeholder={"Enter account number"}
                  maxLength={10}
                />

                <div className="text-xs text-[#B3261E] min-h-[16px]">
                  {formik.touched.accountNumber && formik.errors.accountNumber}
                </div>
              </div>

              <div className="flex flex-col gap-1 font-lato">
                <label className="text-[14px] sm:text-[16px] leading-[16.8px] sm:leading-6 font-medium text-[#101928]">
                  Account Name
                </label>
                <input
                  className={`h-9 sm:h-14 w-full border-[#98A2B3] border rounded-[6px] px-3 sm:px-4 text-[12px] sm:text-[14px] leading-5 sm:leading-[16.8px] focus:outline-none focus:border-2 focus:border-[#008080] 
                      ${formik.touched.accountName && formik.errors.accountName ? "border-red-500" : ""} 
                      ${loadingAccountName ? "text-[#008080] cursor-not-allowed" : ""}`}
                  name="accountName"
                  id="accountName"
                  value={`${loadingAccountName ? "Loading account name..." : formik.values.accountName}`}
                  placeholder="Fill in account details to get name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disabled
                />

                <div className="text-xs text-[#B3261E] min-h-[16px]">
                  {formik.touched.accountName && formik.errors.accountName}
                </div>
              </div>

              <div className="flex flex-col gap-1 font-lato">
                <label className="text-[14px] sm:text-[16px] leading-[16.8px] sm:leading-6 font-medium text-[#101928]">
                  Guarantor’s Name
                </label>
                <input
                  className={`h-9 sm:h-14 w-full border-[#98A2B3] border rounded-[6px] px-3 sm:px-4 placeholder:text-[12px] sm:placeholder:text-[14px] placeholder:leading-5 sm:placeholder:leading-[16.8px] text-[12px] sm:text-[14px] leading-5 sm:leading-[16.8px] focus:outline-none focus:border-2 focus:border-[#008080] ${formik.touched.guarantorsName && formik.errors.guarantorsName ? "border-red-500" : ""}`}
                  // type={type}
                  name="guarantorsName"
                  id="guarantorsName"
                  value={formik.values.guarantorsName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder={"Enter guarantor’s Name"}
                />

                <div className="text-xs text-[#B3261E] min-h-[16px]">
                  {formik.touched.guarantorsName &&
                    formik.errors.guarantorsName}
                </div>
              </div>

              <div className="flex flex-col gap-1 font-lato">
                <label className="text-[14px] sm:text-[16px] leading-[16.8px] sm:leading-6 font-medium text-[#101928]">
                  Guarantor’s Phone Number
                </label>
                <input
                  className={`h-9 sm:h-14 w-full border-[#98A2B3] border rounded-[6px] px-3 sm:px-4 placeholder:text-[12px] sm:placeholder:text-[14px] placeholder:leading-5 sm:placeholder:leading-[16.8px] text-[12px] sm:text-[14px] leading-5 sm:leading-[16.8px] focus:outline-none focus:border-2 focus:border-[#008080] ${formik.touched.guarantorsPhoneNumber && formik.errors.guarantorsPhoneNumber ? "border-red-500" : ""}`}
                  // type={type}
                  name="guarantorsPhoneNumber"
                  id="guarantorsPhoneNumber"
                  value={formik.values.guarantorsPhoneNumber}
                  inputMode="numeric"
                  pattern="[0-9]*"
                  onChange={(e) => {
                    const sanitizedValue = e.target.value.replace(/\D/g, "");
                    formik.setFieldValue(
                      "guarantorsPhoneNumber",
                      sanitizedValue
                    );
                  }}
                  onBlur={formik.handleBlur}
                  placeholder={"Enter guarantor’s Number"}
                />

                <div className="text-xs text-[#B3261E] min-h-[16px]">
                  {formik.touched.guarantorsPhoneNumber &&
                    formik.errors.guarantorsPhoneNumber}
                </div>
              </div>

              <div className="flex flex-col gap-1 font-lato">
                <label className="text-[14px] sm:text-[16px] leading-[16.8px] sm:leading-6 font-medium text-[#101928]">
                  Guarantor’s Relationship
                </label>
                <div className="relative w-full">
                  <select
                    className={`h-9 sm:h-14 w-full border-[#98A2B3] border rounded-[6px] px-4 placeholder:text-[14px] sm:text-[14px] text-[12px] sm:leading-[16.8px] leading-5 focus:outline-none focus:border-2 focus:border-[#008080] appearance-none bg-white ${formik.touched.days && formik.errors.days ? "border-red-500" : ""}`}
                    name="guarantorsRelationship"
                    id="guarantorsRelationship"
                    value={formik.values.guarantorsRelationship}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option className="text-[#98A2B3]" value="" disabled>
                      Select guarantor’s relationship
                    </option>
                    <option>Father</option>
                    <option>Mother</option>
                    <option>Brother</option>
                    <option>Sister</option>
                    <option>Husband</option>
                    <option>Wife</option>
                    <option>Son</option>
                    <option>Daughter</option>
                  </select>
                  <div className="absolute inset-y-0 flex items-center pointer-events-none right-3">
                    <img src={dropDown} alt="dropdown" />
                  </div>
                </div>

                <div className="text-xs text-[#B3261E] min-h-[16px]">
                  {formik.touched.guarantorsRelationship &&
                    formik.errors.guarantorsRelationship}
                </div>
              </div>

              <div className="flex flex-col gap-1 font-lato">
                <label className="text-[14px] sm:text-[16px] leading-[16.8px] sm:leading-6 font-medium text-[#101928]">
                  Years of Experience
                </label>
                <div className="relative w-full">
                  <select
                    className={`h-9 sm:h-14 w-full border-[#98A2B3] border rounded-[6px] px-3 sm:px-4 text-[12px] sm:text-[14px] leading-5 sm:leading-[16.8px] focus:outline-none focus:border-2 focus:border-[#008080] appearance-none ${
                      formik.touched.YOE && formik.errors.YOE
                        ? "border-red-500"
                        : ""
                    }`}
                    name="YOE"
                    id="YOE"
                    value={formik.values.YOE}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option value="" disabled>
                      Select years of experience
                    </option>
                    <option value="1">Less than 1 year</option>
                    <option value="1-2">1-2 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">Above 10 Years</option>
                  </select>
                  <div className="absolute inset-y-0 flex items-center pointer-events-none right-3">
                    <img src={dropDown} alt="dropdown" />
                  </div>
                </div>

                <div className="text-xs text-[#B3261E] min-h-[16px]">
                  {formik.touched.YOE && formik.errors.YOE}
                </div>
              </div>
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

            <div className="flex flex-col items-start w-full sm:gap-[25px] sm:flex-row  gap-4">
              <div className="w-full sm:w-1/2">
                <label className="block text-[#101928] sm:text-[16px] text-[14px] sm:leading-6 leading-[16.8px] font-medium mb-2">
                  Days
                </label>
                <div className="relative w-full" ref={dropdownRef}>
                  {/* Select Box */}
                  <div
                    className="w-full border border-[#98A2B3] rounded-[6px] px-4 h-9 sm:h-14 flex justify-between items-center cursor-pointer focus-within:border-[#008080]"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <span className="text-gray-500 text-[14px]">
                      {formik.values.days.length > 0
                        ? `${formik.values.days.length} days selected`
                        : "Select your Working Days"}
                    </span>

                    {/* <IoChevronDown
                      className={`text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    /> */}

                    <div
                      className={`text-gray-500 transition-transform  pointer-events-none ${isOpen ? "rotate-180" : ""}`}
                    >
                      <img src={dropDown} alt="dropdown" />
                    </div>
                  </div>

                  {/* Dropdown List */}
                  {isOpen && (
                    <div className="absolute z-10 w-full bg-white border border-[#98A2B3] rounded-[6px] mt-1 shadow-md h-fit overflow-auto p-4">
                      {daysList.map((day) => (
                        <label
                          key={day}
                          className="flex items-center w-full gap-3 cursor-pointer h-9 hover:bg-gray-100"
                        >
                          <input
                            type="checkbox"
                            className="accent-[#008080] w-5 h-5"
                            checked={formik.values.days.includes(day)}
                            onChange={() => handleSelection(day)}
                          />
                          <span className="text-[16px] leading-[100%] tracking-[2%] font-lato text-[#3C3C3C]">
                            {day}
                          </span>
                        </label>
                      ))}
                    </div>
                  )}

                  {/* Selected Days as Pills */}
                  {formik.values.days.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {formik.values.days.map((day) => (
                        <div
                          key={day}
                          className="flex items-center justify-center text-[#008080] border-[#008080] border px-3  w-fit gap-1 h-9 rounded-[6px]"
                        >
                          <span className="text-[14px] leading-5 font-medium tracking-[2%]">
                            {day}
                          </span>
                          <button
                            type="button"
                            className="text-white hover:text-gray-300"
                            onClick={() => removeDay(day)}
                          >
                            <img src={cancel} alt="cancel" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Formik Validation Error */}
                  {formik.touched.days && formik.errors.days && (
                    <p className="text-red-500 text-[12px] mt-1">
                      {formik.errors.days}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-row w-full sm:w-1/2 gap-[25px]">
                <div className="w-full sm:w-1/2">
                  <label className="block text-[#101928] sm:text-[16px] text-[14px] sm:leading-6 leading-[16.8px] font-medium mb-2">
                    From
                  </label>

                  <input
                    name="startTime"
                    id="startTime"
                    type="time"
                    className={`h-9 sm:h-14 w-full border-[#98A2B3] border rounded-[6px] pl-4 pr-3 placeholder:text-[14px] sm:text-[14px] text-[12px] sm:leading-[16.8px] leading-5 focus:outline-none focus:border-2 focus:border-[#008080] ${formik.touched.startTime && formik.errors.startTime ? "border-red-500" : ""}`}
                    value={formik.values.startTime}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  <div className="text-xs text-[#B3261E] min-h-4">
                    {formik.touched.startTime && formik.errors.startTime}
                  </div>
                </div>

                <div className="w-full sm:w-1/2">
                  <label className="block text-[#101928] sm:text-[16px] text-[14px] sm:leading-6 leading-[16.8px] font-medium mb-2">
                    To
                  </label>

                  <input
                    type="time"
                    className={`h-9 sm:h-14 w-full border-[#98A2B3] border rounded-[6px] pl-4 pr-3 placeholder:text-[14px] sm:text-[14px] text-[12px] sm:leading-[16.8px] leading-5 focus:outline-none focus:border-2 focus:border-[#008080] ${formik.touched.endTime && formik.errors.endTime ? "border-red-500" : ""}`}
                    name="endTime"
                    id="endTime"
                    value={formik.values.endTime}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  <div className="text-xs text-[#B3261E] min-h-4">
                    {formik.touched.endTime && formik.errors.endTime}
                  </div>
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
                  Price Range
                </label>

                <input
                  className={`sm:max-w-[384px] sm:h-14 h-9 w-full border-[#98A2B3] border rounded-[6px] pl-4 pr-3 sm:placeholder:text-[14px] placeholder:text-[12px] sm:placeholder:leading-[16.8px] placeholder:leading-5 sm:text-[14px] text-[12px] sm:leading-[16.8px] leading-5 focus:outline-none focus:border-2 focus:border-[#008080] ${formik.touched.priceRange && formik.errors.priceRange ? "border-red-500" : ""}`}
                  name="priceRange"
                  id="priceRange"
                  value={formik.values.priceRange}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter your preferred price range in Naira"
                />

                <div className="text-xs text-[#B3261E] min-h-4">
                  {formik.touched.priceRange && formik.errors.priceRange}
                </div>
              </div>
            </div>
          </section>

          {/* buttons */}
          <div className="flex items-center justify-center mt-6 sm:mt-8">
            <button
              type="submit"
              className="w-[194px] h-14 bg-[#008080] rounded-[8px] text-[#FFFFFF] font-semibold text-[16px] leading-6 font-lato"
            >
              Save and Continue
            </button>
          </div>
          {/* <div className="flex flex-col gap-8 mt-6 sm:gap-14 sm:mt-8">
   

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
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default CompleteYourProfile;
