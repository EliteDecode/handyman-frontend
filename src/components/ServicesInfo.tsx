import { servicesInfos } from "@/lib/utils";

const ServicesInfo = () => {
  return (
    <div className="my-8 px-6">
      <div className="">
        <h2 className="font-bold font-merriweather text-center">
          Get it done right!
        </h2>
        <p className="text-xs font-lato text-center tracking-wide leading-5 mt-2">
          Powerful Features Designed to Make Your Life Easier—Find the Right
          Professionals Quickly and Effortlessly
        </p>
      </div>

      <div className="">
        {servicesInfos.map((servicesInfo) => (
          <div className="mt-6 w-full flex flex-col justify-center items-center">
            <div className="w-full flex justify-center items-center">
              <img
                src={servicesInfo.image}
                alt=""
                className="w-[380px] rounded-3xl"
              />
            </div>
            <div className="mt-4 w-[380px]">
              <h2 className="font-merriweather font-bold text-sm leading-6">
                {servicesInfo.title}
              </h2>
              <p className="font-lato text-sm leading-5 tracking-wide mt-2 ">
                {servicesInfo.subtext}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesInfo;
