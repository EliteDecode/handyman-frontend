import handyManWithClient from "@/assets/images/handyManWithClient.png";
import { Link } from "react-router-dom";

const GrowBusinessSection = () => {
  return (
    <div className="lg:flex-row flex-col justify-center items-center md:mt-[80px] mt-8 h-full bg-[#0080800A] w-full flex pt-[32px] pb-[34px] px-6 lg:px-[120px] md:px-10 gap-6">
      <div className="flex flex-col items-center text-center lg:items-start lg:text-start max-w-[636px] max-h-[296px] w-full h-full">
        <h1 className="text-[#000000] sm:text-[32px] text-[16px] sm:leading-[48px] leading-6 font-bold font-merriweather">
          Grow Your Business with Handyman: Connect, Build, and Thrive
        </h1>
        <p className="lg:mt-4 mt-2 text-[#3C3C3C] sm:text-[20px] text-[12px] sm:leading-[32px] leading-[20px]">
          Are you a handyman looking to reach more customers and grow your
          business? Join Handyman today and connect with individuals and
          companies in need of trusted, skilled professionals like you.{" "}
        </p>
        <Link to={"/auth/handyman-signup"}>
          <button className="text-[18px] lg:mt-8 mt-6 font-lato leading-[24px] font-semibold text-[#FFFFFF] bg-[#008080] w-[217px] h-14 rounded-lg">
            Become a Handyman
          </button>
        </Link>
      </div>
      <img
        className="max-w-[540px] max-h-[386px] rounded-[8.65px] w-full h-full"
        src={handyManWithClient}
        alt="handy Man With Client"
      />
    </div>
  );
};
export default GrowBusinessSection;
