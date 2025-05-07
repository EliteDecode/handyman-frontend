import { useState } from "react";

export default function Notification() {
  const [isOnNewBookingRequest, setIsOnNewBookingRequest] = useState(true); // Initial state (off)
  const [isOnJobUpdates, setIsOnJobUpdates] = useState(false); // Initial state (off)
  const [isOnPaymentConfirmations, setIsOnPaymentConfirmations] =
    useState(false); // Initial state (off)
  const [isOnEmail, setIsEmail] = useState(true); // Initial state (off)
  const [isOnPushNotifications, setIsPushNotifications] = useState(true); // Initial state (off)
  const [isOnInAppNotifications, setIsInAppNotifications] = useState(true); // Initial state (off)

  const handleToggleChangeNewBookingRequest = () => {
    setIsOnNewBookingRequest((prev) => !prev);
  };
  const handleToggleChangeJobUpdates = () => {
    setIsOnJobUpdates((prev) => !prev);
  };
  const handleToggleChangePaymentConfirmations = () => {
    setIsOnPaymentConfirmations((prev) => !prev);
  };
  const handleToggleChangeEmail = () => {
    setIsEmail((prev) => !prev);
  };
  const handleToggleChangePushNotifications = () => {
    setIsPushNotifications((prev) => !prev);
  };
  const handleToggleChangeInAppNotifications = () => {
    setIsInAppNotifications((prev) => !prev);
  };

  return (
    <div className="max-h-fit h-full shadow-[0px_4px_12px_0px_rgba(16,24,40,0.08)] py-8 px-6 rounded-lg flex flex-col gap-6 font-lato">
      <div className="lg:h-14 h-fit border-b border-[#98A2B3] lg:text-[24px] lg:leading-[100%] text-[16px] leading-6 font-merriweather font-bold md:space-y-[10px] space-y-1">
        <h1>Notification Settings</h1>
        <p className="md:text-[16px] text-[12px] md:leading-[100%] leading-5 text-[#3C3C3C] tracking-2-percent font-lato font-normal">
          Stay updated with important alerts, messages and activities.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-6">
          <h1 className="text-[14px] leading-5 font-medium text-[#008080CC] tracking-2-percent">
            NOTIFICATION CATEGORIEES
          </h1>

          <div className="flex items-center justify-between">
            <p className="md:text-[18px] text-[14px] md:leading-[30px] leading-5 font-medium tracking-2-percent text-[#3C3C3C]">
              New Booking Requests
            </p>
            <div
              className={`w-[44px] h-6  rounded-[12px] ${isOnNewBookingRequest ? "bg-primary" : "bg-[#F2F4F7]"} relative cursor-pointer`}
              onClick={handleToggleChangeNewBookingRequest}
            >
              {/* Circle that moves based on isOnNewBookingRequest */}
              <div
                className={`absolute w-5 h-5 bg-white top-[2px] left-[2px] rounded-full transition-all duration-300 shadow-custom2 ${
                  isOnNewBookingRequest ? "translate-x-[20px]" : "translate-x-0"
                }`}
              ></div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="md:text-[18px] text-[14px] md:leading-[30px] leading-5 font-medium tracking-2-percent text-[#3C3C3C]">
              Job Updates
            </p>
            <div
              className={`w-[44px] h-6  rounded-[12px] ${isOnJobUpdates ? "bg-primary" : "bg-[#F2F4F7]"} relative cursor-pointer`}
              onClick={handleToggleChangeJobUpdates}
            >
              {/* Circle that moves based on isOnJobUpdates */}
              <div
                className={`absolute w-5 h-5 bg-white top-[2px] left-[2px] rounded-full transition-all duration-300 shadow-custom2 ${
                  isOnJobUpdates ? "translate-x-[20px]" : "translate-x-0"
                }`}
              ></div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="md:text-[18px] text-[14px] md:leading-[30px] leading-5 font-medium tracking-2-percent text-[#3C3C3C]">
              Payment Confirmations
            </p>
            <div
              className={`w-[44px] h-6  rounded-[12px] ${isOnPaymentConfirmations ? "bg-primary" : "bg-[#F2F4F7]"} relative cursor-pointer`}
              onClick={handleToggleChangePaymentConfirmations}
            >
              {/* Circle that moves based on isOnPaymentConfirmations */}
              <div
                className={`absolute w-5 h-5 bg-white top-[2px] left-[2px] rounded-full transition-all duration-300 shadow-custom2 ${
                  isOnPaymentConfirmations
                    ? "translate-x-[20px]"
                    : "translate-x-0"
                }`}
              ></div>
            </div>
          </div>
        </div>

        <hr className="border border-[#98A2B3]" />

        <div className="space-y-6">
          <h1 className="text-[14px] leading-5 font-medium text-[#008080CC] tracking-2-percent">
            NOTIFICATION CHANNELS
          </h1>

          <div className="flex items-center justify-between gap-2">
            <div className="space-y-[10px] max-w-[260px] w-full sm:max-w-full">
              <h1 className="md:text-[18px] text-[14px] md:leading-[30px] leading-5 font-medium tracking-2-percent text-[#3C3C3C]">
                Email
              </h1>
              <p className="md:text-[16px] text-[12px] md:leading-[18px] leading-[14px] font-medium text-[#98A2B3]">
                Summaries or detailed notifications sent to the registered
                email.
              </p>
            </div>
            <div
              className={`w-[44px] h-6 rounded-[12px] ${isOnEmail ? "bg-primary" : "bg-[#F2F4F7]"} relative cursor-pointer`}
              onClick={handleToggleChangeEmail}
            >
              {/* Circle that moves based on isOnEmail */}
              <div
                className={`absolute w-5 h-5 bg-white top-[2px] left-[2px] rounded-full transition-all duration-300 shadow-custom2 ${
                  isOnEmail ? "translate-x-[20px]" : "translate-x-0"
                }`}
              ></div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-2">
            <div className="space-y-[10px] max-w-[260px] w-full sm:max-w-full">
              <h1 className="md:text-[18px] text-[14px] md:leading-[30px] leading-5 font-medium tracking-2-percent text-[#3C3C3C]">
                Push Notifications
              </h1>
              <p className="md:text-[16px] text-[12px] md:leading-[18px] leading-[14px] font-medium text-[#98A2B3]">
                Sent to the device when the app is closed.
              </p>
            </div>
            <div
              className={`w-[44px] h-6  rounded-[12px] ${isOnPushNotifications ? "bg-primary" : "bg-[#F2F4F7]"} relative cursor-pointer`}
              onClick={handleToggleChangePushNotifications}
            >
              {/* Circle that moves based on isOnPushNotifications */}
              <div
                className={`absolute w-5 h-5 bg-white top-[2px] left-[2px] rounded-full transition-all duration-300 shadow-custom2 ${
                  isOnPushNotifications ? "translate-x-[20px]" : "translate-x-0"
                }`}
              ></div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-2">
            <div className="space-y-[10px] max-w-[260px] w-full sm:max-w-full">
              <h1 className="md:text-[18px] text-[14px] md:leading-[30px] leading-5 font-medium tracking-2-percent text-[#3C3C3C]">
                In-app Notifications
              </h1>
              <p className="md:text-[16px] text-[12px] md:leading-[18px] leading-[14px] font-medium text-[#98A2B3]">
                Displayed as alerts or banners within the app.
              </p>
            </div>
            <div
              className={`w-[44px] h-6  rounded-[12px] ${isOnInAppNotifications ? "bg-primary" : "bg-[#F2F4F7]"} relative cursor-pointer`}
              onClick={handleToggleChangeInAppNotifications}
            >
              {/* Circle that moves based on isOnInAppNotifications */}
              <div
                className={`absolute w-5 h-5 bg-white top-[2px] left-[2px] rounded-full transition-all duration-300 shadow-custom2 ${
                  isOnInAppNotifications
                    ? "translate-x-[20px]"
                    : "translate-x-0"
                }`}
              ></div>
            </div>
          </div>
        </div>

        <hr className="border border-[#98A2B3]" />

        <div className="space-y-[10px]">
          <h1 className="md:text-[18px] text-[14px] md:leading-[30px] leading-5 font-medium tracking-2-percent text-[#B3261E] cursor-pointer">
            Reset Notification Settings
          </h1>
          <p className="md:text-[16px] text-[12px] md:leading-[18px] leading-[14px] font-medium text-[#98A2B3]">
            Reset all notification settings by quickly reverting notification
            preferences to the default configuration.
          </p>
        </div>
      </div>
    </div>
  );
}
