import helpAndSupport from "../../../../public/images/helpAndSupport.png";

const HelpAndSupportHero = () => (
  <div className="flex flex-col items-center sm:h-[400px] h-[142px] relative">
    <img
      src={helpAndSupport}
      alt="Help and Support"
      className="object-cover w-full h-full"
    />
    <div className="absolute text-[#FFFFFF] inset-0 h-full bg-black/50 flex gap-2 justify-center px-6 lg:px-[120px] md:px-10 flex-col">
      <h1 className="sm:text-[56px] text-[16px] sm:leading-[70.39px] leading-6 font-merriweather font-bold">
        Help & Support Center
      </h1>
      <p className="sm:text-[20px] text-[12px] sm:leading-[32px] leading-4 font-lato font-semi-bold sm:w-full w-[214px]">
        Find answers to your questions, get assistance, or reach out to our team
        for support.
      </p>
    </div>
  </div>
);

export default HelpAndSupportHero;
