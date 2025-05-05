import profile from "@/assets/icons/profile.svg";
import edit from "@/assets/icons/editIcon.svg";
import trash from "@/assets/icons/redTrash.svg";
import dropDown from "@/assets/icons/dropDown.svg";
import BankSelector from "@/components/general/BankSelector";
import { useFormik } from "formik";

export default function PersonalInformation() {
  const formik = useFormik({
    initialValues: {
      bankName: "",
      accountNumber: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="flex flex-col gap-6 p-6 shadow-custom">
      <div className="sm:h-14 h-8 w-full border-b border-[#98A2B3] sm:text-[24px] text-[16px] sm:leading-6 leading-[100%] font-merriweather font-bold">
        Personal Information
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <h1 className="text-[#008080] md:text-[18px] text-[16px] md:leading-[30px] leading-[18px] font-medium tracking-2-percent">
            Profile Photo{" "}
          </h1>

          <div className="flex flex-col items-center gap-6 sm:flex-row">
            <div className="sm:w-[120px] sm:h-[120px] w-[120px] h-[120px]">
              <img
                src={profile}
                alt="profile"
                className={`object-cover w-full h-full rounded-full border-1 border-[#008080] `}
              />
            </div>

            <div className="flex flex-row items-center gap-6 font-lato">
              <button className="w-[108px] h-8 gap-2 border-[1.5px] border-[#008080] flex items-center justify-center rounded-[8px]">
                <img src={edit} alt="edit" className="w-4 h-4" />
                <p className="text-[#008080] text-[12px] leading-[14px] font-semibold">
                  Edit Photo
                </p>
              </button>

              <button className="w-[108px] h-8 gap-2 border-[1.5px] border-[#B3261E] flex items-center justify-center rounded-[8px]">
                <img src={trash} alt="trash" className="w-4 h-4" />
                <p className="text-[#B3261E] text-[12px] leading-[14px] font-semibold">
                  Delete Photo
                </p>
              </button>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex flex-col w-full gap-1">
            <label className="sm:text-[16px] text-[14px] sm:leading-6 leading-5 font-medium font-lato text-[#191919]">
              About me
            </label>
            <textarea
              className="w-full h-[118px] p-4 resize-none rounded-[8px] border border-[#C9CDD3] text-[16px] leading-[18px] font-lato placeholder:text-[#98A2B3] focus:outline-none focus:ring focus:ring-[#008080]"
              placeholder="Enter a description..."
              name="aboutMe"
              id="aboutMe"
              //   value={formik.values.aboutMe}
              //   onChange={formik.handleChange}
            ></textarea>

            <div className="text-xs text-[#B3261E] min-h-4">
              {/* {formik.touched.aboutMe && formik.errors.aboutMe} */}
            </div>
          </div>

          <div className="flex flex-col w-full gap-1">
            <label className="sm:text-[16px] text-[14px] sm:leading-6 leading-5 font-medium font-lato text-[#191919]">
              Full Name
            </label>
            <input
              className="w-full md:h-14 h-9 rounded-[8px] px-4 border border-[#C9CDD3] text-[16px] leading-[18px] font-lato placeholder:text-[#98A2B3] disabled:text-[#98A2B3] disabled:bg-[#F0F2F5] focus:outline-none focus:ring focus:ring-[#008080]"
              placeholder=""
              value={"Ifeanyi Nwafor"}
              disabled
            />

            <div className="text-xs text-[#B3261E] min-h-4">
              {/* {formik.touched.aboutMe && formik.errors.aboutMe} */}
            </div>
          </div>

          <div className="flex flex-col w-full gap-1">
            <label className="sm:text-[16px] text-[14px] sm:leading-6 leading-5 font-medium font-lato text-[#191919]">
              Email Address
            </label>
            <input
              className="w-full md:h-14 h-9 rounded-[8px] px-4 border border-[#C9CDD3] text-[16px] leading-[18px] font-lato placeholder:text-[#98A2B3] disabled:text-[#98A2B3] disabled:bg-[#F0F2F5] focus:outline-none focus:ring focus:ring-[#008080]"
              placeholder=""
              value={"Ifeanyinwafor2024@gmail.com"}
              disabled
            />

            <div className="text-xs text-[#B3261E] min-h-4">
              {/* {formik.touched.aboutMe && formik.errors.aboutMe} */}
            </div>
          </div>

          <div className="flex flex-col w-full gap-1">
            <label className="sm:text-[16px] text-[14px] sm:leading-6 leading-5 font-medium font-lato text-[#191919]">
              Phone Number
            </label>
            <input
              className="w-full md:h-14 h-9 rounded-[8px] px-4 border border-[#C9CDD3] text-[16px] leading-[18px] font-lato placeholder:text-[#98A2B3] disabled:text-[#98A2B3] disabled:bg-[#F0F2F5] focus:outline-none focus:ring focus:ring-[#008080]"
              placeholder=""
              value={"08012345678"}
              disabled
            />

            <div className="text-xs text-[#B3261E] min-h-4">
              {/* {formik.touched.aboutMe && formik.errors.aboutMe} */}
            </div>
          </div>
        </div>

        <hr className="border-[#98A2B3] border-t" />

        <div>
          <h1 className="text-[18px] leading-[30px] font-medium font-lato tracking-2-percent text-[#008080]">
            Bank Details <span className="text-red-500">*</span>
          </h1>

          <div className="flex flex-col w-full gap-1 font-lato">
            <label className="sm:text-[16px] text-[14px] sm:leading-6 leading-[16.8px] font-medium text-[#101928]">
              Bank Name
            </label>
            <BankSelector
              formik={formik} // Pass formik to the BankSelector
              dropDown={dropDown} // Path to your dropdown icon
            />

            <div className="text-xs text-[#B3261E] min-h-4">
              {/* {formik.touched.bankName && formik.errors.bankName} */}
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
              //   value={formik.values.accountNumber}
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
              {/* {formik.touched.accountNumber && formik.errors.accountNumber} */}
            </div>
          </div>

          <div className="flex flex-col gap-1 font-lato">
            <label className="text-[14px] sm:text-[16px] leading-[16.8px] sm:leading-6 font-medium text-[#101928]">
              Account Name
            </label>
            <input
              className={`h-9 sm:h-14 w-full border-[#98A2B3] border rounded-[6px] px-3 sm:px-4 text-[12px] sm:text-[14px] leading-5 sm:leading-[16.8px] focus:outline-none focus:border-2 focus:border-[#008080] 
                 
                      `}
              name="accountName"
              id="accountName"
              //   value={`${loadingAccountName ? "Loading account name..." : formik.values.accountName}`}
              placeholder="Fill in account details to get name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled
            />

            <div className="text-xs text-[#B3261E] min-h-[16px]">
              {/* {formik.touched.accountName && formik.errors.accountName} */}
            </div>
          </div>
        </div>

        <hr className="border-[#98A2B3] border-t" />

        <div className="">
          <h1 className="text-[18px] leading-[30px] font-medium font-lato tracking-2-percent text-[#008080]">
            Guarantor’s Details <span className="text-red-500">*</span>
          </h1>

          <div className="flex flex-col w-full gap-1">
            <label className="sm:text-[16px] text-[14px] sm:leading-6 leading-5 font-medium font-lato text-[#191919]">
              Guarantor’s name
            </label>
            <input
              className="w-full md:h-14 h-9 rounded-[8px] px-4 border border-[#C9CDD3] text-[16px] leading-[18px] font-lato placeholder:text-[#98A2B3] disabled:text-[#98A2B3] disabled:bg-[#F0F2F5] focus:outline-none focus:ring focus:ring-[#008080]"
              placeholder=""
            />

            <div className="text-xs text-[#B3261E] min-h-4">
              {/* {formik.touched.aboutMe && formik.errors.aboutMe} */}
            </div>
          </div>

          <div className="flex flex-col w-full gap-1">
            <label className="sm:text-[16px] text-[14px] sm:leading-6 leading-5 font-medium font-lato text-[#191919]">
              Guarantor’s phone number
            </label>
            <input
              className="w-full md:h-14 h-9 rounded-[8px] px-4 border border-[#C9CDD3] text-[16px] leading-[18px] font-lato placeholder:text-[#98A2B3] disabled:text-[#98A2B3] disabled:bg-[#F0F2F5] focus:outline-none focus:ring focus:ring-[#008080]"
              placeholder=""
            />

            <div className="text-xs text-[#B3261E] min-h-4">
              {/* {formik.touched.aboutMe && formik.errors.aboutMe} */}
            </div>
          </div>

          <div className="flex flex-col w-full gap-1">
            <label className="sm:text-[16px] text-[14px] sm:leading-6 leading-5 font-medium font-lato text-[#191919]">
              Guarantor’s relationship
            </label>
            <input
              className="w-full md:h-14 h-9 rounded-[8px] px-4 border border-[#C9CDD3] text-[16px] leading-[18px] font-lato placeholder:text-[#98A2B3] disabled:text-[#98A2B3] disabled:bg-[#F0F2F5] focus:outline-none focus:ring focus:ring-[#008080]"
              placeholder=""
            />

            <div className="text-xs text-[#B3261E] min-h-4">
              {/* {formik.touched.aboutMe && formik.errors.aboutMe} */}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end mt-2">
          <button className="w-[142px] h-14 bg-[#008080] rounded-md text-[#FFFFFF] text-[18px] leading-6 font-lato font-semibold">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
