import { motion } from "framer-motion";
import { ArrowLeft, BadgeCheck } from "lucide-react";
import MapDetails from "@/components/CustomerDashboard/MapDetails";
import JobDetailsForm from "@/components/CustomerDashboard/JobDetailsForm";
import useJobDetailsForm from "@/hooks/dashboardHook/useJobDetailsForm";
import Modal from "@/components/general/Modal";
import { Link } from "react-router-dom";

const JobDetails = () => {
  const { getLGAs, navigate, statefile, formik, setShowModal, showModal } =
    useJobDetailsForm();

  return (
    <motion.section
      className="p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="w-full lg:hidden">
          <button
            onClick={() => navigate(-1)}
            className="outline-none flex items-center gap-2 mb-5 font-semibold text-textBody"
          >
            <ArrowLeft className="w-5 h-5" /> Back
          </button>
        </div>
        <div className="">
          <h1 className="border-b border-[#98A2B3] font-merriweather text-sm lg:text-2xl font-bold text-textHeader pb-2 lg:pb-6">
            1. Job description
          </h1>
          <div className="mt-12">
            <div className="">
              <label htmlFor="service" className="text-[#101928] font-medium">
                Service
              </label>
              <input
                name="service"
                id="service"
                type="text"
                className="w-full outline-none border border-[#D0D5DD] bg-[#F0F2F5] py-3 px-4 lg:p-4 rounded-md text-[#98A2B3] text-sm "
                disabled
                value="Electrical Work"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="note" className="text-[#101928] font-medium">
                Additional note
              </label>
              <br />
              <textarea
                placeholder="Explain what other thing or instruction you think the handyman might need to know eg. Bringing his ID card to allow entry at the estate gate etc."
                name="note"
                id="note"
                className="outline-none border border-[#D0D5DD] resize-none h-[195px] w-full rounded-md p-4 text-sm"
              ></textarea>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h1 className="border-b border-[#98A2B3] font-merriweather text-sm lg:text-2xl font-bold text-textHeader pb-6">
            2. Address information
          </h1>
          <div className="">
            {/* <LoadScript googleMapsApiKey={import.meta.env.VITE_MAP_API_KEY}>
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript> */}
            <MapDetails />
          </div>
          <JobDetailsForm
            getLGAs={getLGAs}
            navigate={navigate}
            statefile={statefile}
            formik={formik}
            setShowModal={setShowModal}
          />
        </div>

        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          maxWidth={520}
        >
          <div className="flex w-full justify-center items-center flex-col ">
            <BadgeCheck
              className="w-[120px] h-[124px] text-white"
              fill="#008080"
            />
            <p className="font-merriweather text-2xl text-textHeader font-bold text-center max-w-[460px] mt-8">
              Your Appointment With Ifeanyi Nwafor Has Been Successfully
              Scheduled.
            </p>
            <Link
              to="/dashboard"
              onClick={() => setShowModal(false)}
              className={`outline-none text-center border mt-8 rounded-lg text-white py-4 px-6 w-full text-lg font-semibold hover:bg-[#80BFBF] hover:border-[#80BFBF] duration-300 bg-primary border-primary active:border-[#002B2B] active:bg-[#002B2B]`}
            >
              Proceed to make payments
            </Link>
          </div>
        </Modal>
      </div>
    </motion.section>
  );
};

export default JobDetails;
