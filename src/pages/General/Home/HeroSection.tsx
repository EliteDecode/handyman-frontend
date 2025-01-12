import manImage from "@/assets/images/handyManImage.png";
import searchIcon from "@/assets/icons/search_icon.svg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center sm:gap-12 gap-6 px-6 md:flex-row lg:px-[120px] md:px-10 w-full max-w-[1440px]">
      {/* Left Content */}
      <div className="flex flex-col items-center w-full gap-6 text-center md:items-start md:text-start">
        <h1 className="text-[#191919] font-bold text-[24px] md:text-[48px] leading-[30.17px] md:leading-[60.34px] max-w-[315px] md:max-w-[690px] font-merriweather">
          Book <span className="text-[#008080]">Trusted Handymen</span> for Your
          Home or Business Needs
        </h1>

        <p className="text-[16px] md:text-[20px] leading-[24px] md:leading-[32px] max-w-[315px] md:max-w-[690px] text-[#3C3C3C]">
          Our platform connects you to skilled handymen for any task—big or
          small—right in your area. Book now and experience professional
          services at your convenience.
        </p>

        <form
          className="flex-row items-center hidden w-full gap-4 md:flex md:mt-8"
          aria-labelledby="service-search"
        >
          <div className="relative w-full">
            <input
              type="text"
              id="service-search"
              className="w-full md:h-14 h-10 border-2 border-[#008080] rounded-lg pl-12 pr-4 py-3 placeholder-gray-500 focus:outline-none focus:ring focus:ring-[#008080] placeholder:leading-[20px] placeholder:text-[12px] placeholder:sm:leading-8 placeholder:sm:text-[20px]"
              placeholder="What service are you looking for?"
            />
            <img
              src={searchIcon}
              alt="Search Icon"
              className="absolute w-6 h-6 transform -translate-y-1/2 left-4 top-1/2"
              title="Search Icon"
            />
          </div>
          <button
            type="submit"
            className="md:w-[102px] w-[81px] md:h-14 h-10 bg-[#008080] text-white md:text-[18px] text-[12px] leading-[16px] font-semibold rounded-lg flex items-center justify-center hover:bg-[#006666] transition-colors"
          >
            Search
          </button>
        </form>

        <div className="flex items-center justify-center w-full gap-6 md:hidden">
          <Link className="w-full" to={"/role-selection"}>
            <button className="w-full  h-14 px-4 bg-[#008080] text-white md:text-[18px] text-[12px] leading-[24px] font-semibold rounded-lg hover:bg-[#006666] transition-colors">
              Login / SignUp
            </button>
          </Link>

          <Link className="w-full" to={"/auth/handyman-signup"}>
            <button className="w-full h-14 px-4 border-[1.5px] border-[#008080] rounded-lg text-[#008080] md:text-[18px] text-[12px] md:leading-[24px] font-semibold">
              Become a Handyman
            </button>
          </Link>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-auto max-w-[320px]">
        <img
          src={manImage}
          alt="Handyman illustration showing services provided"
          className="w-full max-w-[400px] md:max-w-[500px]"
        />
      </div>
    </div>
  );
};

export default HeroSection;
