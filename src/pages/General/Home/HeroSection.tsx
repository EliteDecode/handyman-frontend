import manImage from "@/assets/images/handyManImage.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center sm:gap-0 gap-6 px-6 md:flex-row lg:px-[120px] md:px-10 w-full max-w-[1440px] z-10">
      {/* Left Content */}
      <div className="flex flex-col items-center w-full gap-6 text-center md:items-start md:text-start">
        <h1 className="text-[#191919] font-bold text-[24px] md:text-[48px] leading-[30.17px] md:leading-[60.34px] max-w-[315px] md:max-w-[733px] font-merriweather">
          Book <span className="text-[#008080]">Trusted Handymen</span> for Your
          Home or Business Needs
        </h1>
        <p className="text-[12px] md:text-[20px] leading-5 sm:leading-[32px] max-w-[315px] md:max-w-[733px] text-[#3C3C3C] tracking-[0.4px]">
          Our platform connects you to skilled handymen for any task big or
          small right in your area. Book now and experience professional
          services at your convenience. Join our waitlist and get early access
          to exclusive features and updates.
        </p>

        <Link to={"https://forms.gle/87jEekNcUUWExrG99"}>
          <button className="max-w-[208px] w-full h-14 px-4 bg-[#008080] text-white text-[18px] leading-[24px] font-semibold rounded-lg hover:bg-[#006666] transition-colors font-lato">
            Get Early Access
          </button>
        </Link>
      </div>

      {/* Right Image */}
      <div className="w-full  max-w-[466.258px] h-full justify-center flex items-center">
        <img
          src={manImage}
          alt="Handyman illustration showing services provided"
          className="w-full max-w-[400px] md:max-w-[1466.258px] max-h-[590px] h-full"
        />
      </div>
    </div>
  );
};

export default HeroSection;
