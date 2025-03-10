import TeleconsultantImg from "@/assets/images/dashboard-teleconsultation.png";

const DashboardTeleconsultant = () => {
  return (
    <div className="pl-6 bg-dashboard-custom-gradient mt-6 rounded-lg flex justify-between items-center">
      <div className="py-4">
        <h2 className="font-bold font-merriweather lg:text-base text-[#191919] text-sm">
          Need Expert Help Quickly?
        </h2>
        <p className="mt-2 text-[#191919] lg:text-sm lg:tracking-2-percent text-[10px]">
          Book a teleconsultation with a handyman for real-time advice and
          step-by-step guidance on your fixes.
        </p>
        <button className="lg:h-14 h-[30px] rounded-lg bg-primary lg:px-6 px-4 text-white mt-4 lg:text-base text-xs outline-none duration-200 hover:bg-[#008080]/50">
          Start Teleconsultation
        </button>
      </div>
      <div className=" lg:w-[275px] w-[135px] lg:h-full h-[135px]">
        <img
          src={TeleconsultantImg}
          alt="Teleconsultant Image"
          className=" object-cover w-full h-full object-center rounded-e-lg"
        />
      </div>
    </div>
  );
};

export default DashboardTeleconsultant;
