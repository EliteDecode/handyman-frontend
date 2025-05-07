import { useParams } from "react-router-dom";
import profileImg from "@/assets/images/dashboard-teleconsultation.png";
import map from "@/assets/images/map.png";
import phone from "@/assets/icons/phoneBlack.svg";
import chat from "@/assets/icons/chat.svg";
import AppointmentInfo from "@/components/HandymanDashboard/Services/AppointmentInfo";
import { useState } from "react";
import InfoItem from "@/components/HandymanDashboard/Services/InfoItem";
import StartNavigationModal from "@/components/HandymanDashboard/Services/StartNavigationModal";
import NotifyDelayModal from "@/components/HandymanDashboard/Services/NotifyDelayModal";

function ServiceDetailPage() {
  const { id } = useParams();
  const [isToggled, setIsToggled] = useState(false);
  const [loadMap, setLoadMap] = useState(false);
  const [startNavigation, setStartNavigation] = useState(false);
  const [notifyDelay, setNotifyDelay] = useState(false);

  const handleStartNavigation = () => {
    setStartNavigation(true);
  };

  const handleOpenMap = () => {
    setLoadMap(true);
  };

  const handleNotifyDelay = () => {
    setNotifyDelay(true);
  };

  console.log(id);

  const toggleSwitch = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      <div className="p-6 space-y-6 font-lato">
        <div className="flex items-center justify-between">
          <div className="flex flex-row gap-2">
            <img
              src={profileImg}
              alt="Profile"
              className="md:w-[60px] md:h-[60px] w-8 h-8 rounded-full object-cover"
            />
            <p className="text-[14px] leading-[100%] md:text-[20px] md:leading-6 font-semibold text-[#3C3C3C]">
              Amina Ikechukwu
            </p>
          </div>

          <div className="flex flex-row md:gap-8 gap-[22px]">
            <img
              src={phone}
              alt="phone"
              className="w-5 h-5 md:w-full md:h-full"
            />
            <img
              src={chat}
              alt="chat"
              className="w-5 h-5 md:w-full md:h-full"
            />
          </div>
        </div>

        <div
          className="flex flex-col gap-4 p-6 bg-[#F9FAFB] rounded-xl"
          style={{ boxShadow: "0px 4px 12px 0px rgba(16, 24, 40, 0.08)" }}
        >
          <h1 className="md:text-[24px] text-[14px] leading-[100%] text-[#191919] font-semibold">
            Plumbing Repair
          </h1>
          <div className="flex flex-col flex-wrap items-start justify-between gap-6 md:items-center md:flex-row">
            <AppointmentInfo
              label="Appointment Time & Date:"
              value="11/05/2024 10:45am"
            />

            <AppointmentInfo
              label="Location:"
              value="123 Palm Street, Lekki Phase 1, Lagos"
            />

            <AppointmentInfo
              label="Estimated Time of Travel:"
              value="1 Hour 30minutes"
            />

            <AppointmentInfo label="Documents Required:" value="ID Card" />
          </div>
        </div>

        <div className="flex flex-col gap-8 md:gap-12">
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-[10px] text-[#3C3C3C]">
              <h1 className="md:text-[24px] text-[14px] leading-[100%] font-semibold">
                Enable Real-Time Tracking
              </h1>
              <p className="md:text-[16px] text-[12px] md:leading-[18px] leading-5 tracking-2-percent font-medium">
                Allow customers track your location for an accurate ETA
              </p>
            </div>

            <div
              className={`md:w-[44px] w-9 md:h-[24px] h-5 rounded-[12px] flex items-center cursor-pointer px-[2px] ${isToggled ? "bg-[#008080]" : "bg-white border border-[#008080]"}`}
              onClick={toggleSwitch}
            >
              <div
                className={`rounded-full transition-all duration-300 ease-in-out
                  ${isToggled ? "bg-white" : "bg-[#008080]"}
                  w-[16px] h-[16px] md:w-5 md:h-5
                  ${isToggled ? "translate-x-[10px] md:translate-x-[20px]" : "translate-x-0"}
                    `}
                style={{
                  boxShadow: "0px 1px 3px 0px #1018281A",
                }}
              ></div>
            </div>
          </div>

          {!loadMap && (
            <div className="flex items-center justify-center">
              <button
                className="max-w-[276px] md:h-14 h-8 bg-[#008080] w-full rounded-md text-[#FFFFFF] md:text-[18px] text-[12px] md:leading-6 leading-[14px] font-semibold"
                onClick={() => handleOpenMap()}
              >
                Mark as En Route
              </button>
            </div>
          )}
        </div>

        {loadMap && (
          <div className="flex flex-col gap-6">
            <h1 className="md:text-[24px] text-[14px] leading-[100%] font-semibold text-[#191919]">
              Route
            </h1>

            <div className="w-full max-h-[361.74px] h-full relative">
              <img src={map} alt="map" className="object-cover w-full h-full" />

              <div className="md:absolute bottom-6 inset-x-6 md:h-[92px] h-fit flex md:flex-row flex-col gap-[10px] items-center justify-between bg-[#FFFFFF] rounded-md md:px-4 w-auto md:py-0 py-4">
                <div className="flex items-center justify-between w-full md:max-w-[464px] max-w-full gap-4">
                  <InfoItem
                    label="DATE & TIME"
                    value="Wed, 21st November, 2024 : 03:00PM"
                  />
                  <InfoItem label="DISTANCE" value="3 km" />
                  <InfoItem label="TIME" value="12 mins" />
                </div>

                <div className="flex items-center max-w-[343px] w-full gap-4">
                  <button
                    className="w-full sm:max-w-[178px] bg-[#008080] md:h-14 h-[30px] rounded-md text-white md:text-[18px] text-[12px] md:leading-6 leading-[14px] font-semibold"
                    onClick={handleStartNavigation}
                  >
                    Start Navigation
                  </button>

                  <button
                    className="w-full sm:max-w-[149px] border-[1.5px] border-[#008080] md:h-14  h-[30px] rounded-md  md:text-[18px] text-[12px] md:leading-6 leading-[14px] text-[#008080] font-semibold"
                    onClick={handleNotifyDelay}
                  >
                    Notify Delay
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <StartNavigationModal
        isOpen={startNavigation}
        onClose={() => setStartNavigation(false)}
        onConfirm={() => {
          setStartNavigation(false);
          console.log("Navigation started!"); // Replace this with your logic
        }}
      />

      <NotifyDelayModal
        isOpen={notifyDelay}
        onClose={() => setNotifyDelay(false)}
        onConfirm={() => {
          setNotifyDelay(false);
          console.log("Delay started!"); // Replace this with your logic
        }}
      />
    </>
  );
}

export default ServiceDetailPage;
