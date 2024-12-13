import { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

import ProgressBar from "./ProgressBarProps";
import profile from "@/assets/icons/profile.svg";
import edit from "@/assets/icons/editIcon.svg";
import dropDown from "@/assets/icons/dropDown.svg";
import backIcon from "@/assets/icons/backIcon.svg";
import { useFormik, FormikValues, FormikHelpers } from "formik";
import { handyManCYPSchema } from "@/lib/schema";
import axios from "axios";
import BankSelector from "./BankSelector";

interface FormValues {
  profileImage: File | null;
  aboutMe: string;
  serviceDescription: string;
  selectedCategories: string[];
  bankName: string;
  accountNumber: string;
  accountName: string;
  guarantorsName: string;
  guarantorsPhoneNumber: string;
  guarantorsRelationship: string;
  YOE: string;
  days: string;
  startTime: string;
  endTime: string;
  ratePerHour: string;
  ratePerJob: string;
}

type ResolveAccountDetailsProps = {
  formik: FormikValues;
  setAccountName: (name: string) => void;
  setLoadingAccountName: (loading: boolean) => void;
  setError: (error: string | null) => void;
};

type UseEffectProps = {
  formik: {
    values: {
      accountNumber: string;
      bankCode: string;
    };
  };
  resolveAccountDetails: () => Promise<void>;
  setAccountName: (name: string) => void;
};

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

const CompleteYourProfile = () => {
  const [profileImage, setProfileImage] = useState<string | null>(profile);
  const [fileInput, setFileInput] = useState<File | null>(null);

  const [accountName, setAccountName] = useState("");
  const [loadingAccountName, setLoadingAccountName] = useState(false);
  const [error, setError] = useState(null);

  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB (in bytes)

  const navigate = useNavigate();

  const formik = useFormik<FormValues>({
    initialValues: {
      profileImage: null,
      aboutMe: "",
      serviceDescription: "",
      selectedCategories: [],
      bankName: "",
      accountNumber: "",
      accountName: "",
      guarantorsName: "",
      guarantorsPhoneNumber: "",
      guarantorsRelationship: "",
      YOE: "",
      days: "",
      startTime: "",
      endTime: "",
      ratePerHour: "",
      ratePerJob: "",
    },
    validationSchema: handyManCYPSchema,
    onSubmit: (values) => {
      if (!profileImage) {
        window.alert(formik.touched.profileImage && formik.errors.profileImage);
        return;
      }
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
      setFileInput(file);
      setProfileImage(URL.createObjectURL(file)); // Display image immediately
      formik.setFieldValue("profileImage", file);
    }
  };

  const resolveAccountDetails = async () => {
    const { accountNumber, bankCode } = formik.values;
    console.log(accountNumber, bankCode);

    if (accountNumber && bankCode) {
      setLoadingAccountName(true);
      console.log(loadingAccountName);

      try {
        const response = await axios.get(
          `https://api.paystack.co/bank/resolve?account_number=${accountNumber}&bank_code=${bankCode}`,
          {
            headers: {
              Authorization: `Bearer sk_test_0b939b05baed1f9f688c7f074450b4c062baac54`, // Use your test secret key here
              "Content-Type": "application/json",
            },
          }
        );

        setAccountName(response.data.data.account_name);

        // Set the accountName field in Formik with the correct value
        if (response.data.data) {
          formik.setFieldValue("accountName", response.data.data.account_name);
        }

        setError(null);
      } catch (err: unknown) {
        console.error("Error fetching account details:", err);

        if (axios.isAxiosError(err)) {
          if (err.message === "Network Error") {
            formik.setFieldError("accountNumber", "Network issue. Try again.");
          } else if (err.response?.status === 422) {
            formik.setFieldError("accountNumber", "Invalid account details.");
          } else if (err.response?.status === 401) {
            setError("Unauthorized request. Check your API key.");
          } else {
            setError("Unexpected error occurred. Please try again.");
          }
        } else {
          setError("Unknown error occurred.");
        }

        setAccountName("");
      } finally {
        setLoadingAccountName(false);
      }
    }
  };

  // Trigger the resolve function when accountNumber or bank changes
  useEffect(() => {
    setAccountName(""); // Reset account name before each check
    if (formik.values.accountNumber.length === 10 && formik.values.bankCode) {
      resolveAccountDetails(); // Resolve account details when conditions are met
    }
  }, [formik.values.accountNumber, formik.values.bankCode]);

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

        <form className="w-full h-full" onSubmit={formik.handleSubmit}>
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
              name="aboutMe"
              id="aboutMe"
              value={formik.values.aboutMe}
              onChange={formik.handleChange}
            ></textarea>
            {formik.touched.aboutMe && formik.errors.aboutMe && (
              <div className="text-xs text-red-500">
                {formik.errors.aboutMe}
              </div>
            )}
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
              {formik.touched.serviceDescription &&
                formik.errors.serviceDescription && (
                  <div className="text-xs text-red-500">
                    {formik.errors.serviceDescription}
                  </div>
                )}
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

              {formik.touched.selectedCategories &&
              formik.errors.selectedCategories ? (
                <div className="text-xs text-red-500">
                  {formik.errors.selectedCategories}
                </div>
              ) : null}
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

                <div className="text-xs text-red-500 min-h-4">
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
                  value={formik.values.accountNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder={"Enter account number"}
                  maxLength={10}
                />

                <div className="text-xs text-red-500 min-h-[16px]">
                  {formik.touched.accountNumber && formik.errors.accountNumber}
                </div>
              </div>

              <div className="flex flex-col gap-1 font-lato">
                <label className="text-[14px] sm:text-[16px] leading-[16.8px] sm:leading-6 font-medium text-[#101928]">
                  Account Name
                </label>
                <input
                  className={`h-9 sm:h-14 w-full border-[#98A2B3] border rounded-[6px] px-3 sm:px-4 placeholder:text-[12px] sm:placeholder:text-[14px] placeholder:leading-5 sm:placeholder:leading-[16.8px] text-[12px] sm:text-[14px] leading-5 sm:leading-[16.8px] focus:outline-none focus:border-2 focus:border-[#008080] ${formik.touched.accountName && formik.errors.accountName ? "border-red-500" : ""}`}
                  // type={type}
                  name="accountName"
                  id="accountName"
                  value={formik.values.accountName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder={""}
                  disabled
                />

                <div className="text-xs text-red-500 min-h-[16px]">
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

                <div className="text-xs text-red-500 min-h-[16px]">
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder={"Enter guarantor’s Number"}
                />

                <div className="text-xs text-red-500 min-h-[16px]">
                  {formik.touched.guarantorsPhoneNumber &&
                    formik.errors.guarantorsPhoneNumber}
                </div>
              </div>

              <div className="flex flex-col gap-1 font-lato">
                <label className="text-[14px] sm:text-[16px] leading-[16.8px] sm:leading-6 font-medium text-[#101928]">
                  Guarantor’s Relationship
                </label>
                <input
                  className={`h-9 sm:h-14 w-full border-[#98A2B3] border rounded-[6px] px-3 sm:px-4 placeholder:text-[12px] sm:placeholder:text-[14px] placeholder:leading-5 sm:placeholder:leading-[16.8px] text-[12px] sm:text-[14px] leading-5 sm:leading-[16.8px] focus:outline-none focus:border-2 focus:border-[#008080] ${formik.touched.guarantorsRelationship && formik.errors.guarantorsRelationship ? "border-red-500" : ""}`}
                  // type={type}
                  name="guarantorsRelationship"
                  id="guarantorsRelationship"
                  value={formik.values.guarantorsRelationship}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder={"Enter guarantor’s relationship"}
                />

                <div className="text-xs text-red-500 min-h-[16px]">
                  {formik.touched.guarantorsRelationship &&
                    formik.errors.guarantorsRelationship}
                </div>
              </div>

              <div className="flex flex-col gap-1 font-lato">
                <label className="text-[14px] sm:text-[16px] leading-[16.8px] sm:leading-6 font-medium text-[#101928]">
                  Years of Experience
                </label>
                <input
                  className={`h-9 sm:h-14 w-full border-[#98A2B3] border rounded-[6px] px-3 sm:px-4 placeholder:text-[12px] sm:placeholder:text-[14px] placeholder:leading-5 sm:placeholder:leading-[16.8px] text-[12px] sm:text-[14px] leading-5 sm:leading-[16.8px] focus:outline-none focus:border-2 focus:border-[#008080] ${formik.touched.YOE && formik.errors.YOE ? "border-red-500" : ""}`}
                  // type={type}
                  name="YOE"
                  id="YOE"
                  value={formik.values.YOE}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder={"Enter years of experience"}
                />

                <div className="text-xs text-red-500 min-h-[16px]">
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

            <div className="flex flex-col items-start w-full sm:gap-[25px]  sm:flex-row sm:items-center gap-4">
              <div className="w-full sm:w-1/2">
                <label className="block text-[#101928] sm:text-[16px] text-[14px] sm:leading-6 leading-[16.8px] font-medium mb-2">
                  Days
                </label>
                <div className="relative w-full">
                  <select
                    className={`h-9 sm:h-14 w-full border-[#98A2B3] border rounded-[6px] px-4 placeholder:text-[14px] sm:text-[14px] text-[12px] sm:leading-[16.8px] leading-5 focus:outline-none focus:border-2 focus:border-[#008080] appearance-none bg-white ${formik.touched.days && formik.errors.days ? "border-red-500" : ""}`}
                    name="days"
                    id="days"
                    value={formik.values.days}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option className="text-[#98A2B3]" value="" disabled>
                      Select your Working day
                    </option>
                    <option>Sunday</option>
                    <option>Monday</option>
                    <option>Tuesday</option>
                    <option>Wednesday</option>
                    <option>Thursday</option>
                    <option>Friday</option>
                    <option>Saturday</option>
                  </select>
                  <div className="absolute inset-y-0 flex items-center pointer-events-none right-3">
                    <img src={dropDown} alt="dropdown" />
                  </div>
                </div>
                <div className="text-xs text-red-500 min-h-4">
                  {formik.touched.days && formik.errors.days}
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

                  <div className="text-xs text-red-500 min-h-4">
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

                  <div className="text-xs text-red-500 min-h-4">
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
                  Rate per hour
                </label>
                <div className="relative w-full sm:max-w-[282px]">
                  <input
                    className={`sm:max-w-[282px] sm:h-14 h-9 w-full border-[#98A2B3] border rounded-[6px] pl-9 pr-3 sm:placeholder:text-[14px] placeholder:text-[12px] sm:placeholder:leading-[16.8px] placeholder:leading-5 sm:text-[14px] text-[12px] sm:leading-[16.8px] leading-5 focus:outline-none focus:border-2 focus:border-[#008080] ${formik.touched.ratePerHour && formik.errors.ratePerHour ? "border-red-500" : ""}`}
                    name="ratePerHour"
                    id="ratePerHour"
                    value={formik.values.ratePerHour}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <p className="absolute inset-y-0 flex items-center cursor-pointer right-3 text-[#667185] text-[14px] leading-[20.3px]">
                    ₦
                  </p>
                </div>

                <div className="text-xs text-red-500 min-h-4">
                  {formik.touched.ratePerHour && formik.errors.ratePerHour}
                </div>
              </div>

              <div className="flex flex-col w-full gap-1 font-lato">
                <label className="sm:text-[16px] text-[14px] sm:leading-6 leading-[16.8px] font-medium text-[#101928]">
                  Rate per job
                </label>
                <div className="relative w-full sm:max-w-[282px]">
                  <input
                    className={`sm:max-w-[282px] sm:h-14 h-9 w-full border-[#98A2B3] border rounded-[6px] pl-9 pr-3 sm:placeholder:text-[14px] placeholder:text-[12px] sm:placeholder:leading-[16.8px] placeholder:leading-5 sm:text-[14px] text-[12px] sm:leading-[16.8px] leading-5 focus:outline-none focus:border-2 focus:border-[#008080] ${formik.touched.ratePerJob && formik.errors.ratePerJob ? "border-red-500" : ""}`}
                    name="ratePerJob"
                    id="ratePerJob"
                    value={formik.values.ratePerJob}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <p className="absolute inset-y-0 flex items-center cursor-pointer right-3 text-[#667185] text-[14px] leading-[20.3px]">
                    ₦
                  </p>
                </div>

                {/* Reserve space for error messages */}
                <div className="text-xs text-red-500 min-h-4">
                  {formik.touched.ratePerJob && formik.errors.ratePerJob}
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
