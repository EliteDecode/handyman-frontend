import { Link } from "react-router-dom";
import { Mail, LockKeyhole, EyeOff } from "lucide-react";

const CustomerSignUpForm = () => {
  return (
    <div className="bg-white w-full h-fit px-6 py-6 rounded-xl mt-8">
      <div>
        <h1 className="text-[#008080] font-merriweather text-2xl font-bold text-center">
          Handyman
        </h1>
        <h2 className="font-merriweather text-[#008080] font-bold leading-6 mt-6">
          Create an account
        </h2>
        <p className="leading-5 tracking-wide text-xs mt-2">
          Already have an account?{" "}
          <Link to="/sign-in" className="text-[#008080]">
            Sign in
          </Link>
        </p>
      </div>

      <form className="mt-6">
        {/* Email */}
        <div className="">
          <label
            htmlFor="email"
            className="text-sm font-medium tracking-wide lg:text-base"
          >
            Email
          </label>
          <div className="border-[#D0D5DD] border w-full px-2 flex items-center gap-2 rounded-md">
            <Mail color="#98A2B3" />
            <input
              type="text"
              name="email"
              id="email"
              placeholder="handyman@example.com"
              className={`w-full text-xs h-8 lg:h-[58px] lg:text-sm font-medium outline-none tracking-wide`}
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // value={formik.values.email}
            />
          </div>
          {/* {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-[10px] lg:text-xs font-semibold">
              {formik.errors.email}
            </div>
          ) : null} */}
        </div>
        {/* Password */}
        <div className="mt-6">
          <label
            htmlFor="password"
            className="text-sm font-medium tracking-wide lg:text-base"
          >
            Password
          </label>
          <div className="border-[#D0D5DD] border w-full px-2 flex items-center gap-2 rounded-md">
            <LockKeyhole color="#98A2B3" />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Choose a password"
              className={`w-full text-xs h-8 lg:h-[58px] lg:text-sm font-medium outline-none tracking-wide`}
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // value={formik.values.password}
            />
            <EyeOff color="#98A2B3" />
          </div>
          {/* {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 text-[10px] lg:text-xs font-semibold">
              {formik.errors.password}
            </div>
          ) : null} */}
        </div>
        {/* Confirm Password */}
        <div className="mt-6">
          <label
            htmlFor="confirmPassword"
            className="text-sm font-medium tracking-wide lg:text-base"
          >
            Email
          </label>
          <div className="border-[#D0D5DD] border w-full px-2 flex items-center gap-2 rounded-md">
            <LockKeyhole color="#98A2B3" />
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm password"
              className={`w-full text-xs h-8 lg:h-[58px] lg:text-sm font-medium outline-none tracking-wide`}
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // value={formik.values.email}
            />
            <EyeOff color="#98A2B3" />
          </div>
          {/* {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-[10px] lg:text-xs font-semibold">
              {formik.errors.email}
            </div>
          ) : null} */}
        </div>
        {/* Terms & Conditions */}
        <div className="mt-2 flex gap-2 items-center">
          <input type="checkbox" name="terms" id="terms" className="h-[18px] w-[18px]" />
          <label
            htmlFor="terms"
            className="text-xs leading-5 tracking-wide w-[302px]"
          >
            I agree to the Handyman’s
            <Link to="/terms" className="text-[#008080]">
              {" "}
              terms & conditions, community guidelines
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="text-[#008080]">
              {" "}
              privacy policy
            </Link>
          </label>
        </div>
        {/* Submit btn */}
        <button type="submit" className="w-full bg-[#008080] text-white rounded-lg h-10 px-6 mt-8 text-xs">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default CustomerSignUpForm;
