import { contactDetails } from "@/lib/demoData";

const ContactCard = () => {
  return (
    <div className="flex items-center justify-center gap-5 flex-wrap my-8 px-5">
      {contactDetails.map((contactDetail) => {
        const Icon = contactDetail.icon;
        return (
          <div
            className="w-[160px] flex items-center justify-center h-[152px] p-6 rounded-xl border border-[#98A2B3] shadow-md shadow-[#10182814]"
            key={contactDetail.id}
          >
            <div className="w-[132px] flex flex-col items-center gap-4">
              <div className="w-8 h-8 bg-[#0080800A] flex items-center justify-center rounded-3xl">
                <Icon color="#008080" />
              </div>
              <div className="flex flex-col items-center justify-center gap-2 w-full">
                <div className="font-bold leading-6 font-merriweather">
                  {contactDetail.title}
                </div>
                <div className="text-center font-lato leading-5 text-xs tracking-wide text-[#3C3C3C]">
                  {contactDetail.desc}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContactCard;
