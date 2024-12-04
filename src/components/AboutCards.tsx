import { cardDetails } from "@/lib/demoData";

const AboutCards = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex flex-wrap lg:max-w-[1280px] xl:justify-between justify-center items-center gap- overflow-hidden">
        {cardDetails.map((cardDetail, i) => (
          <div className="px-6 my-3" key={i}>
            <div className="w-[340px] md:w-[355px] lg:w-[370px] h-[275px] md:h-[353px] lg:h-[430px] shadow-md rounded-xl flex flex-col">
              <div className="bg-[#008080] w-full h-28 md:h-[129px] lg:h-[146px] rounded-t-xl  relative flex justify-center items-center">
                <h2 className="font-merriweather font-bold text-center text-white leading-6 md:text-[28px] lg:text-[40px]">
                  {cardDetail.title}
                </h2>

                <div className="w-full flex flex-col justify-center items-center absolute -bottom-10 md:-bottom-[68px] lg:-bottom-24">
                  <div className="border-2 lg:border-[4px] border-white rounded-full p-4 w-[60px] h-[60px] md:w-[90px] md:h-[90px]  lg:w-[120px] lg:h-[120px]  bg-[#008080] flex justify-center items-center">
                    <img
                      src={cardDetail.icon}
                      color="white"
                      className="w-[24px] lg:w-16"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <div className="h-full flex justify-center items-center">
                <p className="w-[200px] md:w-[80%] lg:w-full text-center text-xs md:text-base lg:text-xl leading-5 md:leading-[26px] lg:leading-8 mt-2 md:mt-8 lg:mt-20 lg:px-6 ">
                  {cardDetail.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCards;
