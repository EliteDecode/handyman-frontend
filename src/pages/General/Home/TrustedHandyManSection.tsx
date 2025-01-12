import handyManWorkingImage from "@/assets/images/handyManWorkingImage.png";
import checkWithCircle from "@/assets/icons/checkWithCircle.svg";
import searchIcon from "@/assets/icons/search_icon.svg";

const TrustedHandyManSection = () => {
  const trustedHandyMan: string[] = [
    "Verified Handymen",
    "Easy Booking",
    "Location Based Matching",
    "Flexible Payment Methods",
    "Customers Reviews and Ratings",
  ];

  return (
    <div className="container mx-auto md:mt-[80px] mt-6 flex flex-col-reverse md:flex-row px-6 lg:px-[120px] md:px-10 gap-6 w-full">
      <img src={handyManWorkingImage} alt="" />
      <div className="flex flex-col w-full gap-6 text-[#3C3C3C]">
        <h1 className="sm:text-[30px] sm:leading-[48px] text-[16px] leading-6 font-bold text-center md:text-start text-[#3C3C3C] font-merriweather">
          Find the Right Professionals Quickly and Effortlessly
        </h1>
        <p className="sm:text-[20px] text-[12px] leading-5 sm:leading-[32px] text-center md:text-start text-[#3C3C3C]">
          Handyman offers a seamless experience for finding trusted handymen and
          managing service requests. Whether for home or business, our platform
          provides a range of solutions to meet all your needs with just a click
        </p>

        <ul className="flex flex-col items-start sm:gap-5 gap-[10px]">
          {trustedHandyMan.map((item, index) => (
            <div key={index} className="flex items-center gap-[18.67px]">
              <img
                className="sm:w-[22.67px] sm:h-[22.67px] w-5 h-5"
                src={checkWithCircle}
                alt=""
              />
              <p className="sm:text-[18px] sm:leading-[24px] text-[12px] leading-[20px]">
                {item}
              </p>
            </div>
          ))}
        </ul>

        <button className="text-[18px] leading-[24px] font-semibold text-[#FFFFFF] bg-[#008080] w-[140px] h-14 rounded-lg md:block hidden">
          Get Started
        </button>

        <form
          className="flex flex-row items-center w-full gap-4 md:hidden md:mt-8"
          aria-labelledby="service-search"
        >
          <div className="relative w-full">
            <input
              type="text"
              id="service-search"
              className="w-full md:h-14 h-10 border-2 border-[#008080] rounded-lg pl-12 pr-4 py-3 placeholder-gray-500 focus:outline-none focus:ring focus:ring-[#008080] placeholder:leading-[20px] placeholder:text-[12px] placeholder:md:leading-8 placeholder:md:text-[20px]"
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
      </div>
    </div>
  );
};

export default TrustedHandyManSection;
