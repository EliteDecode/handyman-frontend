import { popularServices } from "@/lib/demoData";

const PopularServices = () => {
  return (
    <div className="my-8 lg:mt-20 px-6 w-full flex flex-col items-center justify-center">
      <div className=" md:w-full py-4">
        <h2 className="font-merriweather font-bold text-center md:text-2xl lg:text-[32px] md:leading-4 lg:leading-[48px]">
          Our Popular Services
        </h2>

        <div className="w-full flex items-center justify-center">
          <div className="w-full xl:w-[1200px] flex flex-col md:flex-row md:flex-wrap xl:justify-between lg:flex-wrap justify-center items-center xl:gap-14 gap-6 font-lato">
            {popularServices.map((service) => (
              <div
                className="w-[284px] lg:w-[345px] flex flex-col justify-center items-center mt-6"
                key={service.id}
              >
                <div className="">
                  <img
                    src={service.icon}
                    alt="toolsImg"
                    className="w-[24px] md:w-[42px] lg:w-[60px]"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-medium lg:font-bold text-center tracking-wide mt-4 md:text-xl lg:text-2xl">
                  {service.title}
                </h3>
                <p className="text-center text-xs md:text-lg lg:text-2xl tracking-wide leading-5 mt-2 md:mt-3 lg:mt-4 lg:leading-8">
                  {service.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularServices;
