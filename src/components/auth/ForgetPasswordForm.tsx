import useForgetPasswordForm from "@/hooks/useForgetPasswordForm";
import { Mail } from "lucide-react";

const ForgetPasswordForm = () => {
  const { formik, isLoading, message } = useForgetPasswordForm();
  return (
    <form className="mt-6 md:mt-7 lg:mt-8" onSubmit={formik.handleSubmit}>
      <div className="">
        <label
          htmlFor="email"
          className="text-sm font-medium tracking-wide lg:text-base"
        >
          Email
        </label>
        <div className="border-[#D0D5DD] border w-full px-2 lg:px-4 flex items-center gap-2 rounded-md">
          <Mail color="#98A2B3" className="w-[18px]" />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="handyman@example.com"
            className={`w-full text-xs h-8 lg:h-[58px] lg:text-sm font-medium outline-none tracking-wide`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </div>
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500 text-[10px] lg:text-xs font-semibold">
            {formik.errors.email}
          </div>
        ) : null}
      </div>

      <div className="flex items-center justify-center">
        <button
          type="submit"
          disabled={!formik.dirty || !formik.isValid || isLoading}
          className={`${!formik.dirty || !formik.isValid || isLoading ? "bg-[#D0D5DD]" : "bg-[#008080]"} w-full lg:w-[385px]  text-white rounded-lg h-10 lg:h-14 px-6 mt-8 lg:mt-16 text-xs lg:text-base lg:font-semibold outline-none`}
        >
          {isLoading ? "Please wait..." : "Reset"}
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

export default ForgetPasswordForm;
