import phone from "@/assets/icons/phone.svg";
import message from "@/assets/icons/message.svg";

const ContactSupport = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-10 lg:px-[120px] w-full gap-8 h-full my-6 lg:my-20">
      {/* Text Section */}
      <div className="max-w-[550px] w-full text-center lg:text-left flex flex-col">
        <h1 className="text-[16px] sm:text-[28px] lg:text-[32px] leading-[24px] sm:leading-[36px] lg:leading-[48px] font-bold font-merriweather text-[#191919]">
          Contact Support
        </h1>
        <p className="text-[12px] sm:text-[18px] lg:text-[24px] leading-5 sm:leading-6 lg:leading-8  text-[#3C3C3C] mt-4">
          Need help? Our support team is here to assist you every step of the
          way.
        </p>
      </div>

      {/* Contact Methods */}
      <div className="flex flex-row items-center justify-center w-full gap-6 lg:flex-nowrap">
        {/* Phone Section */}
        <div className="sm:max-w-[246px] max-w-[179px] w-full gap-2 sm:px-6 px-[9.5px] sm:py-4 py-2 sm:flex-shrink-0 border border-[#98A2B3] rounded-lg flex items-center flex-col text-center">
          <div className="h-[60px] w-[60px] flex items-center justify-center bg-[#0080800A] rounded-full">
            <img src={phone} alt="Phone Icon" />
          </div>
          <div className="sm:max-w-[246px] max-w-[179px] w-full mt-4 ">
            <p className="text-[16px] sm:text-[20px] lg:text-[24px] leading-[24px] sm:leading-[26px] lg:leading-[28.8px] font-semibold text-[#191919]">
              Phone Number
            </p>
            <p className="text-[#3C3C3C] text-[12px] sm:text-[18px] lg:text-[20px] leading-4 sm:leading-7 lg:leading-8">
              +234-111-222-333 <br /> +234-111-222-333
            </p>
          </div>
        </div>

        {/* Email Section */}
        <div className="sm:max-w-[246px] max-w-[179px] w-full gap-2 sm:px-6 px-[9.5px] sm:py-4 py-2 border border-[#98A2B3] rounded-lg flex items-center flex-col text-center">
          <div className="h-[60px] w-[60px] flex items-center justify-center bg-[#0080800A] rounded-full">
            <img src={message} alt="Message Icon" />
          </div>
          <div className="max-w-[246px] w-full mt-4 ">
            <p className="text-[16px] sm:text-[20px] lg:text-[24px] leading-[24px] sm:leading-[26px] lg:leading-[28.8px] font-semibold text-[#191919]">
              Email Address
            </p>
            <p className="text-[12px] sm:text-[18px] lg:text-[20px] leading-4 sm:leading-7 lg:leading-8 text-[#008080]">
              info@handyman.com <br /> info@handyman.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;
