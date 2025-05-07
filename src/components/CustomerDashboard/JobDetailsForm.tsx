import { ChevronDown } from "lucide-react";
import { NavigateFunction } from "react-router-dom";

interface StateFile {
  state: string;
  lgas: string[];
}

interface JobDetailsFormProps {
  getLGAs: (state: string) => string[];
  setShowModal: (showModal: boolean) => void;
  navigate: NavigateFunction;
  formik: any;
  statefile: StateFile[];
}
const JobDetailsForm = ({
  getLGAs,
  navigate,
  statefile,
  formik,
  setShowModal,
}: JobDetailsFormProps) => {
  return (
    <form onSubmit={formik.handleSubmit} className="mt-4 w-full">
      <div className="flex flex-col lg:flex-row items-center gap-6 w-full">
        <div className="w-full">
          <label
            htmlFor="street"
            className="font-medium text-textBody text-base"
          >
            Street
          </label>
          <input
            type="text"
            name="street"
            id="street"
            className="w-full border border-[#D0D5DD] lg:h-14 h-11 p-4 rounded-md outline-none text-sm text-textBody placeholder:text-[#98A2B3]"
            placeholder="123 Palm Street"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.street}
          />
        </div>
        <div className="w-full">
          <label htmlFor="city" className="font-medium text-textBody text-base">
            City
          </label>
          <input
            type="text"
            name="city"
            id="city"
            className="w-full border border-[#D0D5DD] lg:h-14 h-11 p-4 rounded-md outline-none text-sm text-textBody placeholder:text-[#98A2B3]"
            placeholder="Lekki Phase 1"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.city}
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-6 w-full mt-4">
        <div className="w-full">
          <label
            htmlFor="country"
            className="font-medium text-textBody text-base"
          >
            Country
          </label>
          <div className="w-full border border-[#D0D5DD] lg:h-14 h-11 rounded-md relative">
            <select
              name="country"
              id="country"
              className=" w-full h-full px-4 py-2.5 lg:p-4 outline-none text-sm text-textBody placeholder:text-[#98A2B3] appearance-none"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.country}
            >
              <option disabled value="">
                Select Country
              </option>
              <option value="nigeria">Nigeria</option>
            </select>
            <ChevronDown className="absolute top-2.5 lg:top-4 right-2 w-5" />
          </div>
        </div>
        <div className="w-full">
          <label
            htmlFor="state"
            className="font-medium text-textBody text-base"
          >
            State
          </label>
          <div className="w-full border border-[#D0D5DD] lg:h-14 h-11 rounded-md relative">
            <select
              name="state"
              id="state"
              className="w-full px-4 py-2.5 lg:p-4 h-full outline-none text-sm text-textBody placeholder:text-[#98A2B3] appearance-none"
              aria-placeholder="Please select state"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.state}
            >
              <option value="" disabled>
                Select your state
              </option>
              {statefile.map((val: any, i) => (
                <option key={i} value={val.state}>
                  {val.state}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute top-2.5 lg:top-4 right-2 w-5" />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-6 w-full mt-4">
        <div className="w-full">
          <label
            htmlFor="statlgae"
            className="font-medium text-textBody text-base"
          >
            Local Government
          </label>
          <div className="w-full border border-[#D0D5DD] lg:h-14 h-11 rounded-md relative">
            <select
              name="lga"
              id="lga"
              className="w-full h-full px-4 py-2.5 lg:p-4 outline-none text-sm text-textBody placeholder:text-[#98A2B3] appearance-none"
              aria-placeholder="Please select state"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lga}
            >
              <option value="" disabled>
                {!formik.values.state
                  ? "Select your state first"
                  : "Select your LGA"}
              </option>
              {getLGAs(formik.values.state).map((val, i) => (
                <option key={i} value={val}>
                  {val}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute top-2.5 lg:top-4 right-2 w-5" />
          </div>
        </div>
        <div className="w-full">
          <label
            htmlFor="zipCode"
            className="font-medium text-textBody text-base"
          >
            Zip Code
          </label>
          <input
            type="text"
            name="zipCode"
            id="zipCode"
            className="w-full border border-[#D0D5DD] lg:h-14 h-11 p-4 rounded-md outline-none text-sm text-textBody placeholder:text-[#98A2B3]"
            placeholder="012011"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.zipCode}
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 items-center mt-14">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="outline-none border border-primary rounded-lg text-primary py-3 lg:py-4 px-6 w-full text-lg font-semibold hover:border-[#80BFBF] hover:text-[#80BFBF] active:text-[#002B2B] active:border-[#002B2B] duration-300"
        >
          Cancel
        </button>
        <button
          onClick={() => setShowModal(true)}
          disabled={!formik.isValid || !formik.dirty}
          type="submit"
          className={`outline-none text-center border  rounded-lg text-white py-3 lg:py-4 px-6 w-full text-lg font-semibold hover:bg-[#80BFBF] hover:border-[#80BFBF] duration-300 ${!formik.isValid || !formik.dirty ? "bg-[#80BFBF] border-[#80BFBF]" : "bg-primary border-primary active:border-[#002B2B] active:bg-[#002B2B]"}`}
        >
          Procced to Payment
        </button>
      </div>
    </form>
  );
};

export default JobDetailsForm;
