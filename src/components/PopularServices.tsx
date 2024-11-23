import { popularServices } from "@/lib/utils";

const PopularServices = () => {
  return (
    <div className="my-8 px-6 w-full flex flex-col items-center justify-center">
      <div className=" md:w-full py-4">
        <h2 className="font-merriweather font-bold text-center">
          Our Popular Services
        </h2>

        <div className="w-full flex  flex-wrap justify-center items-center font-lato">
          {popularServices.map((service) => (
            <div
              className="w-[284px] flex flex-col justify-center items-center mt-6"
              key={service.id}
            >
              <div className="">
                <img src={service.icon} alt="toolsImg" className="w-[24px]" />
              </div>
              <h3 className="font-medium text-center tracking-wide mt-4">
                {service.title}
              </h3>
              <p className="text-center text-xs tracking-wide leading-5 mt-2">
                {service.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularServices;
