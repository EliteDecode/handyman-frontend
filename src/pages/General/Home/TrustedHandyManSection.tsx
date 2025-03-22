import handyManWorkingImage from "@/assets/images/handyManWorkingImage.png";
import checkWithCircle from "@/assets/icons/checkWithCircle.svg";
import { Link } from "react-router-dom";

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
      <div className="flex flex-col w-full text-[#3C3C3C] gap-4">
        <h1 className="sm:text-[30px] sm:leading-[48px] text-[16px] leading-6 font-bold text-center md:text-start text-[#3C3C3C] font-merriweather">
          Find the Right Professionals Quickly and Effortlessly
        </h1>
        <div className="flex flex-col w-full text-[#3C3C3C] gap-8">
          <p className="sm:text-[20px] text-[12px] leading-5 sm:leading-[32px] text-center md:text-start text-[#3C3C3C]">
            Handyman offers a seamless experience for finding trusted handymen
            and managing service requests. Whether for home or business, our
            platform provides a range of solutions to meet all your needs with
            just a click
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

          <Link
            to={"/role-selection"}
            className="text-[18px] flex items-center justify-center  leading-[24px] font-semibold text-[#FFFFFF] bg-[#008080] w-[140px] h-14 rounded-lg  md:mt-8 font-lato"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrustedHandyManSection;
