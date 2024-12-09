const CompleteProfileForm = () => {
  return (
    <form className="mt-6 lg:mb-20">
      <div className="lg:flex items-center gap-6">
        <div className="w-full">
          <label
            htmlFor="street"
            className="font-medium text-sm tracking-wide lg:text-base"
          >
            Street Address
          </label>
          <br />
          <div className="h-10 lg:h-14 px-3 lg:px-4 border border-[#D0D5DD] rounded-md">
            <input
              type="text"
              name="street"
              id="street"
              placeholder="Enter your street address"
              className="w-full h-full outline-none text-xs lg:text-sm"
            />
          </div>
        </div>
        <div className="mt-6 lg:mt-0 w-full">
          <label
            htmlFor="state"
            className="font-medium text-sm tracking-wide lg:text-base"
          >
            Select State
          </label>
          <br />
          <div className="h-10 lg:h-14 px-3 lg:px-4 border border-[#D0D5DD] rounded-md">
            <input
              type="text"
              name="state"
              id="state"
              placeholder="Enter your street address"
              className="w-full h-full outline-none text-xs lg:text-sm"
            />
          </div>
        </div>
      </div>
      <div className="mt-6 lg:flex items-center">
        <div className="w-full">
          <label htmlFor="LGA" className="font-medium text-sm tracking-wide">
            Select LGA
          </label>
          <br />
          <div className="h-10 lg:h-14 px-3 lg:px-4 border border-[#D0D5DD] rounded-md">
            <input
              type="text"
              name="LGA"
              id="LGA"
              className="w-full h-full outline-none text-xs"
            />
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
            />
          </div>
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
            />
          </div>
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
            />
          </div>
        </div>
        <div className="mt-6 lg:mt-0 w-full">
          <label
            htmlFor="state"
            className="font-medium text-sm lg:text-base tracking-wide"
          >
            Gender
          </label>
          <br />
          <div className="h-10 lg:h-14 px-3 lg:px-4 border border-[#D0D5DD] rounded-md">
            <input
              type="text"
              name="gender"
              id="gender"
              placeholder=""
              className="w-full h-full outline-none text-xs lg:text-sm"
            />
          </div>
        </div>
      </div>
      <div className="mt-6 lg:mt-12 w-full flex items-center justify-center">
        <button
          type="submit"
          className="bg-[#008080] h-8 lg:h-14 rounded-lg w-full lg:w-[385px] text-white font-semibold text-xs lg:text-lg"
        >
          Done
        </button>
      </div>
    </form>
  );
};

export default CompleteProfileForm;
