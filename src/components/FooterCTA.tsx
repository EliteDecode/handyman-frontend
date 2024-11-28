const FooterCTA = ({ title }: FooterCTAProps) => {
  return (
    <div className="bg-[#0080800A] w-full flex flex-col items-center justify-center px-6 py-8 lg:py-12 lg:mt-20">
      <div className="md:hidden flex flex-col justify-center items-center">
        <h2 className="font-merriweather font-bold leading-6">
          Ready to get started?
        </h2>
        <p className="mt-3 font-lato text-xs leading-5 text-center tracking-wide  ">
          Whether you need a quick fix or a major project done, Handyman is here
          to connect you with the best professionals in your area
        </p>
        <button className="bg-[#008080] mt-6 py-2 px-4 rounded-lg font-lato text-white outline-none font-semibold text-xs">
          Book a Handyman
        </button>
      </div>

      {title ? (
        <div className=" hidden md:flex w-full md:w-[718px] lg:w-[788px] xl:w-[1200px] h-full justify-between items-center gap-3 lg:py-[84px]">
          <h2 className="font-merriweather font-bold md:text-2xl lg:leading-[50px] lg:text-[40px] lg:w-[534px] ">
            Ready to experience a new level of service?
          </h2>

          <div className="flex gap-3">
            <button className="bg-[#008080] text-white font-lato py-4 px-6 rounded-lg lg:text-lg font-semibold outline-none">
              Book a Handyman
            </button>
            <button className="border-[1.5px] border-[#008080] text-[#008080] font-lato py-4 px-6 rounded-lg lg:text-lg font-semibold outline-none">
              Learn More
            </button>
          </div>
        </div>
      ) : (
        <div className="hidden md:flex flex-col justify-center items-center">
          <h2 className="font-merriweather font-bold lg:leading-[48px] lg:text-[32px] ">
            Ready to get started?
          </h2>
          <p className="mt-6 font-lato lg:text-[32px] lg:leading-[48px] text-center lg:w-[1000px] xl:w-[1044px] ">
            Whether you need a quick fix or a major project done, Handyman is
            here to connect you with the best professionals in your area
          </p>
          <button className="bg-[#008080] mt-8 py-4 px-6 rounded-lg font-lato text-white outline-none font-semibold md:text-sm lg:text-base">
            Book a Handyman
          </button>
        </div>
      )}
    </div>
  );
};

export default FooterCTA;
