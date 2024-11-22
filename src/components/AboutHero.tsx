import bg from "@/assets/images/about-hero-bg.png";
const AboutHero = () => {
  return (
    <div
      className="bg-center bg-no-repeat bg-cover w-full"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="bg-black/50 text-white min-h-[142px] py-6 px-9 lg:py-28 lg:px-32 md:py-16 md:px-20">
        <div className="max-w-[214px] md:max-w-[357px] lg:max-w-[500px]">
          <h2 className="font-bold font-merriweather leading-6 md:text-4xl lg:text-[56px]">
            About Handyman
          </h2>
          <p className="font-semibold font-lato text-xs md:text-base lg:text-xl mt-2 lg:mt-8 leading-4 lg:leading-8">
            Connecting Skilled Handymen with Individuals and Businesses Across
            Nigeria—Quality Service, Delivered with Trust.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutHero
