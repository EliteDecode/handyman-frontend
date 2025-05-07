import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useFormik } from "formik";
import { changePasswordHandyManSecuritySchema } from "@/lib/schema";

export default function Security() {
  const [togglePasswordCurrentPassword, setTogglePasswordCurrentPassword] =
    useState(false);
  const [togglePasswordNewPassword, setTogglePasswordNewPassword] =
    useState(false);
  const [togglePasswordConfirmPassword, setTogglePasswordConfirmPassword] =
    useState(false);

  // Formik setup
  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: changePasswordHandyManSecuritySchema,
    onSubmit: (values) => {
      console.log(values); // Handle form submission
    },
  });

  return (
    <div className="max-h-fit h-full shadow-[0px_4px_12px_0px_rgba(16,24,40,0.08)] py-8 px-6 rounded-lg flex flex-col gap-6">
      {/* Header */}
      <div className="lg:h-14 h-8 border-b border-[#98A2B3] lg:text-[24px] lg:leading-[100%] text-[16px] leading-6 font-merriweather font-bold">
        Password and Security
      </div>

      {/* Form */}
      <form onSubmit={formik.handleSubmit} className="space-y-6">
        <div className="">
          <label
            htmlFor="currentPassword"
            className="text-[14px] leading-5 font-medium lg:text-[16px] lg:leading-[18px]"
          >
            Current Password
          </label>
          <div className="border-[#D0D5DD] border w-full px-2 lg:px-4 flex items-center gap-2 rounded-md">
            <input
              type={togglePasswordCurrentPassword ? "text" : "password"}
              name="currentPassword"
              id="currentPassword"
              placeholder="Enter your current password"
              className={`w-full text-xs h-[44px] lg:h-14 lg:text-sm font-medium outline-none tracking-wide`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.currentPassword}
            />
            <button
              className="outline-none"
              onClick={() =>
                setTogglePasswordCurrentPassword(!togglePasswordCurrentPassword)
              }
              type="button"
            >
              {togglePasswordCurrentPassword ? (
                <Eye color="#98A2B3" className="w-[17.36px]" />
              ) : (
                <EyeOff color="#98A2B3" className="w-[17.36px]" />
              )}
            </button>
          </div>
          {formik.touched.currentPassword && formik.errors.currentPassword && (
            <div className="text-red-500 text-[10px] lg:text-xs font-semibold">
              {formik.errors.currentPassword}
            </div>
          )}
        </div>

        <div className="">
          <label
            htmlFor="newPassword"
            className="text-[14px] leading-5 font-medium lg:text-[16px] lg:leading-[18px]"
          >
            New Password
          </label>
          <div className="border-[#D0D5DD] border w-full px-2 lg:px-4 flex items-center gap-2 rounded-md">
            <input
              type={togglePasswordNewPassword ? "text" : "password"}
              name="newPassword"
              id="newPassword"
              placeholder="Enter your new password"
              className={`w-full text-xs h-[44px] lg:h-14 lg:text-sm font-medium outline-none tracking-wide`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.newPassword}
            />
            <button
              className="outline-none"
              onClick={() =>
                setTogglePasswordNewPassword(!togglePasswordNewPassword)
              }
              type="button"
            >
              {togglePasswordNewPassword ? (
                <Eye color="#98A2B3" className="w-[17.36px]" />
              ) : (
                <EyeOff color="#98A2B3" className="w-[17.36px]" />
              )}
            </button>
          </div>
          <p className="md:text-[14px] text-[12px] leading-5 tracking-2-percent text-[#98A2B3]">
            Password must have 8-12 characters with a mix of uppercase,
            lowercase and numbers.
          </p>
          {formik.touched.newPassword && formik.errors.newPassword && (
            <div className="text-red-500 text-[10px] lg:text-xs font-semibold">
              {formik.errors.newPassword}
            </div>
          )}
        </div>

        <div className="">
          <label
            htmlFor="confirmPassword"
            className="text-[14px] leading-5 font-medium lg:text-[16px] lg:leading-[18px]"
          >
            Confirm Password
          </label>
          <div className="border-[#D0D5DD] border w-full px-2 lg:px-4 flex items-center gap-2 rounded-md">
            <input
              type={togglePasswordConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Re-enter New Password"
              className={`w-full text-xs h-[44px] lg:h-14 lg:text-sm font-medium outline-none tracking-wide`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
            />
            <button
              className="outline-none"
              onClick={() =>
                setTogglePasswordConfirmPassword(!togglePasswordConfirmPassword)
              }
              type="button"
            >
              {togglePasswordConfirmPassword ? (
                <Eye color="#98A2B3" className="w-[17.36px]" />
              ) : (
                <EyeOff color="#98A2B3" className="w-[17.36px]" />
              )}
            </button>
          </div>
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div className="text-red-500 text-[10px] lg:text-xs font-semibold">
              {formik.errors.confirmPassword}
            </div>
          )}
        </div>

        <div className="flex justify-end w-full">
          <button
            type="submit"
            className="sm:w-[189px] w-full md:h-14 h-[44px] font-semibold text-white md:text-[18px] md:leading-[24px] text-[14px] leading-5 bg-[#008080] rounded-lg hover:bg-[#004d4d] hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Change Password
          </button>
        </div>
      </form>
    </div>
  );
}
