import { coreValues } from "@/lib/demoData";

const AboutTeam = () => {
  return (
    <section className="px-6 my-6 lg:mt-20 lg:mb-14 w-full flex justify-center items-center">
      <div className="lg:w-[908px] xl:w-[1200px] mx-auto md:flex gap-10">
        <div className="text-center md:text-left md:w-1/2">
          <h2 className="font-bold text-base md:text-xl lg:text-3xl lg:leading-10">Our Core Values</h2>
          <p className="mt-6 tracking-2-percent text-xs md:text-base lg:text-xl leading-5 lg:leading-8">
            At Handyman, our core values define who we are and guide how we
            operate. They reflect our commitment to excellence, our customers,
            and the communities we serve.
          </p>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2">
          {coreValues.map((val, i) => (
            <div
              className="rounded-lg shadow-custom h-32 border-l-8 border-[#008080] px-4 py-2 mb-6"
              key={i}
            >
              <div className="flex items-center gap-2">
                <img src={val.img} alt="icon" />
                <h3 className="font-bold text-sm lg:text-base">{val.title}</h3>
              </div>
              <p className="mt-4 text-sm lg:text-base tracking-2-percent leading-5 mb-6">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
