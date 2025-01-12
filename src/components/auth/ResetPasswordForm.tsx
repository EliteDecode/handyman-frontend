import useResetPasswordForm from "@/hooks/formhooks/useResetPasswordForm";
import { Eye, EyeOff } from "lucide-react";

const ResetPasswordForm = () => {
  const {
    formik,
    isLoading,
    message,
    setToggleCPassword,
    setTogglePassword,
    toggleCPassword,
    togglePassword,
  } = useResetPasswordForm();
  return (
    <form className="mt-6 md:mt-7 lg:mt-8" onSubmit={formik.handleSubmit}>
      <div className="">
        <label
          htmlFor="password"
          className="text-sm font-medium tracking-wide lg:text-base"
        >
          Password
        </label>
        <div className="border-[#D0D5DD] border w-full px-2 lg:px-4 flex items-center gap-2 rounded-md">
          <input
            type={togglePassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Choose a password"
            className={`w-full text-xs h-8 lg:h-[58px] lg:text-sm font-medium outline-none tracking-wide`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          <button
            className="outline-none"
            onClick={() => setTogglePassword(!togglePassword)}
            type="button"
          >
            {togglePassword ? (
              <Eye color="#98A2B3" size={20} />
            ) : (
              <EyeOff color="#98A2B3" size={20} />
            )}
          </button>
        </div>
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-500 text-[10px] lg:text-xs font-semibold">
            {formik.errors.password}
          </div>
        ) : null}
      </div>
      {/* Confirm Password */}
      <div className="mt-6">
        <label
          htmlFor="confirmPassword"
          className="text-sm font-medium tracking-wide lg:text-base"
        >
          Confirm Password
        </label>
        <div className="border-[#D0D5DD] border w-full px-2 lg:px-4 flex items-center gap-2 rounded-md">
          <input
            type={toggleCPassword ? "text" : "password"}
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm password"
            className={`w-full text-xs h-8 lg:h-[58px] lg:text-sm font-medium outline-none tracking-wide`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
          />
          <button
            className="outline-none"
            onClick={() => setToggleCPassword(!toggleCPassword)}
            type="button"
          >
            {toggleCPassword ? (
              <Eye color="#98A2B3" size={20} />
            ) : (
              <EyeOff color="#98A2B3" size={20} />
            )}
          </button>
        </div>
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <div className="text-red-500 text-[10px] lg:text-xs font-semibold">
            {formik.errors.confirmPassword}
          </div>
        ) : null}
      </div>

      <div className="flex items-center justify-center">
        <button
          type="submit"
          disabled={!formik.dirty || !formik.isValid || isLoading}
          className={`${!formik.dirty || !formik.isValid || isLoading ? "bg-[#D0D5DD]" : "bg-[#008080]"} w-full lg:w-[385px]  text-white rounded-lg h-10 lg:h-14 px-6 mt-8 lg:mt-16 text-xs lg:text-base lg:font-semibold outline-none`}
        >
          {isLoading ? "Please wait..." : "Update Password"}
        </button>
      </div>
      {message && (
        <p className="text-sm text-[#B3261E] tracking-wide text-center mt-6">
          {message}
        </p>
      )}
    </form>
  );
};

export default ResetPasswordForm;
