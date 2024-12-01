import handyManWithClient from "@/assets/images/image 138.png";

const GrowBusinessSection = () => {
  return (
    <div className="lg:flex-row flex-col justify-center items-center md:mt-[80px] mt-8 h-fit bg-[#0080800A] w-full flex pt-[32px] pb-[34px] px-6 lg:px-[120px] md:px-10 gap-6">
      <div className="flex flex-col items-center text-center lg:items-start lg:text-start ">
        <h1 className="text-[#000000] sm:text-[32px] text-[16px] sm:leading-[48px] leading-6 font-bold font-merriweather">
          Grow Your Business with Handyman: Connect, Build, and Thrive
        </h1>
        <p className="lg:mt-4 mt-2 text-[#3C3C3C] sm:text-[20px] text-[12px] sm:leading-[32px] leading-[20px]">
          Are you a handyman looking to reach more customers and grow your
          business? Join Handyman today and connect with individuals and
          companies in need of trusted, skilled professionals like you.{" "}
        </p>
        <button className="sm:text-[18px] text-[12px] lg:mt-8 mt-6 sm:leading-[24px] leading-4 font-semibold text-[#FFFFFF] bg-[#008080] sm:w-[233px] w-[155px] sm:h-14 h-8 rounded-lg">
          Sign up as a Handyman
        </button>
      </div>
      <img
        className="w-full"
        src={handyManWithClient}
        alt="handy Man With Client"
      />
    </div>
  );
};
export default GrowBusinessSection;
