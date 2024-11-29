import { contactDetails } from "@/lib/demoData";

const ContactCard = () => {
  return (
    <section className="flex justify-center items-center my-8 md:my-14 lg:my-20">
      <div className="flex items-center justify-center gap-5 flex-wrap  px-5 lg:w-[1200px] xl:justify-between">
        {contactDetails.map((contactDetail) => {
          const Icon = contactDetail.icon;
          return (
            <div
              className="w-[160px] md:w-[203px] lg:w-[246px] h-[152px] md:h-[174.5px] lg:h-[197px] flex items-center justify-center p-6 rounded-xl border border-[#98A2B3] shadow-md shadow-[#10182814]"
              key={contactDetail.id}
            >
              <div className="w-[132px] md:w-[165px] lg:w-[198px] flex flex-col items-center gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-[#0080800A] flex items-center justify-center rounded-3xl">
                  <Icon color="#008080" className="md:w-7 md:h-7  lg:w-8 lg:h-8" />
                </div>
                <div className="flex flex-col items-center justify-center gap-2 w-full">
                  <div className="font-bold leading-6 font-merriweather md:text-xl lg:text-2xl lg:font-semibold lg:leading-7 ">
                    {contactDetail.title}
                  </div>
                  <div className="text-center font-lato leading-5 md:leading-6 lg:leading-8 text-xs md:text-base lg:text-xl tracking-wide text-[#3C3C3C]">
                    {contactDetail.desc}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ContactCard;
