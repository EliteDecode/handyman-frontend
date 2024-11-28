import bg from "@/assets/images/pageHero-bg.png";
const PageHero = ({ title, subtext }: PageHeroProps) => {
  return (
    <div
      className="bg-center bg-no-repeat bg-cover w-full"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="bg-black/50 text-white min-h-[142px] flex flex-col justify-center px-9 lg:py-28 lg:px-32 md:py-16 md:px-20 py-4">
        <div className=" h-full ">
          <h2 className="font-bold font-merriweather leading-6 lg:leading-[70px] md:text-4xl lg:text-[56px]">
            {title}
          </h2>
          <p className="max-w-[214px] md:max-w-[357px] lg:max-w-[500px] font-semibold font-lato text-xs md:text-base lg:text-xl mt-2 lg:mt-8 leading-4 lg:leading-8">
            {subtext}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageHero;
