const AboutCTA = () => {
  return (
    <div className="bg-[#0080800A] w-full h-[176px] flex flex-col items-center p-6">
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
  );
}

export default AboutCTA
