import handyManWorkingImage from "../../../../public/images/image 184.png";
import checkWithCircle from "../../../../public/icons/checkWithCircle.svg";

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
      <div className="flex flex-col w-full gap-4 text-[#3C3C3C]">
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
              <img className="w-4 h-4" src={checkWithCircle} alt="" />
              <p className="sm:text-[18px] sm:leading-[24px] text-[12px] leading-[20px]">
                {item}
              </p>
            </div>
          ))}
        </ul>

        <button className="text-[18px] leading-[24px] font-semibold text-[#FFFFFF] bg-[#008080] w-[140px] h-14 rounded-lg">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default TrustedHandyManSection;
