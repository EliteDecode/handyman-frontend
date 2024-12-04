import { servicesInfos } from "@/lib/demoData";

const ServicesInfo = () => {
  return (
    <div className="my-8 px-6 lg:mt-20">
      <div className="w-full flex justify-center">
        <div className="lg:w-[573px] lg:flex flex-col items-center">
          <h2 className="font-bold font-merriweather text-center md:text-2xl lg:text-[32px] leading-10">
            Get it done right!
          </h2>
          <p className="text-xs md:text-base lg:text-xl lg:leading-8  text-center tracking-wide leading-5 mt-2 lg:mt-4">
            Powerful Features Designed to Make Your Life Easier—Find the Right
            Professionals Quickly and Effortlessly
          </p>
        </div>
      </div>

      <div className="">
        {servicesInfos.map((servicesInfo) => {
          const id = servicesInfo.id % 2;

          return (
            <div
              className={`${id ? "lg:flex-row" : "lg:flex-row-reverse"} mt-6 lg:mt-10 w-full flex flex-col justify-center items-center lg:gap-6`}
            >
              <div className="w-full lg:w-[486px] flex justify-center items-center">
                <img
                  src={servicesInfo.image}
                  alt=""
                  className="w-[380px] md:w-[486px] lg:w-[486px] rounded-3xl"
                />
              </div>
              <div className="mt-4 w-[380px] md:w-[486px] lg:w-[690px]">
                <h2 className="font-merriweather font-bold text-sm md:text-lg lg:text-2xl leading-6 lg:leading-8">
                  {servicesInfo.title}
                </h2>
                <p className=" text-sm md:text-base lg:text-lg leading-5 lg:leading-8 tracking-wide mt-2 lg:mt-4 ">
                  {servicesInfo.subtext}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesInfo;
