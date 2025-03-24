import { motion } from "framer-motion";
import { Calendar, X } from "lucide-react";
// import Notification from "@/assets/icons/notifucation.svg";

const DashboardNotification = ({
  toggleNotification,
  setToggleNotification,
}: any) => {
  return (
    <div className="absolute top-16 lg:top-20 lg:right-24 right-5">
      {toggleNotification && (
        <div
          onClick={() => setToggleNotification(false)}
          className="fixed bg-black opacity-30 w-full h-full top-0 left-0 z-10"
        ></div>
      )}
      <motion.div
        className="absolute top-0 right-0 lg:right-14 w-[320px] lg:w-[585px] max-h-[700px] overflow-y-auto p-6 lg:p-8 bg-white z-10 rounded-xl"
        initial={{ y: "-250%" }}
        animate={{ y: toggleNotification ? "0%" : "-250%" }}
      >
        <div className="flex items-center justify-between gap-2 border-b pb-2">
          <div className="flex gap-4 lg:gap-6 items-center">
            <h2 className="font-merriweather font-bold text-base lg:text-2xl">
              Notifications
            </h2>
            <span className="rounded-full lg:w-8 w-6 lg:h-8 h-6 bg-[#0080800A] text-primary font-merriweather flex items-center justify-center text-xs lg:text-base">
              2
            </span>
          </div>
          <button className="outline-none ">
            <X
              className="w-4 lg:w-5"
              onClick={() => setToggleNotification(false)}
            />
          </button>
        </div>

        <div className="mt-6 lg:mt-8">
          <div className="flex gap-4 lg:gap-6 border-b px- lg:px-8 pb-2 mt-4 lg:mt-6">
            <div className="bg-[#0080800A] w-8 h-8 lg:w-10 lg:h-10 rounded-full text-primary flex items-center justify-center">
              <Calendar className="w-4 lg:-w-5" />
            </div>

            <div className="w-full">
              <div className="flex items-start justify-between w-full gap-2">
                <h2 className="font-medium text-textHeader text-[13px] lg:text-base">
                  Upcoming Appointment Reminder
                </h2>
                <span className="w-1 h-1 lg:w-2 lg:h-2 bg-primary rounded-full"></span>
              </div>
              <div className="mt-2 flex items-end justify-between gap-2">
                <p className="lg:w-[270px] w-[175px] lg:text-sm text-xs text-textBody">
                  Your appointment with Sola the Cleaner is scheduled for Dec
                  16th at 3:00 PM.
                </p>
                <span className="lg:text-xs text-[8px] text-nowrap">
                  30 min ago
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 lg:gap-6 border-b px- lg:px-8 pb-2 mt-4 lg:mt-6">
            <div className="bg-[#0080800A] w-8 h-8 lg:w-10 lg:h-10 rounded-full text-primary flex items-center justify-center">
              <Calendar className="w-4 lg:-w-5" />
            </div>

            <div className="w-full">
              <div className="flex items-start justify-between w-full gap-2">
                <h2 className="font-medium text-textHeader text-[13px] lg:text-base">
                  Upcoming Appointment Reminder
                </h2>
                <span className="w-1 h-1 lg:w-2 lg:h-2 bg-primary rounded-full"></span>
              </div>
              <div className="mt-2 flex items-end justify-between gap-2">
                <p className="lg:w-[270px] w-[175px] lg:text-sm text-xs text-textBody">
                  Your appointment with Sola the Cleaner is scheduled for Dec
                  16th at 3:00 PM.
                </p>
                <span className="lg:text-xs text-[8px] text-nowrap">
                  30 min ago
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-4 lg:gap-6 border-b px- lg:px-8 pb-2 mt-4 lg:mt-6">
            <div className="bg-[#0080800A] w-8 h-8 lg:w-10 lg:h-10 rounded-full text-primary flex items-center justify-center">
              <Calendar className="w-4 lg:-w-5" />
            </div>

            <div className="w-full">
              <div className="flex items-start justify-between w-full gap-2">
                <h2 className="font-medium text-textHeader text-[13px] lg:text-base">
                  Upcoming Appointment Reminder
                </h2>
                <span className="w-1 h-1 lg:w-2 lg:h-2 bg-primary rounded-full"></span>
              </div>
              <div className="mt-2 flex items-end justify-between gap-2">
                <p className="lg:w-[270px] w-[175px] lg:text-sm text-xs text-textBody">
                  Your appointment with Sola the Cleaner is scheduled for Dec
                  16th at 3:00 PM.
                </p>
                <span className="lg:text-xs text-[8px] text-nowrap">
                  30 min ago
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-4 lg:gap-6 border-b px- lg:px-8 pb-2 mt-4 lg:mt-6">
            <div className="bg-[#0080800A] w-8 h-8 lg:w-10 lg:h-10 rounded-full text-primary flex items-center justify-center">
              <Calendar className="w-4 lg:-w-5" />
            </div>

            <div className="w-full">
              <div className="flex items-start justify-between w-full gap-2">
                <h2 className="font-medium text-textHeader text-[13px] lg:text-base">
                  Upcoming Appointment Reminder
                </h2>
                <span className="w-1 h-1 lg:w-2 lg:h-2 bg-primary rounded-full"></span>
              </div>
              <div className="mt-2 flex items-end justify-between gap-2">
                <p className="lg:w-[270px] w-[175px] lg:text-sm text-xs text-textBody">
                  Your appointment with Sola the Cleaner is scheduled for Dec
                  16th at 3:00 PM.
                </p>
                <span className="lg:text-xs text-[8px] text-nowrap">
                  30 min ago
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* No notification block */}

        {/* <div className="py-[60px] w-full flex flex-col justify-center items-center">
          <img src={Notification} alt="icon" className="lg:w-20 w-14" />
          <div className="mt-6  items-center justify-center">
            <h2 className="font-medium text-center text-textHeader text-sm lg:text-base">
              You’re All Caught Up!
            </h2>
            <p className="text-textBody text-xs lg:text-sm font-medium">
              Check back later for updates and offers.
            </p>
          </div>
        </div> */}
      </motion.div>
    </div>
  );
};

export default DashboardNotification;
