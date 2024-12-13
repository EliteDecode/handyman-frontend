import useCompleteProfileForm from "@/hooks/formhooks/useCompleteProfileForm";

const CompleteProfileForm = () => {
  const { formik, isLoading, getLGAs, statefile } = useCompleteProfileForm();

  return (
    <form className="mt-6 lg:mb-20" onSubmit={formik.handleSubmit}>
      <div className="lg:flex items-center gap-6">
        <div className="w-full">
          <label
            htmlFor="address"
            className="font-medium text-sm tracking-wide lg:text-base"
          >
            Street Address
          </label>
          <br />
          <div className="h-10 lg:h-14 px-3 lg:px-4 border border-[#D0D5DD] rounded-md">
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Enter your street address"
              className="w-full h-full outline-none text-xs lg:text-sm"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address}
            />
          </div>
          {formik.touched.address && formik.errors.address ? (
            <div className="text-red-500 text-[10px] lg:text-xs font-semibold">
              {formik.errors.address}
            </div>
          ) : null}
        </div>
        <div className="mt-6 lg:mt-0 w-full">
          <label
            htmlFor="state"
            className="font-medium text-sm tracking-wide lg:text-base"
          >
            Select State
          </label>
          <br />
          <div className="h-10 lg:h-14 border p border-[#D0D5DD] rounded-md">
            <select
              name="state"
              id="state"
              className="w-full h-full px-3 lg:px-4 text-xs lg:text-sm outline-none"
              aria-placeholder="Please select state"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.state}
            >
              <option value=""></option>
              {statefile.map((val, i) => (
                <option key={i} value={val.state}>
                  {val.state}
                </option>
              ))}
            </select>
            {formik.touched.state && formik.errors.state ? (
              <div className="text-red-500 text-[10px] lg:text-xs font-semibold">
                {formik.errors.state}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="mt-6 lg:flex items-center">
        <div className="w-full">
          <label htmlFor="LGA" className="font-medium text-sm tracking-wide">
            Select LGA
          </label>
          <br />
          <div className="h-10 lg:h-14 border border-[#D0D5DD] rounded-md">
            <select
              disabled={!formik.values.state}
              name="lga"
              id="lga"
              className="w-full h-full px-3 lg:px-4 text-xs lg:text-sm outline-none"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lga}
            >
              <option value=""></option>
              {getLGAs(formik.values.state).map((val, i) => (
                <option key={i} value={val}>
                  {val}
                </option>
              ))}
            </select>
            {formik.touched.lga && formik.errors.lga ? (
              <div className="text-red-500 text-[10px] lg:text-xs font-semibold">
                {formik.errors.lga}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="mt-6 lg:flex items-center gap-6">
        <div className="w-full">
          <label
            htmlFor="firstName"
            className="font-medium text-sm tracking-wide lg:text-base"
          >
            First Name
          </label>
          <br />
          <div className="h-10 lg:h-14 px-3 lg:px-4 border border-[#D0D5DD] rounded-md">
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter your first name"
              className="w-full h-full outline-none text-xs lg:text-sm"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstname}
            />
          </div>
          {formik.touched.firstname && formik.errors.firstname ? (
            <div className="text-red-500 text-[10px] lg:text-xs font-semibold">
              {formik.errors.firstname}
            </div>
          ) : null}
        </div>
        <div className="mt-6 lg:mt-0 w-full">
          <label
            htmlFor="lastName"
            className="font-medium text-sm lg:text-base tracking-wide"
          >
            Last Name
          </label>
          <br />
          <div className="h-10 lg:h-14 px-3 lg:px-4 border border-[#D0D5DD] rounded-md">
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Enter your last name"
              className="w-full h-full outline-none text-xs lg:text-sm"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastname}
            />
          </div>
          {formik.touched.lastname && formik.errors.lastname ? (
            <div className="text-red-500 text-[10px] lg:text-xs font-semibold">
              {formik.errors.lastname}
            </div>
          ) : null}
        </div>
      </div>
      <div className="mt-6 lg:flex items-center gap-6">
        <div className="w-full">
          <label
            htmlFor="phone"
            className="font-medium text-sm lg:text-sm tracking-wide"
          >
            Phone number
          </label>
          <br />
          <div className="h-10 lg:h-14 px-3 lg:px-4 border border-[#D0D5DD] rounded-md">
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              className="w-full h-full outline-none text-xs lg:text-sm"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
          </div>
          {formik.touched.phone && formik.errors.phone ? (
            <div className="text-red-500 text-[10px] lg:text-xs font-semibold">
              {formik.errors.phone}
            </div>
          ) : null}
        </div>
        <div className="mt-6 lg:mt-0 w-full">
          <label
            htmlFor="gender"
            className="font-medium text-sm lg:text-base tracking-wide"
          >
            Gender
          </label>
          <br />
          <div className="h-10 lg:h-14 border border-[#D0D5DD] rounded-md">
            <select
              name="gender"
              id="gender"
              className="w-full h-full px-3 lg:px-4 text-xs lg:text-sm outline-none"
              aria-placeholder="Please select state"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.gender}
            >
              <option value=""></option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          {formik.touched.gender && formik.errors.gender ? (
            <div className="text-red-500 text-[10px] lg:text-xs font-semibold">
              {formik.errors.gender}
            </div>
          ) : null}
        </div>
      </div>
      <div className="mt-6 lg:mt-12 w-full flex items-center justify-center">
        <button
          type="submit"
          disabled={!formik.dirty || !formik.isValid || isLoading}
          className={`${!formik.dirty || !formik.isValid || isLoading ? "bg-[#D0D5DD]" : "bg-[#008080]"} w-full lg:w-[385px]  text-white rounded-lg h-10 lg:h-14 px-6 mt-8 lg:mt-16 text-xs lg:text-base lg:font-semibold outline-none`}
        >
          {isLoading ? "Please wait..." : "Done"}
        </button>
      </div>
    </form>
  );
};

export default CompleteProfileForm;
