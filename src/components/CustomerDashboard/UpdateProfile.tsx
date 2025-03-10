import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const UpdateProfile = ({ isProfileUpdated, forceUpdateProfileStatus }: any) => {
  return (
    <section>
      {isProfileUpdated !== true && (
        <div
          onClick={() => forceUpdateProfileStatus(true)}
          className="fixed bg-black opacity-30 w-full h-full top-0 left-0 z-10"
        ></div>
      )}
      <motion.div
        className="fixed inset-0 m-auto w-[320px] lg:w-[575px]  h-fit p-6 lg:p-8 bg-white z-50 rounded-xl"
        initial={{ y: "-250%" }}
        animate={{ y: isProfileUpdated !== true ? "0%" : "-250%" }}
      >
        <div className="flex flex-col items-center justify-between w-full">
          <div className="mx-auto text-textHeader">
            <h2 className="font-merriweather font-bold text-base lg:text-2xl text-center max-w-[442px] flex items-center justify-center">
              Complete Your Profile for a Better Experience
            </h2>
          </div>
          <p className="text-xs lg:text-lg text-center text-textBody tracking-2-percent mt-4">
            We’d love to tailor your experience! Completing your profile allows
            us to customize recommendations based on your preferences.
          </p>
          <div className="mt-10 lg:mt-16 w-full lg:w-[380px]">
            <Link
              className="bg-primary rounded-lg text-white w-full block text-center lg:py-4 py-2 text-xs lg:text-base font-semibold "
              to="/dashboard/complete-profile"
              onClick={() => forceUpdateProfileStatus(true)}
            >
              Complete Profile
            </Link>
            <button
              onClick={() => forceUpdateProfileStatus(true)}
              className="border border-primary rounded-lg mt-4 lg:mt-6 text-primary w-full block text-center  lg:py-4 py-2 text-xs lg:text-base font-semibold"
            >
              Skip for Now
            </button>
          </div>

          <p className="mt-9 text-textBody text-xs lg:text-base tracking-2-percent text-center">
            You can always complete your profile in the settings.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default UpdateProfile;
