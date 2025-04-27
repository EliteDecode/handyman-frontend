import { useState } from "react";
import { motion } from "framer-motion";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { formatDate } from "@/lib/utils";
import TimeButton from "@/components/CustomerDashboard/TimeButton";
import { appointmentTime } from "@/lib/demoData";

const CheckAvailability = () => {
  const [date, setDate] = useState<Date>(new Date(Date.now()));
  const [time, setTime] = useState<string>("");

  const handleDateChange = (value: Date) => {
    setDate(value);
  };
  console.log(formatDate(date));

  return (
    <motion.section
      className="p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="flex gap-16">
          <div className="shadow-custom px-8 py-12 rounded-xl h-fit">
            <h2 className="font-merriweather font-bold text-2xl text-textHeader">
              Check Availability
            </h2>
            <p className="mt-4 text-textBody tracking-2-percent">
              View available slots and book directly with Ifeanyi Nwafor
            </p>
            <div className="mt-6 px-12 py-6">
              <Calendar
                className="custom-calendar"
                onChange={handleDateChange}
                value={date}
                showNeighboringMonth
                prev2Label=""
                next2Label=""
                formatShortWeekday={(locale, date) =>
                  date.toLocaleDateString(locale, { weekday: "narrow" })
                }
                prevLabel={
                  <span className="hover:bg-[#0080801c] active:bg-[#0080804c] duration-300 w-8 h-7 flex items-center justify-center rounded">
                    <ChevronLeft className="w-5 h-5" />
                  </span>
                }
                nextLabel={
                  <span className="hover:bg-[#0080801c] active:bg-[#0080804c] duration-300 w-8 h-7 flex items-center justify-center rounded">
                    <ChevronRight className="w-5 h-5" />
                  </span>
                }
              />
            </div>
          </div>
          <div className="shadow-custom px-12 py-[60px] rounded-xl w-full h-fit">
            <div className="">
              <p className="font-semibold text-xl text-textBody">
                {formatDate(date)}
              </p>
              <h2 className="font-merriweather font-bold text-2xl text-textHeader mt-2">
                Select your appointment time
              </h2>

              <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,2fr))] gap-x-4 gap-y-6 w-full mt-8">
                {appointmentTime?.map((val, i) => (
                  <TimeButton
                    time={val.time}
                    available={val.available}
                    setTime={setTime}
                    key={i}
                    selectedTime={time}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex items-center gap-6">
          <button className="border border-primary rounded-lg text-primary py-4 px-6 w-full text-lg font-semibold hover:border-[#80BFBF] hover:text-[#80BFBF] active:text-[#002B2B] active:border-[#002B2B] duration-300">
            Cancel
          </button>
          <button className="border border-primary bg-primary rounded-lg text-white py-4 px-6 w-full text-lg font-semibold hover:bg-[#80BFBF] hover:border-[#80BFBF] active:bg-[#002B2B] active:border-[#002B2B] duration-300">
            Book Now
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default CheckAvailability;
