const AboutCTA = () => {
  return (
    <div className="bg-[#0080800A] md:bg-[#F4FAFA] w-full h-[176px] md:h-[244px] md:pcx-[120px] lg:h-[312px] flex flex-col items-center p-6">
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

      <div className=" hidden md:flex w-full md:w-[718px] lg:w-[788px] xl:w-[1200px] h-full justify-between items-center gap-3">
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
    </div>
  );
};

export default AboutCTA;
