import bg from "@/assets/images/about-hero-bg.png";
const AboutHero = () => {
  return (
    <div
      className="bg-[url('/assets/images/about-hero-bg.png')] bg-center bg-no-repeat bg-cover w-full"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="bg-black/50 text-white min-h-[142px] py-6 px-9 lg:py-28 lg:px-32">
        <div className="max-w-[214px]">
          <h2 className="font-bold font-merriweather leading-6">
            About Handyman
          </h2>
          <p className="font-semibold font-lato text-xs mt-2 leading-4">
            Connecting Skilled Handymen with Individuals and Businesses Across
            Nigeria—Quality Service, Delivered with Trust.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutHero
